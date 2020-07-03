import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        "Infected": "Infected",
        "number of active cases of covid-19":"number of active cases of covid-19",
        "Recovered":"Recovered",
        "number of recovered cases of covid-19":"number of recovered cases of covid-19",
        "Deaths":"Deaths",
        "number of deaths from covid-19":"number of deaths from covid-19",
        "en-US":"en-US",
        "Change Language":"Change Language",
        "Covid - 19":"Covid - 19",
        "Global":"Global"
         
      }
    },
   

    hin: {
      translations: {
        "Infected": "संक्रमित",
        "Number of active cases of covid19":"कोविद-१९ के सक्रिय मामलों की संख्या",
        "Recovered":"ठीक हो चुके ",
        "number of recovered cases of covid-19":"कोविद-१९ से ठीक हो चुके लोगों की संख्या ",
        "Deaths":"मौतें",
        "number of deaths from covid-19":"कोविद-१९ से मरने वालों की संख्या",
        "en-US":"hi-IN",
        "Change Language":"भाषा बदलो",
        "Covid - 19":"कोविद-१९",
        "Global":"वैश्विक"
      }
    }

  
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;