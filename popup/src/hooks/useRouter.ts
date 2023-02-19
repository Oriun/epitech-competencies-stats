import React from "react";
import { Navigator } from "react-router-dom";

export type Path =
  | string
  | { pathname: string; search?: string; hash?: string };

export default function useRouter(basename: string) {
  const [location, setLocation] = React.useState<Path>(basename);
  const navigator: Navigator = {
    push: (path: string) => {
      setLocation(path);
    },
    replace: (path: string) => {
      setLocation(path);
    },
    go: (n: number) => {
      console.log(n);
      throw new Error("Method not implemented. go");
    },
    createHref: (path: string) => {
      console.log(path);
      throw new Error("Method not implemented. createHref");
    },
    encodeLocation: (path: string) => {
      return { pathname: path, search: "", hash: "" };
    },
  };
  console.log("location", location);
  //@ts-ignore
  return [location.pathname ?? location, navigator] as const;
}
