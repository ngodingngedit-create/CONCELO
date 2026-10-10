/** @type {import('tailwindcss').Config} */
export default {
content: ['./index.html', './src/**/*.{vue,js}'],
theme: {
extend: {
colors: {
concelo: { pink: '#F9728B', deep: '#C2435C', yellow: '#FFDE59', green: '#96B63A', orange: '#ef771f' },
cloud: '#ffffff',
cream: '#FFF9E8',
mist: '#84849C',
onyx: '#000000'
},
fontFamily: {
sans: ['"Space Grotesk"', 'DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
wordmark: ['Caveat', 'Pacifico', 'cursive']
},
borderRadius: { card: '8px', pill: '9999px', input: '4px', btn: '6px' }
}
},
plugins: []
}
