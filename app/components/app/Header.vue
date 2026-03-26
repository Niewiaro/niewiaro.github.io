<script setup lang="ts">
import type { NavigationMenuItem, DropdownMenuItem } from "@nuxt/ui";

const config = useRuntimeConfig();
const localePath = useLocalePath();

const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const items = computed<NavigationMenuItem[]>(() => [{
	label: t("hello-world"),
	icon: "i-mdi-cube-outline",
	to: "https://helloworld.niewiaro.cc/",
	target: "_blank",
}]);

const languageItems = computed<DropdownMenuItem[]>(() =>
	locales.value.map(l => ({
		label: l.name,
		to: switchLocalePath(l.code),
		slot: l.code,
	})),
);
</script>

<template>
	<UHeader>
		<template #left>
			<NuxtLink
				:to="localePath('/')"
				class="flex items-center"
			>
				<UAvatar
					src="/favicon.svg"
					:alt="config.public.appName + ' Logo'"
					size="md"
					class="mr-2"
				/>
				<span class="font-bold text-lg">{{ config.public.appName }}</span>
			</NuxtLink>
		</template>

		<UNavigationMenu :items="items" />

		<template #right>
			<UDropdownMenu
				:items="languageItems"
				:content="{
					align: 'end',
					side: 'bottom',
				}"
			>
				<UButton
					icon="i-lucide-languages"
					color="neutral"
					variant="ghost"
					:aria-label="t('i18n.selectLanguage')"
				/>

				<template
					v-for="l in locales"
					:key="l.code"
					#[`${l.code}-trailing`]
				>
					<UIcon
						v-if="l.code === locale"
						name="i-lucide-check"
						class="shrink-0 size-5 text-primary"
					/>
				</template>
			</UDropdownMenu>

			<UColorModeButton />
		</template>
	</UHeader>
</template>
