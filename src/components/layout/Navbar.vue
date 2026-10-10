<template>
<header :class="['sticky top-0 z-40 transition-all duration-300 relative', !showDrip ? 'bg-[#e5e7eb] shadow-[0_1px_2px_rgba(17,17,17,0.06),0_12px_32px_-16px_rgba(17,17,17,0.22)]' : 'bg-transparent shadow-none border-0 -mb-16 md:-mb-[72px]']" style="overflow:visible">
<picture class="bm-nav-drip" :data-hidden="!showDrip ? '1' : '0'" aria-hidden="true"><source media="(max-width: 767px)" srcset="/hero/headerNavbarMobile.webp?v=9" /><img src="/hero/headerNavbar.webp?v=8" alt="" loading="eager" fetchpriority="high" /></picture>
<div class="relative z-10 max-w-[90rem] mx-auto px-4 md:px-16 flex items-center justify-between gap-4 h-16 md:h-[72px] md:grid md:grid-cols-[1fr_auto_1fr]">
<router-link to="/" class="leading-none shrink-0 justify-self-start" aria-label="concelo home"><img src="/logo/CONCELO.webp" alt="concelo" class="h-8 md:h-10 w-auto object-contain" loading="eager" /></router-link>
<nav class="hidden md:flex items-center justify-self-center gap-2 text-[14px] font-extrabold text-[#111]" aria-label="Primary"><a href="#home" @click.prevent="goHome" :class="navCls('home')">Home</a>
<a href="#tiket" :class="navCls('tiket')">Tiket</a>
<a href="#lineup" :class="navCls('lineup')">Line Up</a>
<a href="#kontak" :class="navCls('kontak')">Kontak</a>
</nav>
<div class="flex items-center gap-3 justify-self-end">
<a href="#tiket" class="bm-btn bg-[#F9728B] text-white !border-[#F9728B] !min-h-[44px] !py-2 !px-5 !text-[13px] !hidden md:!inline-flex">BELI TIKET</a>
<button class="md:hidden flex w-11 h-11 items-center justify-center shrink-0 rounded-full bg-[#F9728B] border-2 border-[#111] shadow-[2px_2px_0_#111]" @click="open = true" :aria-expanded="open" aria-controls="mobile-menu" aria-label="Menu"><svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg></button>
</div>
</div>
</header>
<div v-if="open" class="fixed inset-0 z-40 bg-black/40 md:hidden" aria-hidden="true" @click="open = false"></div>
<aside id="mobile-menu" :class="['fixed top-0 right-0 z-50 flex h-dvh w-[280px] flex-col bg-[#FFDE59] px-5 py-4 shadow-xl transition-transform duration-300 md:hidden', open ? 'translate-x-0' : 'translate-x-full pointer-events-none']" :aria-hidden="!open" aria-label="Menu">
<div class="flex items-center justify-between">
<span class="text-[13px] font-extrabold uppercase tracking-widest text-[#111]">Menu</span>
<button class="flex w-11 h-11 items-center justify-center" @click="open = false" aria-label="Tutup menu"><svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="#F9728B" stroke-width="2.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
</div>
<nav class="mt-2 space-y-1 font-extrabold">
<a href="#home" :class="mNavCls('home')" @click="goHomeMobile">Home</a>
<a href="#tiket" :class="mNavCls('tiket')" @click="open = false">Tiket</a>
<a href="#lineup" :class="mNavCls('lineup')" @click="open = false">Line Up</a>
<a href="#kontak" :class="mNavCls('kontak')" @click="open = false">Kontak</a>
</nav>
<a href="#tiket" class="bm-btn mt-auto w-full bg-[#F9728B] text-white !border-[#111]" @click="open = false">BELI TIKET</a>
</aside>
</template>
<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const isHome = computed(() => route.path === '/')
const open = ref(false)
const showDrip = ref(route.path === '/')
const active = ref('home')
const navBase = 'px-4 py-2 rounded-full transition-all border-2'
function navCls(key) { return [navBase, active.value === key ? 'bg-[#FFEB3B] text-[#111] border-[#111] shadow-[3px_3px_0_#111]' : 'border-transparent hover:bg-[#F9728B]/15'] }
function mNavCls(key) { return ['block py-3 min-h-[44px] px-3 rounded-xl border-2 transition-colors', active.value === key ? 'bg-[#FFEB3B] text-[#111] border-[#111] shadow-[3px_3px_0_#111]' : 'border-transparent'] }
function goHome() { active.value = 'home'; window.scrollTo({ top: 0, behavior: 'smooth' }) }
function goHomeMobile() { open.value = false; goHome() }
let secIo = null
const onKey = e => { if (e.key === 'Escape') open.value = false }
function headerH() { return window.innerWidth >= 768 ? 72 : 64 }
let tick = false
function updateDrip() {
  tick = false
  if (!isHome.value) { showDrip.value = false; return }
  const tapeEl = document.getElementById('hero-tape')
  const heroEl = document.querySelector('.bm-first .bm-hero') || document.getElementById('home')
  if (!tapeEl || !heroEl) { showDrip.value = window.scrollY < 40; return }
  const tapeTop = tapeEl.getBoundingClientRect().top
  const heroBottom = heroEl.getBoundingClientRect().bottom
  if (tapeTop <= headerH()) showDrip.value = false
  else showDrip.value = heroBottom > headerH() + 48
}
function onScroll() { if (tick) return; tick = true; requestAnimationFrame(updateDrip) }
watch(() => route.path, () => { showDrip.value = route.path === '/'; requestAnimationFrame(updateDrip) })
onMounted(() => {
  window.addEventListener('keydown', onKey)
  updateDrip()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
secIo = new IntersectionObserver((entries) => {
entries.forEach((e) => { if (e.isIntersecting) active.value = e.target.id === 'home' ? 'home' : e.target.id })
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 })
;['home', 'tiket', 'lineup', 'kontak'].forEach((id) => { const el = document.getElementById(id); if (el) secIo.observe(el) })
})
onUnmounted(() => { window.removeEventListener('keydown', onKey); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); secIo?.disconnect() })
</script>
