<template>
<div class="concelo-page bm-body">
<div class="concelo-col">

<div class="bm-first" id="home">
<section ref="heroRef" class="bm-hero bg-cover bg-no-repeat" style="background-image:url('/hero/bg.webp');background-position:center 35%">
<div class="bm-wrap flex flex-col justify-center items-center text-center" style="min-height:inherit">
<div class="flex w-full flex-col items-center justify-center text-center -translate-y-3 md:-translate-y-4">
<img src="/hero/LOGO.webp" alt="concelo, © 2026 KARYA SEMESTA RAYA - All Right Reserved" class="bm-logo block w-full max-w-[560px] md:max-w-[760px] h-auto object-contain mx-auto" loading="eager" />
<p class="bm-tba mt-6 md:mt-8">{{ t('home.tba') }}</p>
</div>
</div>
</section>
<div aria-hidden="true" class="mt-auto relative z-10 mb-1" id="hero-tape">
<div class="bm-tape bg-[#FFDE59]"><div class="bm-tape-track text-[11px] md:text-[13px] font-extrabold text-black py-2"><span class="px-2">{{ t('home.comingSoon') }} &nbsp;</span><span class="px-2">{{ t('home.comingSoon') }}&nbsp;</span></div></div>
</div>
</div>

<div class="bm-scene" ref="sceneRef">

<section id="tiket" class="bm-screen relative z-0" :aria-label="t('nav.tiket')" style="padding-top:0;padding-bottom:0;margin-top:-40px">
<div class="bg-[#F9728B]">
<div class="bm-wrap pt-14 md:pt-[68px] pb-0 text-center">
<div class="bm-panel bm-screen-panel text-center">
<h2 class="bm-display bm-h-mobile md:text-[56px] text-[#111]">{{ t('home.ticketsTitle') }}</h2>
<div class="bm-rail mt-3 md:mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:gap-0 md:overflow-visible md:pb-0 lg:grid-cols-4 items-start">
<article v-for="p in tikets" :key="p.t" class="flex w-[68vw] max-w-[300px] shrink-0 snap-start flex-col items-center text-center md:w-auto md:max-w-none">
<component :is="p.habis ? 'div' : 'router-link'" :to="p.habis ? undefined : '/tickets'" :aria-label="p.habis ? undefined : t('home.buyAria') + p.t" :class="['relative w-full max-w-[340px] md:max-w-[380px] mx-auto pt-4 pb-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111] focus-visible:rounded-lg', !p.habis && 'group cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-1 active:scale-[0.98]']">
<img :src="p.img" :alt="t('home.ticketAlt') + p.t" :class="['w-full h-auto object-contain transition-transform duration-200 ease-out', !p.habis && 'group-hover:scale-[1.05] group-hover:-rotate-1']" loading="lazy" />
<div class="absolute inset-x-0 bottom-16 md:bottom-20 z-10 flex justify-center px-3">
<span class="relative inline-block">
<span class="inline-block rounded-[20px] border-[1.5px] border-[#111] px-4 py-1.5 text-[13px] md:text-[15px] font-bold uppercase tracking-[0.06em] shadow-[2px_2px_0_#111]" :style="{ background: p.edge, color: p.edge === '#C2435C' ? '#fff' : '#111' }">{{ p.t }}</span>
<span class="absolute -bottom-3 -right-3 md:-right-5 rotate-[-4deg] rounded-full border-[1.5px] px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.06em] whitespace-nowrap" :class="p.habis ? 'border-[#111] bg-[#E11D2E] text-white' : 'border-[#111] bg-[#96B63A] text-[#111] transition-transform duration-200 ease-out group-hover:scale-110 group-hover:rotate-[-8deg]'">{{ p.habis ? t('home.soldOut') : t('home.available') }}</span>
</span>
</div>
</component>
</article>
</div>
</div>
</div>
</div>
<img src="/tiket/tiket.webp" alt="" aria-hidden="true" class="bm-tiket-tail relative -mt-56 md:-mt-96" loading="lazy" />
</section>

