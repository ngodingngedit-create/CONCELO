<template>
<div class="container-x section-pad">
<SectionTitle title="Upcoming events" :sub="q ? `Results for &quot;${q}&quot;` : 'Concerts, festivals, and lifestyle events.'" />
<div class="max-w-xl mb-5"><SearchBar /></div>
<Tabs :tabs="cats" v-model="cat" label="Filter events by category" class="mb-4" />
<div class="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter events by city">
<button v-for="l in locs" :key="l" @click="loc = l" :aria-pressed="loc === l" :class="['chip', loc === l ? 'chip-active' : '']">{{ l }}</button>
</div>
<div v-if="loading" class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" aria-label="Loading events">
<div v-for="i in 6" :key="i" class="card-flat p-4"><div class="skel h-44 mb-3"></div><div class="skel h-4 w-2/3 mb-2"></div><div class="skel h-3 w-1/2"></div></div>
</div>
<div v-else-if="filtered.length" class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
<EventCard v-for="e in filtered" :key="e.id" :event="e" />
</div>
<EmptyState v-else title="No events found" sub="Try another keyword or filter." cta="Browse all events" to="/events" />
</div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SearchBar from '../components/discovery/SearchBar.vue'
import EventCard from '../components/event/EventCard.vue'
import SectionTitle from '../components/ui/SectionTitle.vue'
import Tabs from '../components/ui/Tabs.vue'
import EmptyState from '../components/ui/EmptyState.vue'
import events from '../data/events.json'
const route = useRoute()
const q = ref(route.query.q?.toString() ?? '')
watch(() => route.query.q, v => { q.value = v?.toString() ?? '' })
const cats = ['All', 'Concert', 'Festival', 'Lifestyle']
const locs = ['All cities', 'Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta']
const cat = ref('All')
const loc = ref('All cities')
const loading = ref(true)
onMounted(() => setTimeout(() => { loading.value = false }, 300))
const filtered = computed(() => events.filter(e =>
(cat.value === 'All' || e.category === cat.value) &&
(loc.value === 'All cities' || e.location.includes(loc.value)) &&
(!q.value || (e.name + e.location).toLowerCase().includes(q.value.toLowerCase()))
))
</script>
