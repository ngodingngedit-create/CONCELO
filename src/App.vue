<template>
<div class="min-h-screen flex flex-col bm-body bm-chrome text-[#111]">
<a href="#main" class="skip-link">Lewati ke konten</a>
<Marquee v-if="false" />
<div id="top-sentinel" aria-hidden="true" style="height:1px"></div>
<Navbar />
<main id="main" class="flex-1" tabindex="-1"><router-view /></main>
<Footer />
</div>
</template>
<script setup>
import Marquee from './components/home/Marquee.vue'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
</script>
