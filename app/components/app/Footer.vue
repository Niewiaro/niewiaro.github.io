<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
	<UFooter :ui="{ top: 'pt-8 pb-0 lg:pt-12 lg:pb-0' }">
		<template #top>
			<USeparator :avatar="{ src: '/favicon.svg', alt: config.public.appName }" />
		</template>

		<template #left>
			<p class="text-muted text-sm">
				Copyright © {{ new Date().getFullYear() }}
			</p>
		</template>

		<template #right>
			<UButton
				icon="i-simple-icons-github"
				color="neutral"
				variant="ghost"
				:to="config.public.gitURL"
				target="_blank"
				aria-label="GitHub"
			/>
			<UButton
				icon="i-simple-icons-linkedin"
				color="neutral"
				variant="ghost"
				:to="config.public.linkedInURL"
				target="_blank"
				aria-label="LinkedIn"
			/>
		</template>
	</UFooter>
</template>
