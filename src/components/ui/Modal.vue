<template>
<div v-if="open" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
<div class="absolute inset-0 bg-concelo-deep/50" @click="close" aria-hidden="true"></div>
<div ref="panel" role="dialog" aria-modal="true" :aria-label="label || title" class="relative bg-cloud rounded-card border border-mist p-6 w-full max-w-md max-h-[85vh] overflow-y-auto" style="transform-origin: center">
<div class="flex items-start justify-between gap-4 mb-4">
<h3 class="h4 text-concelo-deep">{{ title }}</h3>
<button @click="close" aria-label="Close dialog" class="w-11 h-11 shrink-0 rounded-pill border border-concelo-deep text-concelo-deep font-bold text-lg leading-none">×</button>
</div>
<slot />
</div>
</div>
</template>
<script setup>
import { nextTick, onUnmounted, ref, watch } from 'vue'
const props = defineProps({ open: Boolean, title: String, label: String })
const emit = defineEmits(['close'])
const panel = ref(null)
const close = () => emit('close')
const onKey = e => { if (e.key === 'Escape') close() }
watch(() => props.open, async v => {
if (v) { await nextTick(); panel.value?.querySelector('button')?.focus(); document.addEventListener('keydown', onKey) }
else { document.removeEventListener('keydown', onKey) }
})
onUnmounted(() => document.removeEventListener('keydown', onKey))
</script>
