// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxt/eslint"],
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	runtimeConfig: {
		public: {
			appName: "Niewiaro",
			environment: "dev",
			appURL: "https://niewiaro.github.io",
			gitURL: "https://github.com/Niewiaro",
			gitRepoURL: "https://github.com/Niewiaro/niewiaro.github.io",
		},
	},
	compatibilityDate: "2025-07-15",
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
	i18n: {
		defaultLocale: "en",
		locales: [
			{ code: "en", name: "English", file: "en.json" },
			{ code: "pl", name: "Polski", file: "pl.json" },
		],
	},
});
