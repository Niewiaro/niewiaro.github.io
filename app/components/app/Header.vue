<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
	<UHeader>
		<template #title>
			<div class="flex items-center">
				<UAvatar
					src="/favicon.svg"
					:alt="config.public.appName + ' Logo'"
					size="md"
					class="mr-2"
				/>
				<span class="font-bold text-lg">{{ config.public.appName }}</span>
			</div>
		</template>

		<template #right>
			<UColorModeButton />
		</template>
	</UHeader>
</template>