<section id="lineup" class="bm-screen" :aria-label="t('nav.lineup')" style="padding-top:1.5rem">
<div class="bm-wrap py-6 md:py-10 text-center">
<div class="bm-panel bm-screen-panel text-center">
<h2 class="bm-display bm-h-mobile md:text-[56px] text-[#111]">{{ t('home.lineupTitle') }}</h2>
<div class="bm-rail bm-lineup-grid mt-4 md:mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:pb-0 lg:grid-cols-4">
<article v-for="(a, i) in lineup" :key="a.name" class="group relative flex h-full w-[62vw] max-w-[260px] shrink-0 snap-start flex-col rounded-2xl border-2 border-[#111] p-2 pb-2 text-left shadow-[4px_4px_0_#111] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[6px_6px_0_#111] active:scale-[0.98] md:w-auto md:max-w-none" :style="{ background: a.bg }">
<div class="relative bg-white rounded-xl border-2 border-[#111] px-2 pb-2 pt-4">
<div class="absolute top-1 left-1/2 h-2 w-16 -translate-x-1/2 rotate-[-2deg] bg-[#FFEB3B] border border-[#111]/20" aria-hidden="true"></div>
<div class="flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-white">
<img :src="a.img" :alt="a.name" class="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-200 ease-out" loading="lazy" />
</div>
</div>
<div class="-mt-3 ml-1 flex flex-col items-start gap-1">
<span class="bg-[#111] text-white text-[11px] md:text-xs font-extrabold uppercase tracking-wide px-2 py-1 leading-tight" :class="i % 2 ? 'rotate-1' : '-rotate-1'">{{ a.name }}</span>
<span class="text-[#111] text-[10px] md:text-[11px] font-extrabold uppercase px-2 py-px leading-tight border border-[#111]" :style="{ background: a.tag }">Live</span>
</div>
</article>
</div>
</div>
</div>
</section>

<section class="bm-screen bm-venue" :aria-label="t('home.venueTitle')" style="padding-top:1.5rem">
<div class="bm-wrap py-6 md:py-10 text-center">
<div class="bm-panel bm-screen-panel text-center">
<h2 class="bm-display bm-h-mobile md:text-[56px] text-[#111]">{{ t('home.venueTitle') }}</h2>
<div class="bm-venue-map mt-4 md:mt-5 w-full overflow-hidden rounded-2xl border-2 border-[#111] shadow-[4px_4px_0_#111]"><img src="/layout.webp" :alt="t('home.venueAlt')" class="w-full h-auto object-cover" loading="lazy" /></div>
</div>
</div>
</section>

<section class="bm-screen bm-merch" :aria-label="t('home.merchTitle')" style="padding-top:0.5rem;padding-bottom:0.5rem">
<div class="bm-wrap py-2 md:py-4 text-center" style="overflow:visible">
<div class="bm-panel bm-screen-panel text-center" style="overflow:visible">
<h2 class="bm-display bm-h-mobile md:text-[56px] text-[#111]">{{ t('home.merchTitle') }}</h2>
<div class="bm-rail mt-0 md:mt-2 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 pt-[12vw] md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 md:pt-0 lg:grid-cols-4 items-start">
<article v-for="m in merchs" :key="m.name" :class="[m.habis ? 'w-[66vw] max-w-[280px] shrink-0 snap-start text-center md:w-auto md:max-w-none' : 'group w-[66vw] max-w-[280px] shrink-0 snap-start text-center md:w-auto md:max-w-none']">
<div class="bm-folder">
<span v-if="m.habis" class="absolute left-1/2 top-1/2 z-[6] -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] rounded-full border-[1.5px] border-[#111] bg-[#E11D2E] text-white px-3 py-1 text-[11px] md:text-xs font-bold uppercase tracking-[0.06em] whitespace-nowrap pointer-events-none shadow-[2px_2px_0_#111]">{{ t('home.merchSold') }}</span>
<img :src="m.back" :alt="''" aria-hidden="true" class="bm-folder-back" loading="lazy" />
<div class="bm-folder-shirts" aria-hidden="false"><img :src="m.shirtA" :alt="m.name + t('home.frontView')" loading="lazy" /><img :src="m.shirtB" :alt="m.name + t('home.backView')" loading="lazy" /></div>
<div class="bm-folder-front" aria-hidden="true"><img :src="m.front" alt="" loading="lazy" /></div>
<div class="bm-folder-text"><h3 class="text-[21px] md:text-[26px] font-normal uppercase tracking-wide text-[#111] leading-tight">{{ m.name }}</h3>
<p class="text-[17px] md:text-[20px] font-bold text-[#111]">{{ m.price }}</p></div>
</div>
</article>
</div>
</div>
</div>
</section>

