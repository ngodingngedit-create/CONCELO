<template>
<article class="bg-cloud rounded-card border border-mist p-4 md:p-5">
<div class="w-11 h-11 rounded-card bg-concelo-yellow border border-concelo-deep flex items-center justify-center text-xl font-bold text-onyx" aria-hidden="true">{{ vendor.name[0] }}</div>
<h4 class="font-bold mt-3 text-concelo-deep">{{ vendor.name }}</h4>
<p class="caption text-concelo-deep/70">{{ vendor.category }}, {{ vendor.location }}</p>
<p class="caption text-concelo-deep/70">{{ vendor.hours }}</p>
<button @click="open = true" class="btn btn-outline !py-2 text-sm mt-3 min-h-[44px]">View menu</button>
<Modal :open="open" :title="vendor.name + ' menu'" @close="open = false">
<p class="text-sm text-concelo-deep/80 mb-4">{{ vendor.category }}, {{ vendor.location }}. Open {{ vendor.hours }}.</p>
<ul class="space-y-2 text-sm text-concelo-deep">
<li v-for="m in menu" :key="m.name" class="flex justify-between gap-3 border-b border-mist/40 pb-2"><span>{{ m.name }}</span><strong>{{ m.price }}</strong></li>
</ul>
<button @click="open = false" class="btn btn-outline mt-5 w-full">Close menu</button>
</Modal>
</article>
</template>
<script setup>
import { computed, ref } from 'vue'
import Modal from '../ui/Modal.vue'
const props = defineProps({ vendor: Object })
const open = ref(false)
const menu = computed(() => {
const base = { Food: [['Signature main', 'Rp 45.000'], ['Snack plate', 'Rp 28.000']], Drinks: [['Signature drink', 'Rp 25.000'], ['Iced tea', 'Rp 12.000']], Dessert: [['Sundae cup', 'Rp 32.000'], ['Gelato scoop', 'Rp 22.000']] }
return (base[props.vendor.category] ?? base.Food).map(([name, price]) => ({ name, price }))
})
</script>
