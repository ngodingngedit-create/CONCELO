<template>
<div class="container-x section-pad">
<SectionTitle :title="t('savedPage.title')" :sub="t('savedPage.sub')" />
<div v-if="savedEvents.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<EventCard v-for="e in savedEvents" :key="e.id" :event="e" />
</div>
<EmptyState v-else :title="t('savedPage.emptyTitle')" :sub="t('savedPage.emptySub')" :cta="t('savedPage.emptyCta')" to="/events" />
</div>
</template>
<script setup>
import { computed } from 'vue'
import { t } from '../i18n.js'
import EventCard from '../components/event/EventCard.vue'
import SectionTitle from '../components/ui/SectionTitle.vue'
import EmptyState from '../components/ui/EmptyState.vue'
import events from '../data/events.json'
import { store } from '../store.js'
const savedEvents = computed(() => events.filter(e => store.saved.includes(e.id)))
</script>
