<template>
<div class="text-center py-14">
<div class="mx-auto mb-4 w-14 h-14 rounded-pill bg-concelo-yellow border border-concelo-deep flex items-center justify-center" aria-hidden="true">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C2435C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.5a2.5 2.5 0 0 0 0 5V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.5a2.5 2.5 0 0 0 0-5V8z"/><path d="M14 6v2M14 11v2M14 16v2"/></svg>
</div>
<p class="h4 mb-1 text-concelo-deep">{{ title }}</p>
<p class="text-concelo-deep/80 text-sm mb-5">{{ sub }}</p>
<router-link :to="to" class="btn btn-outline btn-auto">{{ cta }}</router-link>
</div>
</template>
<script setup>
defineProps({ title: String, sub: String, cta: { type: String, default: 'Browse events' }, to: { type: String, default: '/events' } })
</script>
