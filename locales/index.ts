import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  id: () => import("./id.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "id") =>
  dictionaries[locale]();
