<template>
<div class="md:hidden fixed bottom-[73px] inset-x-0 z-40 px-4 bottom-safe pointer-events-none">
<div class="pointer-events-auto flex items-center gap-3 bg-cloud border border-concelo-deep rounded-pill px-4 py-2">
<div class="flex-1 min-w-0"><p class="caption text-concelo-deep/70 font-medium">FROM</p><p class="font-bold truncate text-concelo-deep">{{ price }}</p></div>
<button @click="toggleSave(eventId)" :aria-label="(isSaved(eventId) ? 'Remove event ' : 'Save event ') + eventId" :aria-pressed="isSaved(eventId)" class="w-11 h-11 rounded-pill border border-concelo-deep shrink-0 text-lg text-concelo-deep" :class="isSaved(eventId) ? 'bg-concelo-deep text-white' : 'bg-cloud'">{{ isSaved(eventId) ? '♥' : '♡' }}</button>
<router-link to="/tickets" class="btn btn-ghost-pill btn-auto !py-2.5">Check prices</router-link>
</div>
</div>
</template>
<script setup>
import { isSaved, toggleSave } from '../../store.js'
defineProps({ price: { type: String, default: 'Rp 350.000' }, eventId: { type: Number, default: 1 } })
</script>
