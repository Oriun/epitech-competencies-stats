export const enum GandalfMark {
  above = "success above expectations",
  success = "success",
  below = "below",
  failed = "failed",
  unrated = "unrated",
}
export type GandalfBase = {
  name: string;
  code: string;
};
export type GandalfProject = {
  project: string;
  mark: GandalfMark;
  url: string;
};
export type GandalfExpectations = {
  failed: GandalfProject[];
  succeeded: GandalfProject[];
};
export type GandalfCompentency = GandalfBase & {
  expectations: GandalfExpectations;
  status: GandalfMark;
};
export type GandalfSubCategory = GandalfBase & {
  children: GandalfCompentency[];
};
export type GandalfCategory = GandalfBase & {
  children: GandalfSubCategory[];
};
export type GandalfData = GandalfCategory[];
