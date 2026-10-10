<template>
<div role="tablist" :aria-label="label" class="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap" @keydown="onKey">
<button v-for="t in tabs" :key="t" role="tab" :aria-selected="modelValue === t" @click="$emit('update:modelValue', t)" :class="['chip shrink-0', modelValue === t ? 'chip-active' : '']">{{ t }}</button>
</div>
</template>
<script setup>
const props = defineProps({ tabs: Array, modelValue: String, label: { type: String, default: 'Filter options' } })
defineEmits(['update:modelValue'])
const onKey = e => {
const i = props.tabs.indexOf(props.modelValue)
let n = -1
if (e.key === 'ArrowRight') n = (i + 1) % props.tabs.length
if (e.key === 'ArrowLeft') n = (i - 1 + props.tabs.length) % props.tabs.length
if (e.key === 'Home') n = 0
if (e.key === 'End') n = props.tabs.length - 1
if (n >= 0) { e.preventDefault(); e.currentTarget.querySelectorAll('[role="tab"]')[n]?.focus(); e.currentTarget.querySelectorAll('[role="tab"]')[n]?.click() }
}
</script>
