<template>
<div v-if="variant === 'list'" class="w-full">
<p class="text-[13px] font-extrabold uppercase tracking-widest text-[#111] mb-2">{{ t('nav.language') }}</p>
<div class="grid grid-cols-2 gap-2" role="group" :aria-label="t('nav.language')">
<button v-for="l in LOCALES" :key="l.code" @click="setLocale(l.code)" :aria-pressed="i18n.locale === l.code" :class="['flex min-h-[44px] items-center justify-center gap-2 rounded-xl border-2 px-3 text-[13px] font-extrabold uppercase tracking-wide transition-all', i18n.locale === l.code ? 'bg-[#FFEB3B] text-[#111] border-[#111] shadow-[3px_3px_0_#111]' : 'bg-white text-[#111]/60 border-[#111]/30']">
<span v-html="flag(l.code)"></span>{{ l.short }}
</button>
</div>
</div>
<div v-else ref="root" class="relative">
<button @click="open = !open" :aria-expanded="open" aria-haspopup="listbox" :aria-label="t('nav.language')" class="flex min-h-[44px] items-center gap-2 rounded-full border-2 border-[#111] bg-white pl-2 pr-3 shadow-[2px_2px_0_#111] transition-all hover:bg-[#FFEB3B] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
<span v-html="flag(i18n.locale)" class="block overflow-hidden rounded-full border border-[#111]"></span>
<span class="text-[13px] font-extrabold uppercase tracking-wide text-[#111]">{{ cur.short }}</span>
<svg viewBox="0 0 24 24" :class="['h-4 w-4 transition-transform', open && 'rotate-180']" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"><path d="M6 9l6 6 6-6" /></svg>
</button>
<div v-if="open" role="listbox" :aria-label="t('nav.language')" class="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-2xl border-2 border-[#111] bg-white shadow-[4px_4px_0_#111]">
<button v-for="l in LOCALES" :key="l.code" role="option" :aria-selected="i18n.locale === l.code" @click="pick(l.code)" :class="['flex w-full min-h-[48px] items-center gap-3 px-4 text-left transition-colors', i18n.locale === l.code ? 'bg-[#FFEB3B]' : 'bg-white hover:bg-[#FFEB3B]/40']">
<span v-html="flag(l.code)" class="block overflow-hidden rounded-full border-2 border-[#111]"></span>
<span class="flex-1 text-[14px] font-extrabold text-[#111]">{{ l.label }}</span>
<svg v-if="i18n.locale === l.code" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"><path d="M5 13l4 4L19 7" /></svg>
</button>
</div>
</div>
</template>
<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { LOCALES, i18n, setLocale, t } from '../../i18n.js'
defineProps({ variant: { type: String, default: 'dropdown' } })
const open = ref(false)
const root = ref(null)
const cur = computed(() => LOCALES.find(l => l.code === i18n.locale) ?? LOCALES[0])
function pick(code) { setLocale(code); open.value = false }
function onDoc(e) { if (open.value && root.value && !root.value.contains(e.target)) open.value = false }
function onKey(e) { if (e.key === 'Escape') open.value = false }
onMounted(() => { document.addEventListener('click', onDoc); document.addEventListener('keydown', onKey) })
onUnmounted(() => { document.removeEventListener('click', onDoc); document.removeEventListener('keydown', onKey) })
function flag(code) {
if (code === 'id') return `<svg width="22" height="22" viewBox="0 0 20 20" aria-hidden="true"><clipPath id="c-id"><circle cx="10" cy="10" r="10"/></clipPath><g clip-path="url(#c-id)"><rect width="20" height="20" fill="#fff"/><rect width="20" height="10" fill="#E70011"/></g></svg>`
return `<svg width="22" height="22" viewBox="0 0 20 20" aria-hidden="true"><clipPath id="c-en"><circle cx="10" cy="10" r="10"/></clipPath><g clip-path="url(#c-en)"><rect width="20" height="20" fill="#012169"/><path d="M0 0l20 20M20 0L0 20" stroke="#fff" stroke-width="4"/><path d="M0 0l20 20M20 0L0 20" stroke="#C8102E" stroke-width="1.6"/><path d="M10 0v20M0 10h20" stroke="#fff" stroke-width="6"/><path d="M10 0v20M0 10h20" stroke="#C8102E" stroke-width="3.4"/></g></svg>`
}
</script>
