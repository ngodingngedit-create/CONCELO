<template>
<form @submit.prevent="go" class="w-full" role="search">
<div class="flex items-center gap-2 bg-cloud border border-mist rounded-input px-4" :class="compact ? 'h-11' : 'h-12 md:h-14'">
<span aria-hidden="true" class="shrink-0">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C2435C" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
</span>
<label :for="id" class="sr-only">{{ t('eventDetail.searchLabel') }}</label>
<input :id="id" v-model="q" type="search" :placeholder="compact ? t('eventDetail.searchShort') : t('eventDetail.searchLabel') + '...'" class="flex-1 min-w-0 bg-transparent text-[16px] text-concelo-deep placeholder:text-concelo-deep/50 py-2" />
<button v-if="!compact" class="btn btn-outline btn-auto !py-2 my-1.5 shrink-0">{{ t('eventDetail.searchBtn') }}</button>
</div>
</form>
</template>
<script setup>
import { ref, useId } from 'vue'
import { useRouter } from 'vue-router'
import { t } from '../../i18n.js'
defineProps({ compact: Boolean })
const q = ref('')
const router = useRouter()
const id = useId()
const go = () => router.push({ path: '/events', query: q.value ? { q: q.value } : {} })
</script>
