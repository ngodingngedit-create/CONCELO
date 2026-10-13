<template>
<div class="container-x section-pad">
<SectionTitle :title="t('events.title')" :sub="q ? t('events.results', { q }) : t('events.sub')" />
<div class="max-w-xl mb-5"><SearchBar /></div>
<Tabs :tabs="cats" v-model="cat" :label="t('events.filterCat')" class="mb-4" />
<div class="flex flex-wrap gap-2 mb-8" role="group" :aria-label="t('events.filterCity')">
<button v-for="l in locs" :key="l.v" @click="loc = l.v" :aria-pressed="loc === l.v" :class="['chip', loc === l.v ? 'chip-active' : '']">{{ l.label }}</button>
</div>
<div v-if="loading" class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" :aria-label="t('events.loading')">
<div v-for="i in 6" :key="i" class="card-flat p-4"><div class="skel h-44 mb-3"></div><div class="skel h-4 w-2/3 mb-2"></div><div class="skel h-3 w-1/2"></div></div>
</div>
<div v-else-if="filtered.length" class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
<EventCard v-for="e in filtered" :key="e.id" :event="e" />
</div>
<EmptyState v-else :title="t('events.emptyTitle')" :sub="t('events.emptySub')" :cta="t('events.emptyCta')" to="/events" />
</div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { t, i18n } from '../i18n.js'
import SearchBar from '../components/discovery/SearchBar.vue'
import EventCard from '../components/event/EventCard.vue'
import SectionTitle from '../components/ui/SectionTitle.vue'
import Tabs from '../components/ui/Tabs.vue'
import EmptyState from '../components/ui/EmptyState.vue'
import events from '../data/events.json'
const route = useRoute()
const q = ref(route.query.q?.toString() ?? '')
watch(() => route.query.q, v => { q.value = v?.toString() ?? '' })
const cats = computed(() => [t('events.all'), t('events.concert'), t('events.festival'), t('events.lifestyle')])
const locs = computed(() => [{ v: 'All', label: t('events.allCities') }, { v: 'Jakarta', label: 'Jakarta' }, { v: 'Bandung', label: 'Bandung' }, { v: 'Surabaya', label: 'Surabaya' }, { v: 'Yogyakarta', label: 'Yogyakarta' }])
const cat = ref(cats.value[0])
watch(() => i18n.locale, () => { cat.value = cats.value[0]; loc.value = 'All' })
const loc = ref('All')
const loading = ref(true)
onMounted(() => setTimeout(() => { loading.value = false }, 300))
const catMap = { All: 'All', Semua: 'All', Konser: 'Concert', Concert: 'Concert', Festival: 'Festival', Lifestyle: 'Lifestyle' }
const filtered = computed(() => events.filter(e =>
(catMap[cat.value] === 'All' || e.category === catMap[cat.value]) &&
(loc.value === 'All' || e.location.includes(loc.value)) &&
(!q.value || (e.name + e.location).toLowerCase().includes(q.value.toLowerCase()))
))
</script>
