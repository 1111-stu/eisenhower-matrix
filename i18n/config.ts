import enCommon from "@/public/locales/en/common.json";
import zhCommon from "@/public/locales/zh/common.json";
import cnCommon from "@/public/locales/cn/common.json";

export const LOCALES = ["en", "zh", "cn"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

type CommonMessages = typeof enCommon;

const dictionaries: Record<Locale, CommonMessages> = {
  en: enCommon,
  zh: zhCommon,
  cn: cnCommon,
};

export const getCommonMessages = (locale: Locale): CommonMessages => {
  return dictionaries[locale] ?? dictionaries.en;
};

export const isSupportedLocale = (value: string): value is Locale => {
  return (LOCALES as readonly string[]).includes(value);
};


