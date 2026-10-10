<template>
<div class="flex gap-2 md:gap-3" :class="center ? 'justify-center' : ''" role="timer" aria-label="Countdown to event">
<div v-for="u in units" :key="u.label" class="bg-cloud border border-concelo-deep rounded-card px-3 py-2 md:px-4 text-center min-w-[64px] text-concelo-deep">
<p class="text-xl md:text-2xl font-bold tabular-nums leading-none">{{ u.value }}</p>
<p class="text-[10px] tracking-[0.14em] mt-1">{{ u.label }}</p>
</div>
</div>
</template>
<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
const props = defineProps({ target: { type: String, required: true }, center: Boolean })
const now = ref(Date.now())
let t = null
onMounted(() => { t = setInterval(() => { now.value = Date.now() }, 1000) })
onUnmounted(() => clearInterval(t))
const diff = computed(() => Math.max(0, new Date(props.target).getTime() - now.value))
const pad = n => String(n).padStart(2, '0')
const units = computed(() => {
const s = Math.floor(diff.value / 1000)
return [
{ label: 'DAYS', value: pad(Math.floor(s / 86400)) },
{ label: 'HRS', value: pad(Math.floor(s / 3600) % 24) },
{ label: 'MIN', value: pad(Math.floor(s / 60) % 60) },
{ label: 'SEC', value: pad(s % 60) }
]
})
</script>
