<template>
<div class="container-x section-pad">
<SectionTitle title="Transport and AJAK shuttle" sub="Train, car, ride hailing, or a booked shuttle seat." />
<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
<div v-for="m in modes" :key="m.t" class="bg-cloud border border-mist rounded-card p-5 text-concelo-deep">
<p class="font-bold mt-1">{{ m.t }}</p>
<p class="caption text-concelo-deep/70 mt-1">{{ m.d }}</p>
</div>
</div>
<SectionTitle title="AJAK shuttle" sub="Fixed departures from Jakarta, Bogor, and Depok to the venue." />
<div v-if="loading" class="grid gap-4 max-w-3xl" aria-label="Loading shuttles">
<div v-for="i in 3" :key="i" class="skel h-24"></div>
</div>
<div v-else class="grid gap-4 max-w-3xl">
<ShuttleCard v-for="s in shuttles" :key="s.id" :shuttle="s" />
</div>
</div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import SectionTitle from '../components/ui/SectionTitle.vue'
import ShuttleCard from '../components/event/ShuttleCard.vue'
import shuttles from '../data/shuttles.json'
const loading = ref(true)
onMounted(() => setTimeout(() => { loading.value = false }, 300))
const modes = [
{ t: 'Public transport', d: 'KRL plus TransJakarta to the GBK stop, then a short walk.' },
{ t: 'Private vehicle', d: 'Parking at GBK zones P1 to P4. Arrive before 12:00.' },
{ t: 'Ride hailing', d: 'Drop-off at the Main Gate lobby.' },
{ t: 'AJAK shuttle', d: 'Booked seats with AC and fixed departure times.' }
]
</script>