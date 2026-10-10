<template>
<div class="wave-divider relative z-10" aria-hidden="true">
<svg viewBox="0 0 1440 40" preserveAspectRatio="none" focusable="false">
<path :fill="fill" d="M0,24 Q120,14 240,24 T480,24 T720,24 T960,24 T1200,24 T1440,24 L1440,40 L0,40 Z" />
</svg>
</div>
</template>
<script setup>
defineProps({ fill: { type: String, default: '#FFF9E8' } })
</script>
<style scoped>
.wave-divider { display: block; width: 100%; line-height: 0; margin-bottom: -1px; }
.wave-divider svg { display: block; width: 100%; height: 48px; }
@media (max-width: 768px) { .wave-divider svg { height: 32px; } }
</style>
