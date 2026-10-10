<template>
<nav class="md:hidden fixed bottom-0 inset-x-0 z-40 bg-cloud border-t border-concelo-deep text-concelo-deep bottom-safe" aria-label="Mobile">
<div class="grid grid-cols-5 text-[11px] font-medium">
<router-link to="/" class="py-2.5 min-h-[56px] flex flex-col items-center justify-center gap-0.5" active-class="font-bold">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/></svg>
<span>Home</span>
</router-link>
<router-link to="/events" class="py-2.5 min-h-[56px] flex flex-col items-center justify-center gap-0.5" active-class="font-bold">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 5v14M17 5v14"/></svg>
<span>Events</span>
</router-link>
<router-link to="/tickets" class="py-2.5 min-h-[56px] flex flex-col items-center justify-center gap-0.5" active-class="font-bold">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.5a2.5 2.5 0 0 0 0 5V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.5a2.5 2.5 0 0 0 0-5V8z"/></svg>
<span>Tickets</span>
</router-link>
<router-link to="/saved" class="py-2.5 min-h-[56px] flex flex-col items-center justify-center gap-0.5" active-class="font-bold">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"/></svg>
<span>Saved</span>
</router-link>
<router-link to="/profile" class="py-2.5 min-h-[56px] flex flex-col items-center justify-center gap-0.5" active-class="font-bold">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6"/></svg>
<span>Profile</span>
</router-link>
</div>
</nav>
</template>
