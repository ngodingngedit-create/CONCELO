<template>
<article class="card-promo p-6 text-center max-w-sm mx-auto bg-cloud">
<p class="caption font-medium tracking-[0.12em] text-concelo-deep">MY TICKET</p>
<h3 class="h3 mt-1 text-concelo-deep">Event ticket</h3>
<p class="text-sm text-concelo-deep/80">{{ tier }}</p>
<div class="my-4 bg-cloud border border-dashed border-concelo-deep rounded-card p-4 font-mono text-xs break-all text-concelo-deep">QR:{{ code }}</div>
<p class="caption text-concelo-deep/70">Gate: Main Gate. Scan from this screen.</p>
<div class="flex gap-2 mt-4">
<button @click="walletOpen = true" class="btn btn-outline !py-2 text-sm flex-1 min-h-[44px]">Add to wallet</button>
<button @click="shareOpen = true" class="btn btn-outline !py-2 text-sm flex-1 min-h-[44px]">Share</button>
</div>
<Modal :open="walletOpen" title="Add to wallet" @close="walletOpen = false">
<p class="text-sm text-concelo-deep/80">Wallet passes are coming soon. Your QR code above already works at the Main Gate.</p>
<button @click="walletOpen = false" class="btn btn-outline mt-5 w-full">Close</button>
</Modal>
<Modal :open="shareOpen" title="Share ticket" @close="shareOpen = false">
<p class="text-sm text-concelo-deep/80 mb-3">Share this code with your group: <strong>{{ code }}</strong></p>
<button @click="copy" class="btn btn-primary w-full">{{ copied ? 'Code copied' : 'Copy code' }}</button>
<button @click="shareOpen = false" class="btn btn-outline mt-2 w-full">Close</button>
</Modal>
</article>
</template>
<script setup>
import { ref } from 'vue'
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
