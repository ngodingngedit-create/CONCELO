<template>
<article class="card-promo p-6 text-center max-w-sm mx-auto bg-cloud">
<p class="caption font-medium tracking-[0.12em] text-concelo-deep">{{ t('eventDetail.myTicket') }}</p>
<h3 class="h3 mt-1 text-concelo-deep">{{ t('eventDetail.eventTicket') }}</h3>
<p class="text-sm text-concelo-deep/80">{{ tier }}</p>
<div class="my-4 bg-cloud border border-dashed border-concelo-deep rounded-card p-4 font-mono text-xs break-all text-concelo-deep">QR:{{ code }}</div>
<p class="caption text-concelo-deep/70">{{ t('eventDetail.gateNote') }}</p>
<div class="flex gap-2 mt-4">
<button @click="walletOpen = true" class="btn btn-outline !py-2 text-sm flex-1 min-h-[44px]">{{ t('eventDetail.addWallet') }}</button>
<button @click="shareOpen = true" class="btn btn-outline !py-2 text-sm flex-1 min-h-[44px]">{{ t('eventDetail.share') }}</button>
</div>
<Modal :open="walletOpen" :title="t('eventDetail.walletTitle')" @close="walletOpen = false">
<p class="text-sm text-concelo-deep/80">{{ t('eventDetail.walletDesc') }}</p>
<button @click="walletOpen = false" class="btn btn-outline mt-5 w-full">{{ t('common.close') }}</button>
</Modal>
<Modal :open="shareOpen" :title="t('eventDetail.shareTitle')" @close="shareOpen = false">
<p class="text-sm text-concelo-deep/80 mb-3">{{ t('eventDetail.shareDesc') }}<strong>{{ code }}</strong></p>
<button @click="copy" class="btn btn-primary w-full">{{ copied ? t('eventDetail.codeCopied') : t('eventDetail.copyCode') }}</button>
<button @click="shareOpen = false" class="btn btn-outline mt-2 w-full">{{ t('common.close') }}</button>
</Modal>
</article>
</template>
<script setup>
import { ref } from 'vue'
import { t } from '../../i18n.js'
import Modal from '../ui/Modal.vue'
const props = defineProps({ tier: { type: String, default: 'VIP' }, code: { type: String, default: 'TIX-2027-VIP-001' } })
const walletOpen = ref(false)
const shareOpen = ref(false)
const copied = ref(false)
const copy = async () => {
try { await navigator.clipboard.writeText(props.code) } catch { /* clipboard unavailable, still confirm */ }
copied.value = true
}
</script>
