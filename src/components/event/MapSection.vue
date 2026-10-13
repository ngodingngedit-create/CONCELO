<template>
<div class="bg-cream rounded-card border border-mist p-4 md:p-6">
<div class="flex flex-wrap gap-2 mb-3 caption font-medium text-concelo-deep" aria-label="Map legend">
<span class="inline-flex items-center gap-1.5"><span class="w-3 h-3 rounded-pill inline-block border border-concelo-deep" style="background:#F9728B"></span> MAIN</span>
<span class="inline-flex items-center gap-1.5"><span class="w-3 h-3 rounded-pill inline-block border border-concelo-deep" style="background:#FFDE59"></span> FOOD AND ACTIVITY</span>
<span class="inline-flex items-center gap-1.5"><span class="w-3 h-3 rounded-pill inline-block border border-concelo-deep" style="background:#96B63A"></span> FACILITY</span>
</div>
<div class="flex flex-wrap gap-2 mb-4" role="group" aria-label="Map categories">
<button v-for="c in cats" :key="c" @click="active = c; sel = null" :class="['chip', active === c ? 'chip-active' : '']" :aria-pressed="active === c">{{ c }}</button>
</div>
<div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
<button v-for="m in filtered" :key="m.name" @click="sel = m" :aria-expanded="sel?.name === m.name" class="rounded-card border border-concelo-deep p-3 text-center font-medium text-sm min-h-[56px] text-onyx" :style="{ background: m.color }">{{ m.name }}</button>
</div>
<div v-if="sel" class="mt-4 bg-cloud rounded-card border border-mist p-4">
<h4 class="font-bold text-concelo-deep">{{ sel.name }}</h4>
<p class="text-sm text-concelo-deep/80">{{ sel.info }}</p>
<button class="btn btn-outline btn-auto !py-2 text-sm mt-3 min-h-[44px]" @click="sel = null">{{ t('eventDetail.closeDetails') }}</button>
</div>
<p v-else class="caption text-concelo-deep/70 mt-4">{{ t('eventDetail.pickZone') }}</p>
</div>
</template>
<script setup>
import { computed, ref, watch } from 'vue'
import { i18n, t } from '../../i18n.js'
const cats = computed(() => t('eventDetail.mapCats'))
const active = ref(cats.value[0])
watch(() => i18n.locale, () => { active.value = cats.value[0]; sel.value = null })
const zones = [
{ cat: 'Stage', name: 'Main Stage', color: '#F9728B', info: '1 stage. Headliner at 20:00.' },
{ cat: 'Food and drink', name: 'F&B Area A', color: '#FFDE59', info: '12 vendors. Open 12:00-22:00.' },
{ cat: 'Food and drink', name: 'F&B Area B', color: '#FFDE59', info: '8 vendors. Open 13:00-22:00.' },
{ cat: 'Merch', name: 'Merch Booth', color: '#FFDE59', info: 'Official event merch, near the Main Gate.' },
{ cat: 'Community', name: 'Community Hub', color: '#96B63A', info: 'Meetups and scoop challenge games.' },
{ cat: 'Photo', name: 'Ice Cream Gate', color: '#96B63A', info: 'Signature photo spot at the entrance.' },
{ cat: 'Shuttle', name: 'Shuttle Point', color: '#96B63A', info: 'AJAK pickup and drop-off.' },
{ cat: 'Gate', name: 'Main Gate', color: '#F9728B', info: 'Open 11:00. E-ticket scan at entry.' },
{ cat: 'Toilet', name: 'Toilet Blocks', color: '#96B63A', info: '6 blocks across the venue.' }
]
const catMap = { Stage: 0, 'Panggung': 0, 'Food and drink': 1, 'Makanan & minuman': 1, Toilet: 2, Gate: 3, Gerbang: 3, Merch: 4, Community: 5, Komunitas: 5, Photo: 6, Foto: 6, Shuttle: 7 }
const enCats = ['Stage', 'Food and drink', 'Toilet', 'Gate', 'Merch', 'Community', 'Photo', 'Shuttle']
const filtered = computed(() => zones.filter(z => z.cat === (enCats[catMap[active.value] ?? 0] ?? 'Stage')))
const sel = ref(null)
</script>
