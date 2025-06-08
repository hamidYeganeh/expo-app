import { I18n } from "i18n-js";
import * as Localization from "expo-localization";
import faLocale from "./locales/fa.json";

const i18n = new I18n();

i18n.translations = {
  fa: faLocale,
};

const deviceLocale = Localization.getLocales()[0]?.languageCode || "fa";

i18n.locale = deviceLocale;

i18n.defaultLocale = "fa";

i18n.enableFallback = true;

const isRTL = Localization.getLocales()[0]?.textDirection === "rtl";
const flexDirection: "row" | "row-reverse" = true ? "row-reverse" : "row";
// const flexDirection: "row" | "row-reverse" = isRTL ? "row-reverse" : "row";

export default { ...i18n, t: i18n.t.bind(i18n), isRTL, flexDirection };
