<script setup lang="ts">
const config = useRuntimeConfig();
const { t } = useI18n();

useSeoMeta({
	title: () => t("seo.title"),
	description: () => t("seo.description"),
	ogTitle: () => t("seo.title"),
	ogDescription: () => t("seo.description"),
	author: config.public.author,
	themeColor: "#121212",
});

defineOgImage("Nuxt.satori", {
	headline: config.public.appName,
	title: () => t("seo.title"),
	description: () => t("seo.description"),
	colorMode: "dark",
});
</script>

<template>
	<UPage>
		<UPageHero
			:title="t('seo.title')"
			:description="t('seo.description')"
			:headline="t('homepage.welcome')"
		/>
	</UPage>
</template>
