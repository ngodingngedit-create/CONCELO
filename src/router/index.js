import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
history: createWebHistory(),
routes: [
{ path: '/', name: 'home', component: () => import('../views/Home.vue') },
 { path: '/events', name: 'events', component: () => import('../views/Events.vue') },
 { path: '/events/concelo-2027', redirect: () => ({ path: '/', query: {} }) },
 { path: '/events/:slug', name: 'event-detail', component: () => import('../views/EventDetail.vue') },
{ path: '/tickets', name: 'tickets', component: () => import('../views/Tickets.vue') },
{ path: '/saved', name: 'saved', component: () => import('../views/Saved.vue') },
{ path: '/my-day', name: 'myday', component: () => import('../views/MyDay.vue') },
{ path: '/transport', name: 'transport', component: () => import('../views/Transport.vue') },
{ path: '/profile', name: 'profile', component: () => import('../views/Profile.vue') },
{ path: '/:pathMatch(.*)*', redirect: '/' }
],
scrollBehavior() { return { top: 0 } }
})