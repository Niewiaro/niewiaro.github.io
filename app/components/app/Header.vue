<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const config = useRuntimeConfig();
const localePath = useLocalePath();

const items = computed<NavigationMenuItem[]>(() => [{
	label: "Hello World",
	icon: "i-mdi-cube-outline",
	to: "https://helloworld.niewiaro.cc/",
	target: "_blank",
}]);
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
			<UColorModeButton />
		</template>
	</UHeader>
</template>
