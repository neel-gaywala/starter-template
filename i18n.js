import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./public/locales/en";

i18n.use(initReactI18next).init({
  resources: { en },
  fallbackLng: "en",
});

export async function changeLanguage(lng) {
  await i18n.changeLanguage(lng);
}

export function getCurrentLanguage() {
  return i18n.language || "en";
}

export function getSupportedLanguages() {
  return i18n.languages;
}

export default i18n;
