<template>
<article class="flex flex-col">
<div class="relative h-44 md:h-48 flex items-end p-4 overflow-hidden rounded-card" :style="!event.image && !imgFailed ? { background: event.gradient } : { background: '#FBD3DB' }">
<img v-if="event.image && !imgFailed" :src="event.image" :alt="event.name + ' poster'" class="absolute inset-0 w-full h-full object-cover" loading="lazy" @error="imgFailed = true" />
<div v-else-if="imgFailed" class="absolute inset-0 flex items-center justify-center font-bold text-2xl text-concelo-deep" aria-hidden="true">{{ event.name[0] }}</div>
<div v-if="event.image && !imgFailed" class="absolute inset-0" style="background: linear-gradient(180deg, transparent 40%, rgba(194,67,92,0.55) 100%)"></div>
<span class="relative badge bg-cloud text-concelo-deep border border-concelo-deep text-[12px] px-2.5 py-1">{{ event.tag }}</span>
</div>
<div class="pt-4 flex flex-col gap-1.5 flex-1">
<div class="flex items-start justify-between gap-2">
<h3 class="font-bold text-lg leading-tight text-concelo-deep">{{ event.name }}</h3>
<button @click="toggleSave(event.id)" :aria-label="(isSaved(event.id) ? 'Remove ' : 'Save ') + event.name" class="w-11 h-11 shrink-0 rounded-pill border border-concelo-deep flex items-center justify-center text-lg leading-none text-concelo-deep" :class="isSaved(event.id) ? 'bg-concelo-deep text-white' : 'bg-cloud'">{{ isSaved(event.id) ? '♥' : '♡' }}</button>
</div>
<p class="caption font-medium text-concelo-deep">{{ event.date }}</p>
<p class="caption text-concelo-deep/70">{{ event.location }}</p>
<div class="flex items-center justify-between mt-2 gap-2">
<Badge :tone="statusTone">{{ event.status }}</Badge>
<span class="text-sm font-bold text-concelo-deep">From {{ event.price }}</span>
</div>
<router-link :to="'/events/' + event.slug" class="btn btn-outline mt-3 !py-2.5 text-sm">Open event guide</router-link>
</div>
</article>
</template>
<script setup>
import Badge from '../ui/Badge.vue'
import { isSaved, toggleSave } from '../../store.js'
import { computed, ref } from 'vue'
const props = defineProps({ event: Object })
const imgFailed = ref(false)
const statusTone = computed(() => ({ 'ON SALE': 'sale', 'SELLING FAST': 'fast', 'SOLD OUT': 'out', 'COMING SOON': 'soon' }[props.event.status] ?? 'sale'))
</script>
