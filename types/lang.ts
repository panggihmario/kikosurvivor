import en from "@/locales/en.json";
import id from "@/locales/id.json";

export type Dictionary = typeof en;

const _typeCheck: Dictionary = id;

export type LangProps = {
  lang: "en" | "id";
};
