import { reactive } from 'vue'

export const LOCALES = [
  { code: 'id', label: 'Indonesia', short: 'ID' },
  { code: 'en', label: 'English', short: 'EN' }
]

const getInitial = () => {
  try {
    const s = localStorage.getItem('concela:locale')
    if (s === 'id' || s === 'en') return s
  } catch {}
  return (navigator.language || 'id').toLowerCase().startsWith('en') ? 'en' : 'id'
}

export const i18n = reactive({ locale: getInitial() })

export function setLocale(code) {
  if (code !== 'id' && code !== 'en') return
  i18n.locale = code
  try { localStorage.setItem('concela:locale', code) } catch {}
  document.documentElement.lang = code
}

try { document.documentElement.lang = i18n.locale } catch {}

const messages = {
id: {
nav: { home: 'Home', tiket: 'Tiket', lineup: 'Line Up', kontak: 'Kontak', buy: 'BELI TIKET', menu: 'Menu', closeMenu: 'Tutup menu', openMenu: 'Menu', language: 'Bahasa' },
bottom: { home: 'Home', events: 'Events', tickets: 'Tiket', saved: 'Disimpan', profile: 'Profil' },
footer: { promoted: 'Promoted By', rights: '2026 concelo. © 2026 KARYA SEMESTA RAYA - All Right Reserved.' },
home: {
tba: 'SEGERA DIUMUMKAN',
ticketsTitle: 'PILIH TIPE TIKETMU',
soldOut: 'SUDAH HABIS',
available: 'MASIH ADA',
buyAria: 'Beli tiket ',
ticketAlt: 'Tiket ',
lineupTitle: 'LINE UP ARTIST',
venueTitle: 'DENAH VENUE',
venueAlt: 'Denah venue: stage, komunitas area, kuliner, toilet, dan parkir',
merchTitle: 'MERCH EXCLUSIVE',
merchSold: 'Sudah habis',
frontView: ' tampak depan',
backView: ' tampak belakang',
collabTitle: 'KESERUAN KERJA BARENG',
collabVideo: 'Keseruan kerja bareng concelo',
aboutTitle: 'TENTANG CONCELO',
readMore: 'Baca selengkapnya',
closeBtn: 'Tutup',
tagline: 'CONCELO adalah tempat musik, orang, brand, dan momen seru bersatu.',
contactTape: 'KAMI JAWAB SEMUA PERTANYAANMU ✦ TANYA DULU AJA ✦ KAMI JAWAB SEMUA PERTANYAANMU ✦ TANYA DULU AJA ✦',
contactTitle: 'Kami jawab semua pertanyaanmu',
comingSoon: 'COMING SOON! COMING SOON! COMING SOON! COMING SOON! COMING SOON! COMING SOON! COMING SOON! COMING SOON!  ',
aboutBody: [
'CONCELO adalah sebuah festival musik dan lifestyle yang dirancang untuk menghadirkan pengalaman yang ringan, menyenangkan, dan penuh warna melalui perpaduan musik, entertainment, food & beverage, creative activities, community, dan playful experience.',
'Terinspirasi dari karakter Es Krim yang identik dengan rasa senang, nostalgia, kesegaran, dan momen untuk dinikmati bersama, CONCELO membawa spirit tersebut ke dalam sebuah festival yang dapat dinikmati oleh berbagai kalangan, khususnya generasi muda.',
'CONCELO tidak hanya menjadikan musik sebagai pertunjukan utama, tetapi menciptakan sebuah destination di mana pengunjung dapat datang untuk mendengarkan musik, bertemu teman, menikmati makanan dan es krim, mengeksplorasi brand, bermain, membuat konten, hingga menemukan pengalaman baru selama berada di festival.',
'Setiap elemen dalam CONCELO dirancang untuk saling terhubung sehingga pengunjung tidak hanya datang, menonton, lalu pulang, tetapi mendapatkan full-day experience yang terasa personal, menyenangkan, dan mudah diingat.'
]
},
events: {
title: 'Acara mendatang', sub: 'Konser, festival, dan acara lifestyle.',
results: 'Hasil untuk "{q}"',
filterCat: 'Filter acara berdasarkan kategori',
filterCity: 'Filter acara berdasarkan kota',
all: 'Semua', concert: 'Konser', festival: 'Festival', lifestyle: 'Lifestyle',
allCities: 'Semua kota',
loading: 'Memuat acara',
emptyTitle: 'Tidak ada acara ditemukan', emptySub: 'Coba kata kunci atau filter lain.', emptyCta: 'Lihat semua acara'
},
eventDetail: {
notFoundTitle: 'Acara tidak ditemukan', notFoundSub: 'Tautan ini sepertinya rusak. Kembali ke daftar acara.', notFoundCta: 'Lihat acara',
doors: 'PINTU DIBUKA DALAM',
copyLink: 'Salin tautan acara', copied: 'Tautan disalin',
checkPrices: 'Cek harga tiket', checkPrices2: 'Cek harga',
sections: 'Bagian acara',
tabs: ['Ringkasan', 'Lineup', 'Jadwal', 'Peta', 'Aktivitas', 'Kuliner', 'Merch', 'Transport', 'FAQ'],
at: 'DI', weekendAt: ' akhir pekan di ', capacityUnit: ' kapasitas.',
date: 'Tanggal', venue: 'Venue', stages: 'Panggung', capacity: 'Kapasitas',
aboutPrefix: 'Tentang ',
aboutFallback: 'Cek tab lineup, jadwal, peta, kuliner, dan transport untuk rencana seharian penuh.',
presented: 'Didukung oleh',
sponsorTitle: 'Jadi sponsor atau partner', sponsorSub: 'Slot booth, sampling, dan komunitas untuk 2027.',
contactUs: 'Hubungi kami',
searchArtists: 'Cari artis', searchPh: 'Cari artis...',
filterDay: 'Filter lineup per hari', day1: 'Hari 1', day2: 'Hari 2',
loadingArtists: 'Memuat artis', noArtists: 'Tidak ada artis yang cocok dengan "{q}". Coba nama lain.',
loadingSchedule: 'Memuat jadwal', loadingActivities: 'Memuat aktivitas', loadingVendors: 'Memuat vendor',
filterVendors: 'Filter vendor berdasarkan kategori', noVendors: 'Belum ada vendor di kategori ini.',
filterMerch: 'Filter merch berdasarkan tipe',
openTransport: 'Buka panduan transport lengkap',
stuck: 'Masih bingung?', addDay: 'Tambah ke Hariku', saveEvent: 'Simpan acara', savedBtn: 'Tersimpan',
from: 'MULAI', saveAria: 'Simpan acara ', removeAria: 'Hapus acara ',
searchLabel: 'Cari acara, artis, venue', searchShort: 'Cari...', searchBtn: 'Cari',
openGuide: 'Buka panduan acara', guideSave: 'Simpan ', guideRemove: 'Hapus ',
viewDetails: 'Lihat detail', viewMenu: 'Lihat menu', closeMenuBtn: 'Tutup menu', closeBtn: 'Tutup',
menuSuffix: ' menu', bookShuttle: 'Pesan shuttle', bookTitle: 'Pesan ',
shuttleDesc: 'Shuttle AJAK, {time}, {price} per kursi. Kursi ditentukan saat pemesanan.',
seats: 'Kursi', seatUnit: ' kursi', booked: 'Memesan {n} kursi untuk {route}. Tunjukkan layar ini saat penjemputan.',
confirm: 'Konfirmasi pemesanan',
merchDesc: 'Merchandise resmi acara. Harga {price}. Ambil di Booth Merch dekat Main Gate selama jam acara.',
merchStock: 'Ukuran dan stok dikonfirmasi di booth. Checkout online segera hadir.',
closeDetails: 'Tutup detail', pickZone: 'Pilih kategori, lalu pilih zona untuk jam dan detailnya.',
mapCats: ['Panggung', 'Makanan & minuman', 'Toilet', 'Gerbang', 'Merch', 'Komunitas', 'Foto', 'Shuttle'],
addWallet: 'Tambah ke wallet', share: 'Bagikan', walletTitle: 'Tambah ke wallet',
walletDesc: 'Wallet pass segera hadir. Kode QR di atas sudah bisa dipakai di Main Gate.',
shareTitle: 'Bagikan tiket', shareDesc: 'Bagikan kode ini ke grupmu: ', copyCode: 'Salin kode', codeCopied: 'Kode disalin',
myTicket: 'TIKET SAYA', eventTicket: 'Tiket acara', gateNote: 'Gerbang: Main Gate. Pindai dari layar ini.',
buyPrefix: 'Beli ',
weekend: ' akhir pekan di ',
days: 'HARI', hrs: 'JAM', min: 'MNT', sec: 'DTK'
},
ticketsPage: {
title: 'Tiket acara', sub: 'Tiga tipe tiket. VIP termasuk deck dan lounge, 2-Day Pass berlaku dua hari.',
loading: 'Memuat tiket',
note: 'VIP disorot karena bundling dua hari plus akses lounge. Reguler pas untuk satu hari, 2-Day Pass pas untuk dua hari tanpa fasilitas lounge.',
myTicket: 'Tiket saya', myTicketSub: 'Tunjukkan kode QR ini di Main Gate.',
plans: [
{ name: 'Reguler', price: 'Rp 350.000', tag: 'SATU HARI', benefits: ['Akses 1 hari', 'Main Stage', 'Area kuliner dan aktivitas'] },
{ name: 'VIP', price: 'Rp 750.000', tag: 'TERBAIK UNTUK DUA HARI', benefits: ['Akses 2 hari', 'Deck dan lounge VIP', 'Antre shuttle prioritas', 'Merch eksklusif'] },
{ name: '2-Day Pass', price: 'Rp 550.000', tag: 'DUA HARI', benefits: ['Akses 2 hari', 'Main Stage', 'Aktivitas komunitas'] }
]
},
savedPage: { title: 'Acara disimpan', sub: 'Daftar pendekmu ada di sini.', emptyTitle: 'Belum ada apa-apa', emptySub: 'Ketuk hati di acara mana pun untuk menyimpannya di sini.', emptyCta: 'Lihat acara' },
myDayPage: { title: 'Hariku', sub: 'Artis dan aktivitas yang kamu simpan dalam satu timeline.', remove: 'Hapus', emptyTitle: 'Hari masih kosong', emptySub: 'Simpan artis dan aktivitas dari panduan acara mana pun.', emptyCta: 'Lihat acara', noTime: 'Belum ada jam pasti', addedFrom: 'Ditambahkan dari halaman acara' },
transportPage: {
title: 'Transport dan shuttle AJAK', sub: 'Kereta, mobil, ojek online, atau kursi shuttle yang dipesan.',
shuttleTitle: 'Shuttle AJAK', shuttleSub: 'Keberangkatan terjadwal dari Jakarta, Bogor, dan Depok ke venue.',
loading: 'Memuat shuttle',
modes: [
{ t: 'Transport umum', d: 'KRL plus TransJakarta ke halte GBK, lalu jalan kaki.' },
{ t: 'Kendaraan pribadi', d: 'Parkir di zona GBK P1 sampai P4. Datang sebelum jam 12:00.' },
{ t: 'Ojek online', d: 'Titik turun di lobi Main Gate.' },
{ t: 'Shuttle AJAK', d: 'Kursi terpesan ber-AC dengan jam berangkat pasti.' }
]
},
profilePage: {
title: 'Profil', sub: 'Tiket, acara tersimpan, dan rencana harian di perangkat ini.',
name: 'Penonton Konser', stats: '{t} tiket, {s} disimpan, {d} rencana',
notifTitle: 'Notifikasi', ticketTitle: 'Tiket saya',
emptyTickets: 'Belum ada tiket. Harga mulai dari Rp 99.000.',
checkPrices: 'Cek harga tiket',
notifs: ['Gerbang buka jam 11:00 di hari acara. Cek panduan acaramu untuk detailnya.', 'Set headliner biasanya mulai jam 20:00 di Main Stage.', 'Jam penjemputan shuttle AJAK ada di bawah Transport.', 'Batch tiket baru sedang dijual sekarang.']
},
common: { close: 'Tutup', browseEvents: 'Lihat acara' }
},
en: {
nav: { home: 'Home', tiket: 'Tickets', lineup: 'Lineup', kontak: 'Contact', buy: 'BUY TICKETS', menu: 'Menu', closeMenu: 'Close menu', openMenu: 'Menu', language: 'Language' },
bottom: { home: 'Home', events: 'Events', tickets: 'Tickets', saved: 'Saved', profile: 'Profile' },
footer: { promoted: 'Promoted By', rights: '2026 concelo. © 2026 KARYA SEMESTA RAYA - All Rights Reserved.' },
home: {
tba: 'TO BE ANNOUNCED',
ticketsTitle: 'CHOOSE YOUR TICKET TYPE',
soldOut: 'SOLD OUT',
available: 'AVAILABLE',
buyAria: 'Buy ',
ticketAlt: '',
lineupTitle: 'ARTIST LINEUP',
venueTitle: 'VENUE MAP',
venueAlt: 'Venue map: stage, community area, food, toilets, and parking',
merchTitle: 'EXCLUSIVE MERCH',
merchSold: 'Sold out',
frontView: ' front view',
backView: ' back view',
collabTitle: 'FUN TIMES TOGETHER',
collabVideo: 'Fun times with concelo',
aboutTitle: 'ABOUT CONCELO',
readMore: 'Read more',
closeBtn: 'Close',
tagline: 'CONCELO is where music, people, brands and good moments come together.',
contactTape: 'WE ANSWER ALL YOUR QUESTIONS ✦ JUST ASK FIRST ✦ WE ANSWER ALL YOUR QUESTIONS ✦ JUST ASK FIRST ✦',
contactTitle: 'We answer all your questions',
comingSoon: 'COMING SOON! COMING SOON! COMING SOON! COMING SOON! COMING SOON! COMING SOON! COMING SOON! COMING SOON!  ',
aboutBody: [
'CONCELO is a music and lifestyle festival designed to deliver a light, fun, and colorful experience through a blend of music, entertainment, food & beverage, creative activities, community, and playful experiences.',
'Inspired by the Ice Cream character \u2014 synonymous with joy, nostalgia, freshness, and moments to enjoy together \u2014 CONCELO brings that spirit into a festival everyone can enjoy, especially the younger generation.',
'CONCELO goes beyond music as the main show, creating a destination where visitors can listen to music, meet friends, enjoy food and ice cream, explore brands, play, create content, and discover new experiences throughout the festival.',
'Every element in CONCELO is designed to connect, so visitors don\u2019t just come, watch, and go home \u2014 they get a full-day experience that feels personal, fun, and memorable.'
]
},
events: {
title: 'Upcoming events', sub: 'Concerts, festivals, and lifestyle events.',
results: 'Results for "{q}"',
filterCat: 'Filter events by category',
filterCity: 'Filter events by city',
all: 'All', concert: 'Concert', festival: 'Festival', lifestyle: 'Lifestyle',
allCities: 'All cities',
loading: 'Loading events',
emptyTitle: 'No events found', emptySub: 'Try another keyword or filter.', emptyCta: 'Browse all events'
},
eventDetail: {
notFoundTitle: 'Event not found', notFoundSub: 'That link looks broken. Back to the event list.', notFoundCta: 'Browse events',
doors: 'DOORS OPEN IN',
copyLink: 'Copy event link', copied: 'Link copied',
checkPrices: 'Check ticket prices', checkPrices2: 'Check prices',
sections: 'Event sections',
tabs: ['Overview', 'Lineup', 'Schedule', 'Map', 'Activities', 'Food', 'Merch', 'Transport', 'FAQ'],
at: ' AT ', weekendAt: ' weekend at ', capacityUnit: ' capacity.',
date: 'Date', venue: 'Venue', stages: 'Stages', capacity: 'Capacity',
aboutPrefix: 'About ',
aboutFallback: 'Check lineup, schedule, map, food, and transport tabs for the full day plan.',
presented: 'Presented with',
sponsorTitle: 'Become a sponsor or partner', sponsorSub: 'Booth, sampling, and community slots for 2027.',
contactUs: 'Contact us',
searchArtists: 'Search artists', searchPh: 'Search artists...',
filterDay: 'Filter lineup by day', day1: 'Day 1', day2: 'Day 2',
loadingArtists: 'Loading artists', noArtists: 'No artists match "{q}". Try another name.',
loadingSchedule: 'Loading schedule', loadingActivities: 'Loading activities', loadingVendors: 'Loading vendors',
filterVendors: 'Filter vendors by category', noVendors: 'No vendors in this category yet.',
filterMerch: 'Filter merch by type',
openTransport: 'Open full transport guide',
stuck: 'Still stuck?', addDay: 'Add to My Day', saveEvent: 'Save event', savedBtn: 'Saved',
from: 'FROM', saveAria: 'Save event ', removeAria: 'Remove event ',
searchLabel: 'Search events, artists, venues', searchShort: 'Search...', searchBtn: 'Search',
openGuide: 'Open event guide', guideSave: 'Save ', guideRemove: 'Remove ',
viewDetails: 'View details', viewMenu: 'View menu', closeMenuBtn: 'Close menu', closeBtn: 'Close',
menuSuffix: ' menu', bookShuttle: 'Book shuttle', bookTitle: 'Book ',
shuttleDesc: 'AJAK shuttle, {time}, {price} per seat. Seats are assigned at booking.',
seats: 'Seats', seatUnit: ' seat', booked: 'Booked {n} for {route}. Show this screen at pickup.',
confirm: 'Confirm booking',
merchDesc: 'Official event merchandise. Price {price}. Pickup at the Merch Booth near the Main Gate during event hours.',
merchStock: 'Sizes and stock are confirmed at the booth. Online checkout is coming soon.',
closeDetails: 'Close details', pickZone: 'Pick a category, then pick a zone for hours and details.',
mapCats: ['Stage', 'Food and drink', 'Toilet', 'Gate', 'Merch', 'Community', 'Photo', 'Shuttle'],
addWallet: 'Add to wallet', share: 'Share', walletTitle: 'Add to wallet',
walletDesc: 'Wallet passes are coming soon. Your QR code above already works at the Main Gate.',
shareTitle: 'Share ticket', shareDesc: 'Share this code with your group: ', copyCode: 'Copy code', codeCopied: 'Code copied',
myTicket: 'MY TICKET', eventTicket: 'Event ticket', gateNote: 'Gate: Main Gate. Scan from this screen.',
buyPrefix: 'Buy ',
weekend: ' weekend at ',
days: 'DAYS', hrs: 'HRS', min: 'MIN', sec: 'SEC'
},
ticketsPage: {
title: 'Event tickets', sub: 'Three ticket types. VIP includes the deck and lounge, 2-Day Pass covers both days.',
loading: 'Loading tickets',
note: 'VIP is highlighted because it bundles both days plus lounge access. Regular fits one day, 2-Day Pass fits both days without lounge perks.',
myTicket: 'My ticket', myTicketSub: 'Show this QR code at the Main Gate.',
plans: [
{ name: 'Regular', price: 'Rp 350.000', tag: 'ONE DAY', benefits: ['1-day access', 'Main Stage', 'Food and activity areas'] },
{ name: 'VIP', price: 'Rp 750.000', tag: 'BEST FOR BOTH DAYS', benefits: ['2-day access', 'VIP deck and lounge', 'Priority shuttle queue', 'Exclusive merch'] },
{ name: '2-Day Pass', price: 'Rp 550.000', tag: 'BOTH DAYS', benefits: ['2-day access', 'Main Stage', 'Community activities'] }
]
},
savedPage: { title: 'Saved events', sub: 'Your shortlist lives here.', emptyTitle: 'Nothing here yet', emptySub: 'Tap the heart on any event to keep it here.', emptyCta: 'Browse events' },
myDayPage: { title: 'My Day', sub: 'Artists and activities you saved into one timeline.', remove: 'Remove', emptyTitle: 'Day is empty', emptySub: 'Save artists and activities from any event guide.', emptyCta: 'Browse events', noTime: 'No fixed time', addedFrom: 'Added from the event page' },
transportPage: {
title: 'Transport and AJAK shuttle', sub: 'Train, car, ride hailing, or a booked shuttle seat.',
shuttleTitle: 'AJAK shuttle', shuttleSub: 'Fixed departures from Jakarta, Bogor, and Depok to the venue.',
loading: 'Loading shuttles',
modes: [
{ t: 'Public transport', d: 'KRL plus TransJakarta to the GBK stop, then a short walk.' },
{ t: 'Private vehicle', d: 'Parking at GBK zones P1 to P4. Arrive before 12:00.' },
{ t: 'Ride hailing', d: 'Drop-off at the Main Gate lobby.' },
{ t: 'AJAK shuttle', d: 'Booked seats with AC and fixed departure times.' }
]
},
profilePage: {
title: 'Profile', sub: 'Tickets, saved events, and day plans on this device.',
name: 'Concertgoer', stats: '{t} tickets, {s} saved, {d} plans',
notifTitle: 'Notifications', ticketTitle: 'My tickets',
emptyTickets: 'No tickets yet. Prices start from Rp 99.000.',
checkPrices: 'Check ticket prices',
notifs: ['Gates open 11:00 on event day. Check your event guide for details.', 'Headliner sets usually start 20:00 on the Main Stage.', 'AJAK shuttle pickup times are listed under Transport.', 'New ticket batches are on sale now.']
},
common: { close: 'Close', browseEvents: 'Browse events' }
}
}

function lookup(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj)
}

export function t(path, vars) {
  const loc = i18n.locale
  let val = lookup(messages[loc], path)
  if (val === undefined) val = lookup(messages[loc === 'id' ? 'en' : 'id'], path)
  if (val === undefined) return path
  if (typeof val === 'string' && vars) {
    return Object.entries(vars).reduce((s, [k, v]) => s.replaceAll('{' + k + '}', String(v)), val)
  }
  return val
}
