import { reactive, watch } from 'vue'

const load = (k, fb) => { try { return JSON.parse(localStorage.getItem(k)) ?? fb } catch { return fb } }
export const store = reactive({ saved: load('concela:saved', []), myDay: load('concela:myday', []), tickets: load('concela:tickets', []) })
watch(() => store.saved, v => localStorage.setItem('concela:saved', JSON.stringify(v)), { deep: true })
watch(() => store.myDay, v => localStorage.setItem('concela:myday', JSON.stringify(v)), { deep: true })
export const toggleSave = id => { const i = store.saved.indexOf(id); i >= 0 ? store.saved.splice(i, 1) : store.saved.push(id) }
export const isSaved = id => store.saved.includes(id)
