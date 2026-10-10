<template>
<div class="py-6 md:py-10">
<div v-if="!event" class="container-x">
<EmptyState title="Event not found" sub="That link looks broken. Back to the event list." cta="Browse events" to="/events" />
</div>
<div v-else>
<EventHero :event="event" />
<div class="container-x mt-5 flex flex-col sm:flex-row sm:items-end gap-3">
<div><p class="caption font-medium tracking-[0.12em] text-concelo-deep mb-2">DOORS OPEN IN</p><CountdownTimer :target="event.startsAt ?? '2027-06-26T10:00:00+07:00'" /></div>
<div class="sm:ml-auto flex flex-col sm:flex-row gap-2">
<button @click="share" class="btn btn-outline btn-auto !py-2 text-sm min-h-[44px]">{{ shared ? 'Link copied' : 'Copy event link' }}</button>
<router-link to="/tickets" class="btn btn-primary btn-auto !py-2 text-sm">Check ticket prices</router-link>
</div>
</div>
<div class="sticky top-[64px] md:top-[72px] z-30 bg-cream py-3 mt-6 border-b border-mist/40">
<div class="container-x flex gap-2 overflow-x-auto" role="tablist" aria-label="Event sections">
<button v-for="t in tabs" :key="t" role="tab" :aria-selected="tab === t" @click="tab = t" :class="['chip shrink-0', tab === t ? 'chip-active' : '']">{{ t }}</button>
</div>
</div>
<div class="container-x mt-6 pb-28 md:pb-16">
<div v-if="tab === 'Overview'">
<div class="rounded-card border border-concelo-deep p-6 md:p-10 text-center text-concelo-deep mb-6" style="background:#FFDE59">
<p class="caption font-medium tracking-[0.16em]">{{ event.days.toUpperCase() }} AT {{ event.location.toUpperCase() }}</p>
<p class="display mt-2">{{ event.name }} weekend at {{ event.shortLocation }}</p>
<p class="font-medium body-lg mt-2">{{ event.location }}. {{ event.stage }}, {{ event.audience }} capacity.</p>
</div>
<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div v-for="s in stats" :key="s.label" class="bg-cloud border border-mist rounded-card p-5 text-concelo-deep"><p class="font-bold mt-1">{{ s.value }}</p><p class="caption text-concelo-deep/70">{{ s.label }}</p></div>
</div>
<div class="bg-cream border border-mist rounded-card p-5 md:p-6 mt-4 text-concelo-deep"><p class="font-bold mb-1">About {{ event.name }}</p><p class="text-sm text-concelo-deep/80">{{ event.category }} at {{ event.location }}. Check lineup, schedule, map, food, and transport tabs for the full day plan.</p></div>
<div class="mt-6"><p class="h4 mb-3 text-concelo-deep">Presented with</p><SponsorWall /></div>
<div class="mt-6 rounded-card bg-concelo-deep text-white p-6 flex flex-col sm:flex-row sm:items-center gap-3">
<div class="flex-1"><p class="font-medium">Become a sponsor or partner</p><p class="text-sm text-white/80">Booth, sampling, and community slots for 2027.</p></div>
<router-link to="/profile" class="btn btn-secondary btn-auto">Contact us</router-link>
</div>
</div>
<div v-if="tab === 'Lineup'">
<label :for="artistSearch" class="sr-only">Search artists</label>
<input :id="artistSearch" v-model="q" type="search" placeholder="Search artists..." class="field max-w-sm mb-2" />
<Tabs :tabs="['Day 1', 'Day 2']" v-model="day" label="Filter lineup by day" class="mb-5 mt-3" />
<div v-if="loading" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Loading artists">
<div v-for="i in 6" :key="i" class="card-flat p-4"><div class="skel h-36 mb-3"></div><div class="skel h-4 w-2/3 mb-2"></div><div class="skel h-3 w-1/2"></div></div>
</div>
<div v-else-if="dayArtists.length" class="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
<ArtistCard v-for="a in dayArtists" :key="a.id" :artist="a" @add="addDay(a.name)" />
</div>
<p v-else class="text-sm text-concelo-deep/80 mt-4" role="status">No artists match "{{ q }}". Try another name.</p>
</div>
<div v-if="tab === 'Schedule'" class="max-w-xl">
<div v-if="loading" class="space-y-3" aria-label="Loading schedule">
<div v-for="i in 4" :key="i" class="skel h-16"></div>
</div>
<div v-else class="space-y-0">
<div v-for="(s, i) in schedule" :key="i" class="flex gap-4">
<div class="flex flex-col items-center" aria-hidden="true"><div class="w-3 h-3 rounded-pill bg-concelo-pink border border-concelo-deep mt-1.5"></div><div v-if="i < schedule.length - 1" class="w-px flex-1 bg-mist/50"></div></div>
<div class="pb-6"><p class="caption font-medium text-concelo-deep">{{ s.time }}</p><p class="font-bold text-concelo-deep">{{ s.title }}</p><p class="caption text-concelo-deep/70">{{ s.detail }}</p></div>
</div>
</div>
</div>
<div v-if="tab === 'Map'"><MapSection /></div>
<div v-if="tab === 'Activities'">
<div v-if="loading" class="grid gap-4 md:grid-cols-2" aria-label="Loading activities">
<div v-for="i in 4" :key="i" class="skel h-32"></div>
</div>
<div v-else class="grid gap-4 md:grid-cols-2">
<ActivityCard v-for="a in activities" :key="a.title" v-bind="a" @add="addDay(a.title)" />
</div>
</div>
<div v-if="tab === 'Food'">
<Tabs :tabs="foodCats" v-model="foodCat" label="Filter vendors by category" class="mb-5" />
<div v-if="loading" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Loading vendors">
<div v-for="i in 4" :key="i" class="skel h-40"></div>
</div>
<div v-else-if="foodVendors.length" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<VendorCard v-for="v in foodVendors" :key="v.id" :vendor="v" />
</div>
<p v-else class="text-sm text-concelo-deep/80" role="status">No vendors in this category yet.</p>
</div>
<div v-if="tab === 'Merch'">
<Tabs :tabs="merchCats" v-model="merchCat" label="Filter merch by type" class="mb-5" />
<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
<MerchCard v-for="m in merchFiltered" :key="m.id" :item="m" />
</div>
</div>
<div v-if="tab === 'Transport'" class="grid gap-4 max-w-2xl">
<ShuttleCard v-for="s in shuttles" :key="s.id" :shuttle="s" />
<router-link to="/transport" class="btn btn-outline btn-auto">Open full transport guide</router-link>
</div>
<div v-if="tab === 'FAQ'" class="max-w-2xl space-y-3">
<details v-for="f in faqs" :key="f.q" class="bg-cloud border border-mist rounded-card p-4 text-concelo-deep"><summary class="font-medium cursor-pointer min-h-[44px] flex items-center">{{ f.q }}</summary><p class="text-sm text-concelo-deep/80 mt-2">{{ f.a }}</p></details>
<div class="rounded-card bg-cream border border-mist p-4 text-sm text-concelo-deep">Still stuck? <router-link to="/profile" class="font-bold text-concelo-deep">Contact us</router-link></div>
</div>
</div>
<StickyTicketBar :price="event.price" :event-id="event.id" />
</div>
</div>
</template>
<script setup>
import { computed, onMounted, ref, useId, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import EventHero from '../components/event/EventHero.vue'
import ArtistCard from '../components/artist/ArtistCard.vue'
import ActivityCard from '../components/event/ActivityCard.vue'
import VendorCard from '../components/event/VendorCard.vue'
import MerchCard from '../components/event/MerchCard.vue'
import ShuttleCard from '../components/event/ShuttleCard.vue'
import MapSection from '../components/event/MapSection.vue'
import CountdownTimer from '../components/event/CountdownTimer.vue'
import StickyTicketBar from '../components/event/StickyTicketBar.vue'
import SponsorWall from '../components/home/SponsorWall.vue'
import Tabs from '../components/ui/Tabs.vue'
import EmptyState from '../components/ui/EmptyState.vue'
import events from '../data/events.json'
import artists from '../data/artists.json'
import vendors from '../data/vendors.json'
import merch from '../data/merch.json'
import shuttles from '../data/shuttles.json'
import schedules from '../data/schedules.json'
import { store } from '../store.js'
const route = useRoute()
const router = useRouter()
const event = computed(() => events.find(e => e.slug === route.params.slug))
const tabs = ['Overview', 'Lineup', 'Schedule', 'Map', 'Activities', 'Food', 'Merch', 'Transport', 'FAQ']
const tab = ref(tabs.includes(route.query.tab) ? route.query.tab : 'Overview')
watch(tab, v => router.replace({ query: { ...route.query, tab: v } }))
watch(() => route.query.tab, v => { if (v && tabs.includes(v)) tab.value = v })
const day = ref('Day 1')
const q = ref('')
const artistSearch = useId()
const loading = ref(true)
onMounted(() => setTimeout(() => { loading.value = false }, 350))
const dayArtists = computed(() => artists.filter(a => (day.value === 'Day 1' ? 1 : 2) === a.day && (!q.value || a.name.toLowerCase().includes(q.value.toLowerCase()))))
const schedule = schedules
const stats = computed(() => event.value ? [
{ value: event.value.days, label: 'Date' },
{ value: event.value.location, label: 'Venue' },
{ value: event.value.stage, label: 'Stages' },
{ value: event.value.audience + ' capacity', label: 'Capacity' }
] : [])
const activities = [
{ title: 'Make Your Own Ice Cream', desc: 'Mix flavors and toppings with friends.', time: '15:30', location: 'Experience Zone' },
{ title: 'Ice Cream Party', desc: 'DJ set plus free tasting hour.', time: '19:00', location: 'Main Stage' },
{ title: 'Ice Cream Picnic', desc: 'Chill picnic area with community games.', time: '16:30', location: 'Green Field' },
{ title: 'Installation Walk', desc: 'Playful photo installations.', time: 'All day', location: 'Art Lane' },
{ title: 'Scoop Challenge Games', desc: 'Stack cup race and flavor quiz with prizes.', time: '14:00-18:00', location: 'Community Hub' },
{ title: 'Hero Pose Booth', desc: 'Snap and share your festival look.', time: 'All day', location: 'Photo Lane' }
]
const foodCats = ['All', 'Food', 'Drinks', 'Dessert']
const foodCat = ref('All')
const foodVendors = computed(() => foodCat.value === 'All' ? vendors : vendors.filter(v => v.category === foodCat.value))
const merchCats = ['All', 'Apparel', 'Headwear', 'Accessories']
const merchCat = ref('All')
const merchKind = { 1: 'Apparel', 2: 'Headwear', 3: 'Accessories', 4: 'Accessories' }
const merchFiltered = computed(() => merchCat.value === 'All' ? merch : merch.filter(m => merchKind[m.id] === merchCat.value))
const faqs = [
{ q: 'Where exactly is the venue?', a: 'Check the location above. Enter via the Main Gate from 11:00. AJAK shuttle pickup runs from Jakarta, Bogor, and Depok.' },
{ q: 'Can I refund or transfer my ticket?', a: 'Regular tickets are refundable up to 7 days before the event. VIP and 2-Day Pass tickets cannot be refunded but can be transferred once via your Profile.' },
{ q: 'Can I bring outside food?', a: 'No outside food or drinks. Four vendors serve inside from 12:00, with halal options at Sundae Station and Burger Bliss.' },
{ q: 'What is the easiest way to get there?', a: 'Take KRL or TransJakarta to the GBK stop, use ride hailing drop-off at the Main Gate lobby, or book an AJAK shuttle seat with a fixed departure time.' }
]
const shared = ref(false)
const share = async () => {
try { await navigator.clipboard.writeText(window.location.href) } catch { /* clipboard unavailable, still confirm */ }
shared.value = true
}
const addDay = title => { if (!store.myDay.includes(title)) store.myDay.push(title) }
</script>