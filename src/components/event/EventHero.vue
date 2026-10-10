<template>
<section class="relative overflow-hidden flex items-end min-h-[320px] md:min-h-[400px]" :style="!event.image && !imgFailed ? { background: event.gradient } : { background: 'var(--gradient-pink-wash)' }">
<img v-if="event.image && !imgFailed" :src="event.image" :alt="event.name + ' stage'" class="absolute inset-0 w-full h-full object-cover" @error="imgFailed = true" />
<div v-else-if="imgFailed" class="absolute inset-0 flex items-center justify-center font-bold text-6xl text-concelo-deep/20" aria-hidden="true">{{ event.name[0] }}</div>
<div v-if="event.image && !imgFailed" class="absolute inset-0" style="background: linear-gradient(180deg, transparent 30%, rgba(194,67,92,0.6) 100%)"></div>
<div class="relative container-x py-10 md:py-16 w-full" :class="event.image && !imgFailed ? 'text-white' : 'text-concelo-deep'">
<Badge tone="deep" class="mb-4">{{ event.tag }} | {{ event.status }}</Badge>
<h1 class="display mb-3">{{ event.name }}</h1>
<p class="font-medium body-lg">{{ event.days }} at {{ event.location }}</p>
<p class="mt-2 text-sm">{{ event.stage }}, {{ event.audience }} capacity</p>
<div class="flex flex-col sm:flex-row gap-3 mt-6">
<router-link to="/tickets" class="btn btn-outline btn-auto bg-cloud">Check ticket prices</router-link>
<button @click="toggleSave(event.id)" :aria-pressed="isSaved(event.id)" class="btn btn-ghost-pill btn-auto min-h-[44px]">{{ isSaved(event.id) ? '♥ Saved' : '♡ Save event' }}</button>
</div>
</div>
</section>
</template>
<script setup>
import Badge from '../ui/Badge.vue'
import { isSaved, toggleSave } from '../../store.js'
import { ref } from 'vue'
defineProps({ event: Object })
const imgFailed = ref(false)
</script>
