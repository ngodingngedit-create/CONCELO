<template>
<article class="bg-cloud rounded-card border border-mist p-4 md:p-5 flex gap-4 items-start">
<div class="w-11 h-11 shrink-0 rounded-card bg-concelo-yellow border border-concelo-deep flex items-center justify-center font-bold text-onyx" aria-hidden="true">{{ title[0] }}</div>
<div class="flex-1 min-w-0">
<h4 class="font-bold text-concelo-deep">{{ title }}</h4>
<p class="text-sm text-concelo-deep/80">{{ desc }}</p>
<p class="caption text-concelo-deep/70 mt-1">{{ time }}, {{ location }}</p>
<button @click="$emit('add')" class="btn btn-outline btn-auto !py-2 !px-4 text-sm mt-3 min-h-[44px]">Add to My Day</button>
</div>
</article>
</template>
<script setup>
defineProps({ title: String, desc: String, time: String, location: String })
defineEmits(['add'])
</script>
