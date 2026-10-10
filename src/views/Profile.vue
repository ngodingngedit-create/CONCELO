<template>
<div class="container-x section-pad max-w-2xl">
<SectionTitle title="Profile" sub="Tickets, saved events, and day plans on this device." />
<div class="card-promo p-5 md:p-6 flex items-center gap-4 mb-6 bg-cloud">
<div class="w-14 h-14 shrink-0 rounded-pill bg-concelo-yellow border border-concelo-deep flex items-center justify-center text-2xl font-bold text-onyx" aria-hidden="true">C</div>
<div><p class="font-bold text-lg text-concelo-deep">Concertgoer</p><p class="caption text-concelo-deep/70">{{ store.tickets.length }} tickets, {{ store.saved.length }} saved, {{ store.myDay.length }} plans</p></div>
</div>
<h2 class="h4 mb-3 text-concelo-deep">Notifications</h2>
<div class="space-y-3 mb-8">
<div v-for="n in notifs" :key="n" class="bg-cloud border border-mist rounded-card p-4 text-sm text-concelo-deep">{{ n }}</div>
</div>
<h2 class="h4 mb-3 text-concelo-deep">My tickets</h2>
<div v-if="store.tickets.length" class="flex flex-wrap gap-2">
<Badge v-for="t in store.tickets" :key="t" tone="green">{{ t }}</Badge>
</div>
<p v-else class="text-sm text-concelo-deep/80">No tickets yet. Prices start from Rp 99.000.</p>
<router-link to="/tickets" class="btn btn-primary mt-6">Check ticket prices</router-link>
</div>
</template>
<script setup>
import SectionTitle from '../components/ui/SectionTitle.vue'
import Badge from '../components/ui/Badge.vue'
import { store } from '../store.js'
const notifs = ['Gates open 11:00 on event day. Check your event guide for details.', 'Headliner sets usually start 20:00 on the Main Stage.', 'AJAK shuttle pickup times are listed under Transport.', 'New ticket batches are on sale now.']
</script>