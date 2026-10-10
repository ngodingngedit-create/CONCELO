<template>
<div class="container-x section-pad">
<SectionTitle title="Event tickets" sub="Three ticket types. VIP includes the deck and lounge, 2-Day Pass covers both days." />
<div v-if="loading" class="grid gap-5 md:grid-cols-3" aria-label="Loading tickets">
<div v-for="i in 3" :key="i" class="skel h-64"></div>
</div>
<div v-else class="grid gap-5 md:grid-cols-3 items-start">
<TicketCard v-for="(t, i) in tickets" :key="t.name" :ticket="t" :featured="i === 1" @buy="buy(t)" />
</div>
<p class="caption text-concelo-deep/70 mt-4 max-w-2xl">VIP is highlighted because it bundles both days plus lounge access. Regular fits one day, 2-Day Pass fits both days without lounge perks.</p>
<div v-if="bought" class="mt-12">
<SectionTitle title="My ticket" sub="Show this QR code at the Main Gate." />
<TicketQR :tier="bought.name.toUpperCase()" :code="'TIX-2027-' + bought.name.toUpperCase().replace(/\s/g, '') + '-001'" />
</div>
</div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import SectionTitle from '../components/ui/SectionTitle.vue'
import TicketCard from '../components/ticket/TicketCard.vue'
import TicketQR from '../components/ticket/TicketQR.vue'
import { store } from '../store.js'
const tickets = [
{ name: 'Regular', price: 'Rp 350.000', tag: 'ONE DAY', benefits: ['1-day access', 'Main Stage', 'Food and activity areas'] },
{ name: 'VIP', price: 'Rp 750.000', tag: 'BEST FOR BOTH DAYS', benefits: ['2-day access', 'VIP deck and lounge', 'Priority shuttle queue', 'Exclusive merch'] },
{ name: '2-Day Pass', price: 'Rp 550.000', tag: 'BOTH DAYS', benefits: ['2-day access', 'Main Stage', 'Community activities'] }
]
const bought = ref(null)
const loading = ref(true)
onMounted(() => setTimeout(() => { loading.value = false }, 300))
const buy = t => { bought.value = t; if (!store.tickets.includes(t.name)) store.tickets.push(t.name) }
</script>