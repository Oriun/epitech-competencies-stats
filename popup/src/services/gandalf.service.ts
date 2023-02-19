import {
  GandalfCompentency,
  GandalfData,
  GandalfMark,
} from "../types/gandalf.types";
import crawlPage from "./parser.service";
import { testData } from "./test-data";

export async function getFromStorage(): Promise<GandalfData> {
  const data = await chrome.storage.local.get("gandalf2");
  console.log(data);
  if (data.gandalf) {
    return data.gandalf;
  }
  return [];
}
export async function saveToStorage(data: GandalfData) {
  console.log("Saving to storage");
  await chrome.storage.local.set({ gandalf: data });
  console.log("Saved to storage");
  console.log("in storage", await getFromStorage());
}

export default async function getData(): Promise<GandalfData> {
  let data: GandalfData = [];
  try {
    data = await crawlPage();
  } catch (e) {
    console.error(e);
    console.log("Crawling failed");
    // still usefull for testing
    return testData;
  }
  if (data.length > 0) {
    console.log("Crawling success");
    await saveToStorage(data);
    return data;
  }
  console.log("No data found while crawling");
  // throw new Error("No data found");
  const storedData = await getFromStorage();
  if (storedData.length > 0) {
    console.log("Using data from storage");
    return storedData;
  }
  console.log("No data found in storage");
  throw new Error("No data found");
}

export function isSuccess(comp: GandalfCompentency) {
  return [GandalfMark.success, GandalfMark.above].includes(comp.status);
}
export function isFailure(comp: GandalfCompentency) {
  return [GandalfMark.failed, GandalfMark.below].includes(comp.status);
}
export function isUnrated(comp: GandalfCompentency) {
  return GandalfMark.unrated === comp.status;
}

export function getCompetenciesStatusCounts(data: GandalfData) {
  let success = 0;
  let failure = 0;
  let unrated = 0;
  data.forEach((item) => {
    item.children.forEach((child) => {
      child.children.forEach((grandChild) => {
        if (isSuccess(grandChild)) {
          success++;
        } else if (isFailure(grandChild)) {
          failure++;
        } else if (isUnrated(grandChild)) {
          unrated++;
        }
      });
    });
  });
  return { success, failure, unrated, total: success + failure + unrated };
}

export function getProjectSet(data: GandalfData) {
  const set = new Set(
    data.flatMap((item) => {
      return item.children.flatMap((child) => {
        return child.children.flatMap((grandChild) => {
          const success = grandChild.expectations.succeeded.map(
            (s) => s.project
          );
          const failure = grandChild.expectations.failed.map((s) => s.project);
          return [...success, ...failure];
        });
      });
    })
  );
  console.log([...set]);
  return set;
}

export function getSubcategories(data: GandalfData) {
  return data.flatMap((item) => {
    return item.children;
  });
}

export function getSubcategoriesWithoutFailures(data: GandalfData) {
  return data.flatMap((item) => {
    return item.children.flatMap((child) => {
      return child.children.some(isFailure) ? [] : [child];
    });
  });
}

export function getCompetencies(data: GandalfData) {
  return data.flatMap((item) => {
    return item.children.flatMap((child) => {
      return child.children.flatMap((grandChild) => {
        return grandChild;
      });
    });
  });
}

export const ColorForMark: Record<
  GandalfMark,
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
> = {
  [GandalfMark.above]: "amber",
  [GandalfMark.success]: "emerald",
  [GandalfMark.below]: "orange",
  [GandalfMark.failed]: "red",
  [GandalfMark.unrated]: "gray",
};

export const GandalfMarks: GandalfMark[] = [
  GandalfMark.above,
  GandalfMark.success,
  GandalfMark.below,
  GandalfMark.failed,
  GandalfMark.unrated,
];
export const GandalfStatus: GandalfMark[] = [
  GandalfMark.success,
  GandalfMark.failed,
  GandalfMark.unrated,
];
