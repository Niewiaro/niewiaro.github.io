<script setup>
const { locales, setLocale } = useI18n()
</script>

<template>
  <div>
    <div>
        <UButton v-for="locale in locales" @click="setLocale(locale.code)">
            {{ locale.name }}
        </UButton>
    </div>
    <h1>{{ $t('hello-world') }}</h1>
  </div>
</template>
