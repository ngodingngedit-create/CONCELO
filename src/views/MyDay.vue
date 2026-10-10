<template>
<div class="container-x section-pad max-w-2xl">
<SectionTitle title="My Day" sub="Artists and activities you saved into one timeline." />
<div v-if="items.length" class="space-y-0">
<div v-for="(s, i) in items" :key="s.title" class="flex gap-4">
<div class="flex flex-col items-center" aria-hidden="true"><div class="w-3 h-3 rounded-pill bg-concelo-green border border-concelo-deep mt-1.5"></div><div v-if="i < items.length - 1" class="w-px flex-1 bg-mist/50"></div></div>
<div class="pb-5 flex-1 bg-cloud border border-mist rounded-card p-4 mb-4 text-concelo-deep">
<p class="caption font-medium">{{ s.time }}</p>
<p class="font-bold">{{ s.title }}</p>
<p class="caption text-concelo-deep/70">{{ s.detail }}</p>
<button @click="remove(s.title)" class="btn btn-outline btn-auto !py-2 !px-4 text-xs mt-3 min-h-[44px]">Remove</button>
</div>
</div>
</div>
<EmptyState v-else title="Day is empty" sub="Save artists and activities from any event guide." cta="Browse events" to="/events" />
</div>
</template>
<script setup>
import { computed } from 'vue'
import SectionTitle from '../components/ui/SectionTitle.vue'
import EmptyState from '../components/ui/EmptyState.vue'
import schedules from '../data/schedules.json'
import { store } from '../store.js'
const items = computed(() => {
const byTitle = Object.fromEntries(schedules.map(s => [s.title, s]))
return store.myDay.map(t => byTitle[t] ?? { title: t, time: 'No fixed time', detail: 'Added from the event page' })
})
const remove = t => { const i = store.myDay.indexOf(t); if (i >= 0) store.myDay.splice(i, 1) }
</script>
