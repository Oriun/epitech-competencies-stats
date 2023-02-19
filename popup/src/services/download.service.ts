import { GandalfData } from "../types/gandalf.types";

export function download(data: GandalfData) {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.download = `gandalf-export-${new Date().toISOString()}.json`;
  a.href = url;
  a.click();
}
