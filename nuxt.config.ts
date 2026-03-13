// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxt/eslint", "@nuxtjs/seo"],
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	site: {
		url: "https://niewiaro.github.io",
		name: "Niewiaro",
		description: "Python, Fullstack & Embedded Developer Portfolio",
		defaultLocale: "pl",
	},
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
		baseUrl: "https://niewiaro.github.io",
		locales: [
			{ code: "pl", iso: "pl-PL", name: "Polski", file: "pl.json" },
			{ code: "en", iso: "en-US", name: "English", file: "en.json" },
		],
		defaultLocale: "pl",
		strategy: "prefix_and_default",
	},
	ogImage: {
		enabled: true,
	},
});
