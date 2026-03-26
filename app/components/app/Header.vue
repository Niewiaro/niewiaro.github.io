<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

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
</script>

<template>
	<UHeader mode="drawer">
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
			<UDrawer>
				<UButton
					icon="i-lucide-languages"
					color="neutral"
					variant="ghost"
					:aria-label="t('i18n.selectLanguage')"
				/>

				<template #content>
					<div class="p-6 flex flex-col gap-2 max-w-4xl mx-auto w-full">
						<h3 class="text-lg font-semibold mb-4 text-center">
							{{ t('i18n.selectLanguage') }}
						</h3>

						<UButton
							v-for="l in locales"
							:key="l.code"
							:label="l.name"
							:to="switchLocalePath(l.code)"
							color="neutral"
							:variant="l.code === locale ? 'soft' : 'ghost'"
							size="xl"
							class="justify-between"
						>
							<template #trailing>
								<UIcon
									v-if="l.code === locale"
									name="i-lucide-check"
									class="shrink-0 size-5 text-primary"
								/>
							</template>
						</UButton>
					</div>
				</template>
			</UDrawer>

			<UColorModeButton />
		</template>

		<template #body>
			<UNavigationMenu
				:items="items"
				orientation="vertical"
				class="-mx-2.5"
			/>
		</template>
	</UHeader>
</template>
