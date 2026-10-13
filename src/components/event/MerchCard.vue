<template>
<article class="bg-cloud rounded-card border border-mist overflow-hidden flex flex-col">
<div class="h-32 flex items-center justify-center bg-cream font-bold text-3xl text-concelo-deep border-b border-mist/40" aria-hidden="true">{{ item.name[0] }}</div>
<div class="p-4 flex flex-col gap-1 flex-1">
<h4 class="font-bold text-sm text-concelo-deep">{{ item.name }}</h4>
<p class="font-bold text-concelo-deep">{{ item.price }}</p>
<button @click="open = true" class="btn btn-outline !py-2 text-sm mt-2 min-h-[44px]">{{ t('eventDetail.viewDetails') }}</button>
<Modal :open="open" :title="item.name" @close="open = false">
<p class="text-sm text-concelo-deep/80">{{ t('eventDetail.merchDesc', { price: item.price }) }}</p>
<p class="text-sm text-concelo-deep/80 mt-2">{{ t('eventDetail.merchStock') }}</p>
<button @click="open = false" class="btn btn-outline mt-5 w-full">{{ t('common.close') }}</button>
</Modal>
</div>
</article>
</template>
<script setup>
import { ref } from 'vue'
import { t } from '../../i18n.js'
import Modal from '../ui/Modal.vue'
defineProps({ item: Object })
const open = ref(false)
</script>
