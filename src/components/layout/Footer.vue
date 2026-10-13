<template>
<footer class="bg-[#FFDE59] text-[#111] shadow-[0_-1px_2px_rgba(17,17,17,0.05),0_-16px_32px_-24px_rgba(17,17,17,0.25)]">
<div class="bm-wrap py-4 grid justify-items-center justify-center gap-x-4 gap-y-2 text-center text-[13px] text-[#111]/60 font-bold md:flex md:flex-wrap md:items-center md:justify-between md:text-left"><div class="flex items-center justify-center gap-2"><span class="uppercase tracking-wide">{{ t('footer.promoted') }}</span><img src="/logo/promotor.webp" alt="Promotor" class="h-6 md:h-7 w-auto object-contain" loading="lazy" /></div><span>{{ t('footer.rights') }}</span></div>
</footer>
</template>
<script setup>
import { t } from '../../i18n.js'
</script>
