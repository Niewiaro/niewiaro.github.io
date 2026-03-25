<script setup lang="ts">
const config = useRuntimeConfig();
const { t, locales, setLocale } = useI18n();

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
	<div>
		<div>
			<UButton
				v-for="locale in locales"
				:key="locale.code"
				@click="setLocale(locale.code)"
			>
				{{ locale.name }}
			</UButton>
		</div>
		<h1>{{ $t('hello-world') }}</h1>
	</div>
</template>
