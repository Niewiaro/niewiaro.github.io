<script setup lang="ts">
const { t, locales, setLocale } = useI18n();

useSeoMeta({
	title: () => t("seo.title"),
	description: () => t("seo.description"),
	ogTitle: () => t("seo.title"),
	ogDescription: () => t("seo.description"),
});

defineOgImageComponent("NuxtSeo", {
	title: () => t("seo.title"),
	description: () => t("seo.description"),
	theme: "#3b82f6",
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
