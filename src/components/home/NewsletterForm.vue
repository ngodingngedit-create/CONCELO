<template>
<div class="card-promo p-6 md:p-8 max-w-2xl bg-cloud">
<h3 class="h3 text-concelo-deep">Get event dates first</h3>
<p class="text-sm text-concelo-deep/80 mt-2">Lineup drops, ticket batches, and shuttle seats. One email per milestone, no spam.</p>
<form v-if="!done" @submit.prevent="submit" class="flex flex-col sm:flex-row gap-3 mt-5">
<div class="flex-1">
<label :for="id" class="sr-only">Email address</label>
<input :id="id" v-model="email" type="email" required placeholder="you@email.com" class="field" />
</div>
<button class="btn btn-secondary btn-auto shrink-0">Notify me</button>
</form>
<p v-if="error" role="alert" class="text-sm font-medium text-concelo-deep mt-3">{{ error }}</p>
<p v-if="done" class="mt-4 font-medium text-concelo-deep">You are on the list. See you at the festival.</p>
</div>
</template>
<script setup>
import { ref, useId } from 'vue'
const email = ref('')
const done = ref(!!localStorage.getItem('concela:newsletter'))
const error = ref('')
const id = useId()
const submit = () => {
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { error.value = 'Enter a valid email address.'; return }
error.value = ''
localStorage.setItem('concela:newsletter', email.value)
done.value = true
}
</script>
