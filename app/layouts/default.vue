<template>
	<div class="min-h-screen flex flex-col">
		<AppHeader />

		<UMain class="min-h-0! flex-1 flex items-center justify-center">
			<slot />
		</UMain>

		<AppFooter />
	</div>
</template>
