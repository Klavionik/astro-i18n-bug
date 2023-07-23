import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	defaultLangCode: "ru",
	supportedLangCodes: ["en"],
	showDefaultLangCode: false,
	translations: {},
	routeTranslations: {},
})