<section class="bm-screen bm-keseruan" :aria-label="t('home.collabTitle')" style="padding-top:0.5rem;padding-bottom:0.5rem">
<div class="bm-wrap py-2 md:py-4 text-center">
<div class="bm-panel bm-screen-panel text-center">
<h2 class="bm-display bm-h-mobile md:text-[56px] text-[#111] relative z-10">{{ t('home.collabTitle') }}</h2>
<div data-keseruan-media class="relative z-0 mx-auto mt-2 md:mt-3 w-full max-h-[72svh] overflow-hidden rounded-2xl border border-[#111] aspect-[9/16] md:aspect-[21/9] md:max-h-none bg-black origin-top"><iframe aria-hidden="true" tabindex="-1" src="https://www.youtube-nocookie.com/embed/5WuMCeLqYck?autoplay=1&mute=1&loop=1&playlist=5WuMCeLqYck&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&fs=0" title="" class="absolute inset-0 h-full w-full pointer-events-none scale-[1.25] blur-2xl brightness-75 opacity-90" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe><iframe src="https://www.youtube-nocookie.com/embed/5WuMCeLqYck?autoplay=1&mute=1&loop=1&playlist=5WuMCeLqYck&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&fs=0" :title="t('home.collabVideo')" class="absolute left-1/2 top-1/2 aspect-video h-[120%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 pointer-events-none md:h-[140%] md:w-[140%]" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" tabindex="-1" aria-hidden="true"></iframe></div>
</div>
</div>
</section>

<section class="bm-screen bm-about" :aria-label="t('home.aboutTitle')" style="padding-top:0.5rem;padding-bottom:0.5rem">
<div class="bm-wrap py-2 md:py-4 text-center">
<div class="bm-panel bm-screen-panel text-center">
<div class="relative flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-center">
<h2 class="bm-display bm-h-mobile md:text-[56px] md:mt-12 text-[#111] text-center">{{ t('home.aboutTitle') }}</h2>
</div>
<div class="mt-2 md:mt-3 w-full max-w-3xl mx-auto space-y-3 md:space-y-4 px-2 md:px-6 text-justify">
<p class="bm-about-p text-[15px] md:text-[18px] leading-relaxed text-[#111]/80">{{ t('home.aboutBody')[0] }}</p>
<div :class="[tentangOpen ? 'block space-y-3 md:space-y-4' : 'hidden md:block md:space-y-4']">
<p v-for="(p, i) in t('home.aboutBody').slice(1)" :key="i" class="bm-about-p text-[15px] md:text-[18px] leading-relaxed text-[#111]/80">{{ p }}</p>
</div>
<button @click="tentangOpen = !tentangOpen" :aria-expanded="tentangOpen" class="md:hidden mx-auto inline-flex items-center gap-1 rounded-full border-2 border-[#111] bg-[#FFEB3B] px-5 py-2.5 min-h-[44px] text-[13px] font-extrabold uppercase tracking-wide text-[#111] shadow-[3px_3px_0_#111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">{{ tentangOpen ? t('home.closeBtn') : t('home.readMore') }}<svg viewBox="0 0 24 24" :class="['h-4 w-4 transition-transform', tentangOpen && 'rotate-180']" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M6 9l6 6 6-6" /></svg></button>
<p class="text-[16px] md:text-[20px] font-extrabold text-center text-[#111]">{{ t('home.tagline') }}</p>
</div>
</div>
</div>
</section>

<div aria-hidden="true">
<div class="bm-tape bg-[#FFDE59]"><div class="bm-tape-track text-[11px] md:text-[13px] font-extrabold text-black py-2"><span class="px-2">{{ t('home.contactTape') }}&nbsp;</span><span class="px-2">{{ t('home.contactTape') }}&nbsp;</span></div></div>
</div>

