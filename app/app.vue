<script setup lang="ts">
const config = useRuntimeConfig();
const i18nHead = useLocaleHead({
	seo: true,
});

useHead(() => ({
	htmlAttrs: {
		lang: i18nHead.value.htmlAttrs!.lang,
	},
	link: [
		...(i18nHead.value.link || []),
		{ rel: "manifest", href: "/site.webmanifest" },
	],
	meta: [...(i18nHead.value.meta || [])],
}));

useSeoMeta({
	titleTemplate: "%s | Niewiaro",
});

useSchemaOrg([
	defineWebSite({
		name: "Niewiaro Portfolio",
	}),
	defineWebPage(),
	definePerson({
		name: "Jakub Niewiarowski",
		jobTitle: "Python, Fullstack & Embedded Developer",
		url: config.public.appURL,
		sameAs: [
			config.public.gitURL,
			config.public.linkedInURL,
		],
	}),
]);
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
