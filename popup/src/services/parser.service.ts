import type {
  GandalfCategory,
  GandalfCompentency,
  GandalfData,
  GandalfExpectations,
  GandalfMark,
  GandalfProject,
  GandalfSubCategory,
} from "../types/gandalf.types";

function cleanText(text: string | null | undefined) {
  if (!text) return "";
  return text.replace(/(\r\n|\n|\r|\t)/gm, "").trim();
}
function parseName(str: string | null | undefined): {
  code: string;
  name: string;
} {
  const clean = cleanText(str);
  const parts = /^(?<code>[A-Z0-9\.]*[A-Z0-9])\.? -? ?(?<name>.+)$/.exec(clean);
  if (!parts?.groups) return { code: "", name: clean };
  const result = {
    code: parts.groups.code ?? "",
    name: parts.groups.name ?? "",
  };
  return result;
}

function parseExpectations(
  expectation: Element | null | undefined
): GandalfProject[] {
  if (!expectation?.childElementCount) return [];
  return ([...expectation?.children] as HTMLAnchorElement[]).map((link) => {
    return {
      project: cleanText(link.textContent),
      url: link.href,
      mark: link.querySelector("i")!.title as GandalfMark,
    };
  });
}

function parseCompetency(competency: Element): GandalfCompentency {
  const { code, name } = parseName(
    competency.querySelector("div.competencyLine")?.textContent
  );
  const status = competency
    .querySelector("div.competencyLine")!
    .querySelector("i")!.title as GandalfMark;
  const expectations: GandalfExpectations = {
    succeeded: parseExpectations(
      competency.querySelector(".expectationSuccessContainer")
    ),
    failed: parseExpectations(
      competency.querySelector(".expectationFailContainer")
    ),
  };
  return { name, code, status, expectations };
}

function parseSubCategory(subCategory: Element): GandalfSubCategory {
  const { code, name } = parseName(
    subCategory.querySelector("div.competencyLine")?.textContent
  );
  const competencyElements = [...subCategory.children]
    .slice(1)
    .map((e) => e.children[0]);

  const competencies = competencyElements.map(parseCompetency);
  return { name, code, children: competencies };
}
function parseCategory(category: Element): GandalfCategory {
  const { code, name } = parseName(
    category.querySelector("div.competencyLine")?.textContent
  );
  const subCategoryElements = [...category.children]
    .slice(1)
    .map((e) => e.children[0]);

  const subCategories = subCategoryElements.map(parseSubCategory);

  return { name, code, children: subCategories };
}
function parseHtml(container: Element | null): GandalfData {
  if (!container) {
    if (process.env.NODE_ENV === "development")
      throw new Error("No container found");
    return [];
  }
  const categories = [
    ...container.querySelectorAll("ul.domainContainer.tree > li.branch"),
  ];
  return categories.map(parseCategory);
}

export default function crawlPage(): Promise<GandalfData> {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id! },
          func: function () {
            if (
              !document.location.href.startsWith(
                "https://gandalf.epitech.eu/local/graph/view.php"
              )
            )
              return "";
            return document.body.innerHTML;
          },
        },
        (args) => {
          try {
            console.log("a", args);
            let body = "";
            try {
              const [{ result }] = args;
              body = result;
            } catch (e) {
              console.error(e);
            }
            const dom = document.createElement("body");
            dom.innerHTML = body;
            const container = dom.querySelector(".domainsContainer");
            const rawData = parseHtml(container);
            console.log(rawData);
            resolve(rawData);
          } catch (e) {
            reject(e);
          }
        }
      );
    });
  });
}
