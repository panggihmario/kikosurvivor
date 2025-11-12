import "server-only";
import { type Dictionary } from "@/types";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  id: () => import("./id.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "id"): Promise<Dictionary> =>
  dictionaries[locale]();
