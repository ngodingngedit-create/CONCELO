<template>
<div class="mb-6 md:mb-8">
<h2 class="h2 text-concelo-deep">{{ title }}</h2>
<p v-if="sub" class="mt-2 body text-concelo-deep/80 max-w-[65ch]">{{ sub }}</p>
</div>
</template>
<script setup>
defineProps({ title: String, sub: String })
</script>
