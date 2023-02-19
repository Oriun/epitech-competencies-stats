import React from "react";

export default function useStorage<T>(key: string, defaultValue: T) {
  const [state, setState] = React.useState<T | null>(null);
  React.useEffect(() => {
    let fetching = true;
    chrome.storage.local
      .get(key)
      .then((data) => {
        if (fetching) {
          console.log("key", key);
          console.log("data", data);
          setState(data[key] || defaultValue);
        }
      })
      .catch((e) => {
        console.error(e);
      });
    return () => {
      fetching = false;
    };
  }, [key]);

  React.useEffect(() => {
    console.log("saving", key, state);
    chrome.storage.local.set({ [key]: state });
  }, [key, state]);

  return [state, setState] as const;
}
