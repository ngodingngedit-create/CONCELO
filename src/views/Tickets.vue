<template>
<div class="container-x section-pad">
<SectionTitle :title="t('ticketsPage.title')" :sub="t('ticketsPage.sub')" />
<div v-if="loading" class="grid gap-5 md:grid-cols-3" :aria-label="t('ticketsPage.loading')">
<div v-for="i in 3" :key="i" class="skel h-64"></div>
</div>
<div v-else class="grid gap-5 md:grid-cols-3 items-start">
<TicketCard v-for="(tk, i) in plans" :key="tk.name" :ticket="tk" :featured="i === 1" @buy="buy(tk)" />
</div>
<p class="caption text-concelo-deep/70 mt-4 max-w-2xl">{{ t('ticketsPage.note') }}</p>
<div v-if="bought" class="mt-12">
<SectionTitle :title="t('ticketsPage.myTicket')" :sub="t('ticketsPage.myTicketSub')" />
<TicketQR :tier="bought.name.toUpperCase()" :code="'TIX-2027-' + bought.name.toUpperCase().replace(/\s/g, '') + '-001'" />
</div>
</div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue'
import { t } from '../i18n.js'
import SectionTitle from '../components/ui/SectionTitle.vue'
import TicketCard from '../components/ticket/TicketCard.vue'
import TicketQR from '../components/ticket/TicketQR.vue'
import { store } from '../store.js'
const plans = computed(() => t('ticketsPage.plans'))
const bought = ref(null)
const loading = ref(true)
onMounted(() => setTimeout(() => { loading.value = false }, 300))
const buy = tk => { bought.value = tk; if (!store.tickets.includes(tk.name)) store.tickets.push(tk.name) }
</script>
