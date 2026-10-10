<template>
<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
<div v-for="s in sponsors" :key="s.name" class="bg-cloud border border-mist rounded-card p-4 flex items-center gap-3">
<div class="w-10 h-10 rounded-card border border-concelo-deep flex items-center justify-center font-bold text-sm shrink-0 text-onyx" :style="{ background: s.color }">{{ s.initial }}</div>
<div class="min-w-0"><p class="font-bold text-sm truncate text-concelo-deep">{{ s.name }}</p><p class="caption text-concelo-deep/70">{{ s.tier }}</p></div>
</div>
</div>
</template>
<script setup>
import sponsors from '../../data/sponsors.json'
</script>
