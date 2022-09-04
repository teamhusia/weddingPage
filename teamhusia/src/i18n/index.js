import LanguageDetector from "i18next-browser-languagedetector";
import { en } from "./translations/en";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { kr } from "./translations/kr";
import { pl } from "./translations/pl";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en, pl, kr },
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false, // we use content as keys
    interpolation: {
      formatSeparator: ","
    },
    react: {
      wait: false,
      useSuspense: true
    }
  });

export default i18next;
