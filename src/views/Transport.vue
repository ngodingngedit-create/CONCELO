<template>
<div class="container-x section-pad">
<SectionTitle :title="t('transportPage.title')" :sub="t('transportPage.sub')" />
<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
<div v-for="m in t('transportPage.modes')" :key="m.t" class="bg-cloud border border-mist rounded-card p-5 text-concelo-deep">
<p class="font-bold mt-1">{{ m.t }}</p>
<p class="caption text-concelo-deep/70 mt-1">{{ m.d }}</p>
</div>
</div>
<SectionTitle :title="t('transportPage.shuttleTitle')" :sub="t('transportPage.shuttleSub')" />
<div v-if="loading" class="grid gap-4 max-w-3xl" :aria-label="t('transportPage.loading')">
<div v-for="i in 3" :key="i" class="skel h-24"></div>
</div>
<div v-else class="grid gap-4 max-w-3xl">
<ShuttleCard v-for="s in shuttles" :key="s.id" :shuttle="s" />
</div>
</div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { t } from '../i18n.js'
import SectionTitle from '../components/ui/SectionTitle.vue'
import ShuttleCard from '../components/event/ShuttleCard.vue'
import shuttles from '../data/shuttles.json'
const loading = ref(true)
onMounted(() => setTimeout(() => { loading.value = false }, 300))
</script>
