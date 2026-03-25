const appName = "Niewiaro";
const appUrl = "https://niewiaro.github.io";
const gitProfileUrl = "https://github.com/Niewiaro";

export default defineNuxtConfig({
	modules: [
		"@nuxt/ui",
		"@nuxtjs/i18n",
		"@nuxt/eslint",
		"@nuxtjs/seo",
		"@nuxt/fonts",
	],
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	site: {
		url: appUrl,
		name: appName,
		description: "Python, Fullstack & Embedded Developer Portfolio",
		defaultLocale: "pl",
		indexable: true,
		trailingSlash: true,
	},
	runtimeConfig: {
		public: {
			appName: appName,
			author: "Jakub Niewiarowski",
			environment: "prod",
			appURL: appUrl,
			gitURL: gitProfileUrl,
			gitRepoURL: `${gitProfileUrl}/niewiaro.github.io`,
			linkedInURL: "https://www.linkedin.com/in/jakub-niewiarowski/",
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
	fonts: {
		families: [
			{ name: "Inter", weights: [400, 700], global: true },
		],
	},
	i18n: {
		baseUrl: appUrl,
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
