function cleanText(text) {
  return text.replace(/(\r\n|\n|\r|\t)/gm, "").trim();
}
function parseName(str) {
  const clean = cleanText(str);
  const parts = /^(?<code>[A-Z0-9\.]*[A-Z0-9])\.? -? ?(?<name>.+)$/.exec(clean);
  if (!parts) return { code: null, name: clean };
  return ({ code, name } = parts?.groups);
}

function parseExpectations(expectation) {
  if (!expectation?.childElementCount) return [];
  return [...expectation?.children].map((link) => {
    return {
      project: cleanText(link.textContent),
      url: link.href,
      mark: link.querySelector("i")?.title,
    };
  });
}

function parseCompetency(competency) {
  const { code, name } = parseName(
    competency.querySelector("div.competencyLine").textContent
  );
  const status = competency
    .querySelector("div.competencyLine")
    .querySelector("i").title;
  const expectations = {
    succeded: parseExpectations(
      competency.querySelector(".expectationSuccessContainer")
    ),
    failed: parseExpectations(
      competency.querySelector(".expectationFailContainer")
    ),
  };
  return { name, code, status, expectations };
}

function parseSubCategory(subCategory) {
  const { code, name } = parseName(
    subCategory.querySelector("div.competencyLine").textContent
  );
  const competencyElements = [...subCategory.children]
    .slice(1)
    .map((e) => e.children[0]);

  const competencies = competencyElements.map(parseCompetency);
  return { name, code, children: competencies };
}
function parseCategory(category) {
  const { code, name } = parseName(
    category.querySelector("div.competencyLine").textContent
  );
  const subCategoryElements = [...category.children]
    .slice(1)
    .map((e) => e.children[0]);

  const subCategories = subCategoryElements.map(parseSubCategory);

  return { name, code, children: subCategories };
}
function parseHtml(container) {
  const categories = [
    ...container.querySelectorAll("ul.domainContainer.tree > li.branch"),
  ];
  return categories.map(parseCategory);
}

function crawlPage() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          func: function () {
            return document.body.innerHTML;
          },
        },
        (args) => {
          try {
            const [{ result }] = args;
            const dom = document.createElement("body");
            dom.innerHTML = result;
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
crawlPage();
