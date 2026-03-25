<script setup lang="ts">
const config = useRuntimeConfig();
const localePath = useLocalePath();
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

		<template #right>
			<UColorModeButton />
		</template>
	</UHeader>
</template>
