<script setup lang="ts">
const { locale } = useI18n();

useHead({
	htmlAttrs: {
		lang: locale,
	},
	link: [
		{ rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
		{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
		{ rel: "shortcut icon", href: "/favicon.ico" },
		{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
		{ rel: "manifest", href: "/site.webmanifest" },
	],
});

useSeoMeta({
	titleTemplate: "%s | Niewiaro",
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
