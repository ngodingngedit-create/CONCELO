<template>
<span :class="['badge font-medium', sz, toneClass]"><slot /></span>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({ tone: { type: String, default: 'pink' }, size: { type: String, default: 'md' } })
const tones = {
  pink: 'bg-concelo-pink text-onyx',
  yellow: 'bg-concelo-yellow text-onyx',
  green: 'bg-concelo-green text-onyx',
  deep: 'bg-concelo-deep text-white',
  mist: 'bg-transparent border border-mist text-concelo-deep',
  sale: 'bg-concelo-green text-onyx',
  fast: 'bg-concelo-yellow text-onyx',
  out: 'bg-transparent border border-mist text-concelo-deep',
  soon: 'bg-concelo-pink text-onyx'
}
const toneClass = computed(() => tones[props.tone] ?? tones.pink)
const sz = computed(() => props.size === 'sm' ? 'text-[12px] px-2.5 py-1' : 'text-[14px] px-3 py-1.5')
</script>