<section id="kontak" class="bm-screen" :aria-label="t('nav.kontak')" style="padding-top:0.5rem;padding-bottom:5rem">
<div class="bm-wrap pt-2 md:pt-3 pb-0 text-center">
<div class="bm-panel bm-screen-panel !bg-transparent !border-0 !shadow-none text-center">
<h2 class="bm-display bm-h-mobile uppercase md:text-[56px] text-[#111] text-center mt-8 md:mt-12">{{ t('home.contactTitle') }}</h2>
<div class="mt-6 md:mt-8 w-screen max-w-none select-none flex items-center justify-start md:justify-center gap-4 overflow-x-auto px-4 md:px-8 pb-4 no-scrollbar" style="margin-left:calc(-50vw + 50%)">
<a href="mailto:halo@concelo.id" aria-label="Email" class="relative shrink-0 flex h-14 sm:h-16 md:h-20 w-[260px] md:w-[320px] items-center justify-center rounded-full rotate-[2deg] transition-transform duration-200 hover:scale-105 hover:rotate-0 active:scale-95" style="background:#ef771f"><span class="text-[#111] font-black italic text-xl md:text-3xl tracking-tighter leading-none" style="font-family:'Unbounded',sans-serif" aria-hidden="true">VK</span></a>
<a href="https://t.me/conceloid" target="_blank" rel="noopener" aria-label="Telegram" class="relative shrink-0 flex h-14 sm:h-16 md:h-20 w-[260px] md:w-[320px] items-center justify-center rounded-full rotate-[-2deg] transition-transform duration-200 hover:scale-105 hover:rotate-0 active:scale-95" style="background:#FFE713"><svg viewBox="0 0 24 24" class="h-7 w-7 md:h-9 md:w-9 fill-[#111]" aria-hidden="true"><path d="M21.9 3.3L2.7 10.8c-.8.3-.8 1.4.1 1.6l4.7 1.5 1.8 5.6c.3.8 1.3.9 1.8.2l2.6-3.1 4.9 3.6c.6.4 1.5.1 1.7-.6l2.5-14.1c.2-1-.9-1.7-1.9-1.2zm-8.4 9.3l-5 4.7-.7-4.4 8.3-6.4-2.6 6.1z"/></svg></a>
<a href="https://wa.me/62210000000" target="_blank" rel="noopener" aria-label="WhatsApp" class="relative shrink-0 flex h-14 sm:h-16 md:h-20 w-[260px] md:w-[320px] items-center justify-center rounded-full rotate-[2deg] transition-transform duration-200 hover:scale-105 hover:rotate-0 active:scale-95" style="background:#81E600"><svg viewBox="0 0 24 24" class="h-7 w-7 md:h-9 md:w-9 fill-[#111]" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.3.6-.6.8-.4 1.1.7 1.2 1.6 2 2.8 2.6.3.2.5 0 .7-.2l.7-.8c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3 0 .1 0 .7-.5 1.4z"/></svg></a>
<a href="https://instagram.com/concelo.id" target="_blank" rel="noopener" aria-label="Instagram" class="relative shrink-0 flex h-14 sm:h-16 md:h-20 w-[260px] md:w-[320px] items-center justify-center rounded-full rotate-[-2deg] transition-transform duration-200 hover:scale-105 hover:rotate-0 active:scale-95" style="background:#FF7AC1"><svg viewBox="0 0 24 24" class="h-7 w-7 md:h-10 md:w-10" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5.5" fill="#111"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="#FF7AC1" stroke-width="2"/><circle cx="17" cy="7" r="1.4" fill="#FF7AC1"/></svg></a>
</div>
</div>
</div>
</section>

<div class="bm-scene-end" aria-hidden="true" style="height:0"></div>
</div>

