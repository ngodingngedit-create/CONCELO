<template>
<article class="flex items-center gap-4 py-4 border-b border-mist/40">
<div class="w-12 h-12 shrink-0 rounded-card bg-concelo-yellow border border-concelo-deep flex items-center justify-center font-bold text-onyx" aria-hidden="true">{{ artist.initial }}</div>
<div class="flex-1 min-w-0">
<h4 class="font-bold text-concelo-deep">{{ artist.name }}</h4>
<p class="caption text-concelo-deep/70">{{ artist.genre }}, {{ artist.time }}, {{ artist.stage }}</p>
</div>
<button @click="$emit('add', artist)" class="btn btn-outline btn-auto !py-2 !px-4 text-sm min-h-[44px]">{{ t('eventDetail.addDay') }}</button>
</article>
</template>
<script setup>
import { t } from '../../i18n.js'
defineProps({ artist: Object })
defineEmits(['add'])
</script>
