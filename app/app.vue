<script setup lang="ts">
const config = useRuntimeConfig();
const { locale } = useI18n();

useHead({
	htmlAttrs: {
		lang: locale,
	},
	titleTemplate: (title) => {
		return title
			? `${title} | ${config.public.appName}`
			: config.public.appName;
	},
	link: [
		{ rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
		{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
		{ rel: "shortcut icon", href: "/favicon.ico" },
		{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
		{ rel: "manifest", href: "/site.webmanifest" },
		{ rel: "canonical", href: config.public.appURL },
		{ rel: "alternate", hreflang: "pl", href: `${config.public.appURL}/pl` },
		{ rel: "alternate", hreflang: "en", href: `${config.public.appURL}/en` },
		{ rel: "alternate", hreflang: "x-default", href: config.public.appURL },
	],
});

useSeoMeta({
	ogSiteName: config.public.appName,
	ogType: "website",
	ogUrl: config.public.appURL,

	themeColor: "#3b82f6",
});
</script>

<template>
	<UApp>
		<NuxtAnnouncer />
		<NuxtRouteAnnouncer />

		<NuxtLoadingIndicator />

		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>