</div>
</div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { t } from '../i18n.js'
const lineup = [
{ name: '510', img: '/lineup/510.webp', bg: '#7B7CF5', tag: '#B6FF2E' },
{ name: 'BLACKHORSE', img: '/lineup/blackhorse.webp', bg: '#FFB800', tag: '#FF7A1A' },
{ name: 'DAKARA', img: '/lineup/dakara.webp', bg: '#F9728B', tag: '#FFEB3B' },
{ name: 'THE KICK', img: '/lineup/thekick.webp', bg: '#96B63A', tag: '#FFEB3B' }
]
const tikets = [
{ t: 'Early Bird', img: '/tiket/earlybird.webp', habis: true, edge: '#F9728B' },
{ t: 'Presale', img: '/tiket/presale.webp', habis: true, edge: '#C2435C' },
{ t: 'Reguler', img: '/tiket/reguler.webp', habis: true, edge: '#96B63A' },
{ t: 'VIP', img: '/tiket/vip.webp', habis: false, edge: '#FFDE59' }
]
const merchs = [
{ name: 'Kaos Pink', price: 'Rp 149.000', ink: '#111', habis: false, back: '/merch/kuning.webp', front: '/merch/kuning1.webp', shirtA: '/merch/merchPink1.webp', shirtB: '/merch/merchPink.webp' },
{ name: 'Kaos Oren', price: 'Rp 149.000', ink: '#fff', habis: true, back: '/merch/hijau.webp', front: '/merch/hijau1.webp', shirtA: '/merch/merchOren1.webp', shirtB: '/merch/merchOren.webp' },
{ name: 'Kaos Putih', price: 'Rp 149.000', ink: '#111', habis: false, back: '/merch/pink.webp', front: '/merch/pink1.webp', shirtA: '/merch/merchPutih1.webp', shirtB: '/merch/merchPutih.webp' },
{ name: 'Kaos Putih Oren', price: 'Rp 149.000', ink: '#111', habis: false, back: '/merch/oren.webp', front: '/merch/oren1.webp', shirtA: '/merch/merchPutih1.webp', shirtB: '/merch/merchPutih.webp' }
]
const tentangOpen = ref(false)
const sceneRef = ref(null)
const heroRef = ref(null)
let raf = 0
let ticking = false
let heroIo = null
function stickyTop() { return window.innerWidth >= 768 ? 72 : 64 }
function updateFades() {
ticking = false
if (!sceneRef.value) return
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
sceneRef.value.querySelectorAll('.bm-screen > .bm-wrap').forEach((wrap) => { wrap.style.opacity = '1'; wrap.style.transform = 'none' })
return
}
const vh = window.innerHeight
const top = stickyTop()
const screens = sceneRef.value.querySelectorAll('.bm-screen')
screens.forEach((s) => {
const wrap = s.querySelector('.bm-wrap')
if (!wrap) return
const r = s.getBoundingClientRect()
const rawLabel = (s.getAttribute('aria-label') || '').toLowerCase()
const isKontak = (rawLabel === 'kontak' || rawLabel === 'contact')
const isTentang = (rawLabel === 'tentang concelo' || rawLabel === 'about concelo')
if (isTentang && window.innerWidth < 768) { wrap.style.opacity = '1'; wrap.style.transform = 'none'; return }
const isKeseruan = (rawLabel === 'keseruan kerja bareng' || rawLabel === 'fun times together')
const isDenah = (rawLabel === 'denah venue' || rawLabel === 'venue map')
const isDesktop = window.innerWidth >= 768
let opacity = 0
let y = 40
if (!isDesktop && (isDenah || isKeseruan)) {
const media = s.querySelector(isDenah ? '.bm-venue-map' : '[data-keseruan-media]')
if (media) {
const p = Math.min(Math.max((vh - media.getBoundingClientRect().top) / vh, 0), 1)
media.style.setProperty('--mw', `${(50 + 50 * p).toFixed(2)}vw`)
media.style.setProperty('--mh', `${(40 + 60 * p).toFixed(2)}vh`)
}
}
if (!isDesktop) {
if (r.top >= vh) { opacity = 0; y = 32 }
else if (r.top >= vh * 0.65) {
const p = 1 - (r.top - vh * 0.65) / (vh * 0.35)
opacity = p; y = 32 * (1 - p)
}
else if (r.bottom >= vh * 0.45) { opacity = 1; y = 0 }
else if (r.bottom >= top) {
const p = Math.max((r.bottom - top) / (vh * 0.45 - top), 0)
opacity = p; y = -32 * (1 - p)
}
else { opacity = 0; y = -32 }
wrap.style.opacity = opacity.toFixed(3)
wrap.style.transform = `translateY(${y.toFixed(1)}px)`
return
}
const hold = 0
const fade = vh * 0.25
if (isDenah && isDesktop) {
const exitStart = vh * 0.6
if (r.top >= vh) { opacity = 0; y = 40 }
else if (r.top >= vh * 0.65) {
const p = 1 - (r.top - vh * 0.65) / (vh * 0.35)
opacity = p; y = 40 * (1 - p)
}
else if (r.bottom >= exitStart) { opacity = 1; y = 0 }
else if (r.bottom >= top) {
const p = Math.max((r.bottom - top) / (exitStart - top), 0)
opacity = p; y = -160 * (1 - p)
}
else { opacity = 0; y = -160 }
wrap.style.opacity = opacity.toFixed(3)
wrap.style.transform = `translateY(${y.toFixed(1)}px)`
return
}
if (isTentang) {
const inP = Math.min(Math.max((vh - r.top) / (vh * 0.35), 0), 1)
const outP = Math.min(Math.max((r.bottom - vh * 0.15) / (vh * 0.25), 0), 1)
wrap.style.opacity = Math.min(inP, outP).toFixed(3)
wrap.style.transform = `translateY(${(40 * (1 - inP)).toFixed(1)}px)`
return
}
if (isKeseruan) {
const media = s.querySelector('[data-keseruan-media]')
if (media) {
const mt = media.getBoundingClientRect()
const inP = Math.min(Math.max((vh - mt.top) / (vh * 0.35), 0), 1)
const outP = Math.min(Math.max((mt.bottom - vh * 0.35) / (vh * 0.25), 0), 1)
media.style.opacity = Math.min(inP, outP).toFixed(3)
}
if (media && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
const prog = Math.min(Math.max((vh - r.top) / (vh * 0.9), 0), 1.15)
const scale = (0.92 + prog * 0.14).toFixed(3)
media.style.transform = `scale(${scale})`
}
if (r.top >= vh) { opacity = 0; y = 40 }
else if (r.top >= vh * 0.65) {
const p = 1 - (r.top - vh * 0.65) / (vh * 0.35)
opacity = p; y = 40 * (1 - p)
}
else { opacity = 1; y = 0 }
} else if (r.top >= vh) { opacity = 0; y = 40 }
else if (r.top >= vh * 0.65) {
const p = 1 - (r.top - vh * 0.65) / (vh * 0.35)
opacity = p; y = 40 * (1 - p)
}
else if (r.top >= top - hold) { opacity = 1; y = 0 }
else if (isKontak) { opacity = 1; y = 0 }
else if (r.top >= top - hold - fade) {
const p = (r.top - (top - hold - fade)) / fade
opacity = Math.max(p, 0); y = -160 * (1 - p)
}
else { opacity = 0; y = -160 }
wrap.style.opacity = opacity.toFixed(3)
wrap.style.transform = `translateY(${y.toFixed(1)}px)`
})
}
function onScroll() {
if (ticking) return
ticking = true
raf = requestAnimationFrame(updateFades)
}
onMounted(() => {
updateFades()
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
heroRef.value?.classList.add('is-visible')
} else if (heroRef.value) {
heroIo = new IntersectionObserver(([e]) => { heroRef.value.classList.toggle('is-visible', e.isIntersecting) }, { threshold: 0.35 })
heroIo.observe(heroRef.value)
requestAnimationFrame(() => requestAnimationFrame(() => { if (heroRef.value?.getBoundingClientRect().top < window.innerHeight) heroRef.value.classList.add('is-visible') }))
}
window.addEventListener('scroll', onScroll, { passive: true })
window.addEventListener('resize', onScroll)
})
onUnmounted(() => {
window.removeEventListener('scroll', onScroll)
window.removeEventListener('resize', onScroll)
heroIo?.disconnect()
cancelAnimationFrame(raf)
})
</script>
