<template>
<article class="rounded-card border p-5 md:p-6 flex flex-col gap-2" :class="featured ? 'bg-concelo-deep text-white border-concelo-deep' : 'bg-cloud border-mist text-concelo-deep'">
<p class="caption font-medium tracking-[0.12em]" :class="featured ? 'text-concelo-yellow' : 'text-concelo-deep'">{{ ticket.tag }}</p>
<h3 class="h3">{{ ticket.name }}</h3>
<p class="text-2xl font-bold">{{ ticket.price }}</p>
<ul class="text-sm space-y-1" :class="featured ? 'text-white/90' : 'text-concelo-deep/80'">
<li v-for="b in ticket.benefits" :key="b">{{ b }}</li>
</ul>
<button @click="$emit('buy', ticket)" class="btn mt-3 min-h-[44px]" :class="featured ? 'btn-secondary' : 'btn-outline'">Buy {{ ticket.name }}</button>
</article>
</template>
<script setup>
defineProps({ ticket: Object, featured: Boolean })
defineEmits(['buy'])
</script>
