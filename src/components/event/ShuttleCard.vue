<template>
<article class="bg-cloud rounded-card border border-mist p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-3">
<div class="w-11 h-11 rounded-card bg-concelo-green text-onyx border border-concelo-deep flex items-center justify-center shrink-0 font-bold" aria-hidden="true">A</div>
<div class="flex-1 min-w-0"><h4 class="font-bold text-concelo-deep">{{ shuttle.route }}</h4><p class="caption text-concelo-deep/70">Departs {{ shuttle.time }}, {{ shuttle.price }}</p></div>
<button @click="open = true" class="btn btn-outline btn-auto !py-2 text-sm min-h-[44px]">{{ t('eventDetail.bookShuttle') }}</button>
<Modal :open="open" :title="t('eventDetail.bookTitle') + shuttle.route" @close="open = false">
<p class="text-sm text-concelo-deep/80 mb-4">{{ t('eventDetail.shuttleDesc', { time: shuttle.time, price: shuttle.price }) }}</p>
<label class="block text-sm font-medium mb-1 text-concelo-deep" :for="id">{{ t('eventDetail.seats') }}</label>
<select :id="id" v-model="seats" class="field">
<option v-for="n in 4" :key="n" :value="n">{{ n }} {{ t('eventDetail.seatUnit') }}</option>
</select>
<p v-if="done" role="status" class="text-sm font-medium text-concelo-deep mt-3 bg-cream border border-concelo-deep rounded-card p-3">{{ t('eventDetail.booked', { n: seats + t('eventDetail.seatUnit'), route: shuttle.route }) }}</p>
<div class="flex gap-2 mt-4">
<button v-if="!done" @click="done = true" class="btn btn-primary flex-1">{{ t('eventDetail.confirm') }}</button>
<button @click="open = false; done = false" class="btn btn-outline flex-1">{{ t('common.close') }}</button>
</div>
</Modal>
</article>
</template>
<script setup>
import { ref, useId } from 'vue'
import { t } from '../../i18n.js'
import Modal from '../ui/Modal.vue'
defineProps({ shuttle: Object })
const open = ref(false)
const done = ref(false)
const seats = ref(1)
const id = useId()
</script>
