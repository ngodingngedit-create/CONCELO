<template>
<div class="container-x section-pad max-w-2xl">
<SectionTitle :title="t('profilePage.title')" :sub="t('profilePage.sub')" />
<div class="card-promo p-5 md:p-6 flex items-center gap-4 mb-6 bg-cloud">
<div class="w-14 h-14 shrink-0 rounded-pill bg-concelo-yellow border border-concelo-deep flex items-center justify-center text-2xl font-bold text-onyx" aria-hidden="true">C</div>
<div><p class="font-bold text-lg text-concelo-deep">{{ t('profilePage.name') }}</p><p class="caption text-concelo-deep/70">{{ t('profilePage.stats', { t: store.tickets.length, s: store.saved.length, d: store.myDay.length }) }}</p></div>
</div>
<h2 class="h4 mb-3 text-concelo-deep">{{ t('profilePage.notifTitle') }}</h2>
<div class="space-y-3 mb-8">
<div v-for="n in t('profilePage.notifs')" :key="n" class="bg-cloud border border-mist rounded-card p-4 text-sm text-concelo-deep">{{ n }}</div>
</div>
<h2 class="h4 mb-3 text-concelo-deep">{{ t('profilePage.ticketTitle') }}</h2>
<div v-if="store.tickets.length" class="flex flex-wrap gap-2">
<Badge v-for="tk in store.tickets" :key="tk" tone="green">{{ tk }}</Badge>
</div>
<p v-else class="text-sm text-concelo-deep/80">{{ t('profilePage.emptyTickets') }}</p>
<router-link to="/tickets" class="btn btn-primary mt-6">{{ t('profilePage.checkPrices') }}</router-link>
</div>
</template>
<script setup>
import { t } from '../i18n.js'
import SectionTitle from '../components/ui/SectionTitle.vue'
import Badge from '../components/ui/Badge.vue'
import { store } from '../store.js'
</script>
