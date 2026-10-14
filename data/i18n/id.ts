import { site } from '@/data/site'

import type { Dictionary } from './en'

// Bahasa Indonesia. Draft copy, to be reviewed before release. Voice: "Anda", professional and direct.
// The brand line "Build something different" stays English by decision.
export const id: Dictionary = {
  meta: {
    home: {
      title: 'Montara Project - Build Something Different',
      description:
        'Montara Project mengerjakan pengembangan web full-stack, mulai dari backend, frontend, hingga DevOps, serta aplikasi desktop lintas platform dengan Tauri.',
    },
    services: {
      title: 'Layanan | Montara Project',
      description:
        'Pengembangan backend, mobile & frontend, DevOps & cloud, serta aplikasi desktop lintas platform dengan Tauri: cakupan tiap layanan dan teknologi yang kami gunakan.',
    },
    projects: {
      title: 'Proyek | Montara Project',
      description:
        'Pilihan produk dan sistem yang telah dirancang, dibangun, dan dirilis oleh Montara Project.',
    },
    about: {
      title: 'Tentang | Montara Project',
      description:
        'Siapa kami dan bagaimana kami bekerja: perusahaan software yang mengerjakan proyek backend, mobile & frontend, DevOps, dan aplikasi desktop Tauri.',
    },
    contact: {
      title: 'Kontak | Montara Project',
      description:
        'Ceritakan proyek Anda. Kirim email ke Montara Project dan kami akan membalas dalam 48 jam pada hari kerja.',
    },
    terms: {
      title: 'Ketentuan Penggunaan | Montara Project',
      description:
        'Ketentuan penggunaan situs Montara Project, termasuk penggunaan yang diperbolehkan, kekayaan intelektual, dan perjanjian proyek klien.',
    },
    privacy: {
      title: 'Kebijakan Privasi | Montara Project',
      description:
        'Cara situs Montara Project menangani informasi, meliputi pertanyaan melalui situs, hosting, analitik, penyedia layanan, dan permintaan terkait privasi.',
    },
  },

  nav: {
    links: {
      home: 'Beranda',
      services: 'Layanan',
      projects: 'Proyek',
      about: 'Tentang',
      contact: 'Kontak',
    },
    mainLabel: 'Utama',
    mobileLabel: 'Menu seluler',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
    skipToContent: 'Langsung ke konten',
    languageLabel: 'Bahasa',
    startProject: 'Mulai proyek',
  },

  common: {
    startProject: 'Mulai proyek',
    viewWork: 'Lihat karya kami',
    contactUs: 'Hubungi kami',
    viewAllProjects: 'Lihat semua proyek',
    learnMore: 'Selengkapnya',
    comingSoon: 'Segera hadir',
    opensInNewTab: '(buka di tab baru)',
  },

  hero: {
    available: 'Menerima proyek baru',
    titleLead: 'Build something',
    titleEmphasis: 'different',
    titleTrail: '',
    lead: 'Montara Project merancang dan membangun produk web yang andal secara menyeluruh, dari backend, frontend, hingga DevOps. Dari ide sampai production, kami merilis software yang siap berkembang.',
    stats: {
      projects: 'Proyek dirilis',
      services: 'Bidang layanan',
      response: 'Waktu respons',
    },
    frameAlt: 'Dashboard gateway AI Tera Router buatan Montara Project',
    badgeTitle: 'Pengerjaan end-to-end',
    badgeBody: 'Backend · Frontend · DevOps',
  },

  home: {
    services: {
      tag: 'Layanan',
      title: 'Apa yang kami kerjakan',
      description:
        'Kami mengerjakan proyek di seluruh lapisan stack, mulai dari API dan antarmuka hingga infrastruktur yang menjalankannya.',
    },
    projects: {
      tag: 'Karya pilihan',
      title: 'Proyek unggulan',
      description: 'Sekilas produk dan sistem yang telah kami bantu wujudkan.',
    },
    tech: {
      tag: 'Teknologi',
      title: 'Teknologi yang kami gunakan',
      description:
        'Kami memilih alat yang tepat untuk setiap kebutuhan dan terus mengikuti perkembangan ekosistem web modern.',
    },
    process: {
      tag: 'Proses',
      title: 'Cara kami bekerja',
      description:
        'Proses yang jelas dan kolaboratif agar proyek Anda tetap terarah dari kickoff hingga peluncuran.',
    },
    cta: {
      titleLead: 'Mari wujudkan',
      titleTrail: 'proyek Anda berikutnya',
      body: 'Punya rencana proyek? Ceritakan kepada kami, dan kami akan menjelaskan bagaimana kami bisa membantu.',
    },
  },

  process: [
    {
      title: 'Pahami',
      description:
        'Kami menggali tujuan, batasan, dan pengguna Anda untuk menentukan cakupan yang tepat.',
    },
    {
      title: 'Rancang',
      description:
        'Kami merencanakan arsitektur dan pengalaman pengguna sebelum menulis satu baris kode pun.',
    },
    {
      title: 'Bangun',
      description:
        'Kami merilis dalam tahapan kecil yang mudah ditinjau, dengan continuous integration.',
    },
    {
      title: 'Serahkan',
      description:
        'Kami melakukan deploy, memantau, lalu menyerahkan proyek beserta dokumentasi dan dukungan.',
    },
  ],

  servicesPage: {
    tag: 'Layanan',
    title: 'Apa yang kami kerjakan',
    description:
      'Kami mengerjakan proyek backend, frontend, dan DevOps, serta aplikasi desktop lintas platform dengan Tauri.',
    included: 'Yang termasuk',
    technologies: 'Teknologi',
  },

  services: {
    backend: {
      title: 'Pengembangan Backend',
      tagline: 'API & layanan yang tangguh',
      description:
        'Kami merancang dan membangun sistem server-side yang andal, dari API REST dan GraphQL hingga background job dan data pipeline, yang tumbuh bersama produk Anda.',
      deliverables: [
        'Desain & pengembangan API',
        'Pemodelan & optimasi database',
        'Autentikasi & otorisasi',
        'Integrasi pihak ketiga',
        'Microservices & sistem event-driven',
      ],
    },
    frontend: {
      title: 'Pengembangan Mobile & Frontend',
      tagline: 'Antarmuka cepat dan rapi di web dan mobile',
      description:
        'Kami membuat aplikasi web dan mobile yang responsif dan aksesibel, dengan fokus pada performa dan developer experience, untuk mengubah ide menjadi produk yang intuitif.',
      deliverables: [
        'Pengembangan aplikasi web',
        'Pengembangan aplikasi mobile untuk iOS & Android',
        'Implementasi design system & UI',
        'Optimasi performa',
        'UI responsif & aksesibel',
        'Progressive web app',
      ],
    },
    devops: {
      title: 'DevOps & Cloud',
      tagline: 'Rilis dengan percaya diri',
      description:
        'Kami mengotomatiskan alur dari kode hingga production dengan CI/CD, infrastructure as code, dan observability agar tim Anda bisa merilis lebih cepat dan aman.',
      deliverables: [
        'Setup pipeline CI/CD',
        'Infrastruktur cloud & IaC',
        'Containerization & orkestrasi',
        'Monitoring & alerting',
        'Optimasi keamanan & biaya',
      ],
    },
    'desktop-dev': {
      title: 'Pengembangan Desktop',
      tagline: 'Aplikasi desktop lintas platform',
      description:
        'Kami membangun aplikasi desktop yang cepat dan ringan dengan Tauri: performa native dan ukuran binary kecil, dengan teknologi web yang sudah dikuasai tim Anda.',
      deliverables: [
        'Aplikasi lintas platform untuk macOS, Windows, & Linux',
        'Arsitektur & pengembangan aplikasi Tauri',
        'Integrasi sistem native (tray, notifikasi, filesystem)',
        'Paket installer & auto-update',
        'Migrasi dari Electron ke Tauri',
      ],
    },
  },

  projectsPage: {
    tag: 'Portofolio',
    title: 'Proyek kami',
    description: 'Pilihan produk dan sistem yang telah kami rancang, bangun, dan rilis.',
  },

  projects: {
    'tera-router':
      'Gateway self-hosted yang menyatukan banyak penyedia AI di balik satu endpoint. Tera Router menerjemahkan format OpenAI Chat, Anthropic Messages, dan Responses, merutekan permintaan antar-akun dengan fallback, serta menambahkan allowlist per key, guardrail, dan analitik penggunaan, semuanya dalam satu container Go.',
    montarapass:
      'Password manager zero-knowledge dengan enkripsi end-to-end yang bisa Anda host sendiri. Data login dienkripsi di browser sehingga server hanya menyimpan ciphertext dan kunci terbungkus, dilengkapi ekstensi browser, berbagi berbasis peran, dan rotasi kunci saat akses dicabut.',
    wadesk:
      'Aplikasi desktop yang menyatukan WhatsApp Web, Telegram Web, dan Slack dalam satu jendela. Setiap akun berjalan di webview native yang terisolasi, tetap aktif di latar belakang, dan menampilkan jumlah pesan belum dibaca di dock samping.',
    'veil-app':
      'Aplikasi menu bar macOS yang ringan untuk menjaga menu bar tetap rapi: sembunyikan ikon dengan satu klik, pantau penggunaan memori secara langsung, dan aktifkan, tutup, atau paksa tutup aplikasi dari satu popover. Tersedia sebagai universal binary untuk Intel dan Apple Silicon dengan auto-update.',
    cloudrive:
      'Cloud drive terpadu yang menyatukan Google Drive, Dropbox, OneDrive, S3, dan lainnya dalam satu ruang kerja yang bisa dicari, dengan sinkronisasi dua arah secara langsung, indexing zero-copy, dan satu model izin akses.',
    'overlay-browser-source':
      'Browser source gratis untuk OBS & Streamlabs tanpa perlu akun, yang menampilkan QR code donasi animasi (Tako, Saweria, Trakteer, Ko-fi, dan lainnya) dengan tata letak bergilir atau grid, transisi kustom, dan latar transparan.',
    'house-of-wizard':
      'Platform edukasi untuk calon analis data Web3 yang mengajarkan analitik blockchain, analisis data on-chain, dan wawasan Web3.',
    'moneyflow-id':
      'Aplikasi web pengelolaan arus kas untuk mencatat pemasukan, mengategorikan pengeluaran, membuat anggaran, dan memindai struk agar keuangan tetap terkendali.',
    'masb0ymas-com':
      'Situs pribadi dan blog seputar teknologi, pengembangan web, AI, dan Web3, lengkap dengan proyek unggulan dan tutorial.',
  },

  about: {
    tag: 'Tentang',
    title: `Tentang ${site.name}`,
    description:
      'Montara Project adalah perusahaan software yang mengerjakan proyek backend, frontend, dan DevOps, serta aplikasi desktop lintas platform dengan Tauri.',
    missionTitle: 'Misi kami',
    mission:
      'Kami percaya software yang baik lahir dari komunikasi yang jelas, engineering yang solid, dan fokus pada hasil nyata. Misi kami adalah membantu tim dan founder mewujudkan ide mereka dengan teknologi yang andal dan mudah dirawat.',
    teamTitle: 'Tim kami',
    portraitAlt: 'Foto',
  },

  team: {
    fajri: {
      role: 'Founder & Engineer',
      bio: 'Engineer full-stack yang berfokus membangun produk yang andal dan skalabel secara end-to-end.',
    },
    mahdy: {
      role: 'PM & Konsultan AI',
      bio: 'Project manager dan konsultan AI yang mendalami machine learning, LLM, dan perancangan sistem cerdas.',
    },
  },

  contact: {
    tag: 'Kontak',
    title: 'Mari berdiskusi',
    description: 'Ceritakan proyek Anda, dan kami akan segera menghubungi Anda kembali.',
    cardTitle: 'Kirim email langsung',
    cardBody:
      'Ceritakan apa yang sedang Anda bangun, jadwal Anda, dan seperti apa hasil yang Anda harapkan. Kami akan membalas dengan cara kami bisa membantu.',
    responseTime: 'Waktu respons: dalam 48 jam pada hari kerja',
  },

  footer: {
    blurb: 'Kami membangun solusi backend, frontend, dan DevOps.',
    company: 'Perusahaan',
    services: 'Layanan',
    rights: 'Hak cipta dilindungi.',
    terms: 'Ketentuan Penggunaan',
    privacy: 'Kebijakan Privasi',
  },

  legal: {
    tag: 'Legal',
    effectiveDate: 'Tanggal berlaku',
    onThisPage: 'Di halaman ini',
    questions: 'Ada pertanyaan?',
    questionsBody: `Hubungi ${site.name} terkait dokumen ini.`,
    translationNotice:
      'Dokumen ini adalah terjemahan dari versi bahasa Inggris. Jika terdapat perbedaan, versi bahasa Inggris yang berlaku. Gunakan pemilih bahasa untuk membacanya.',
    terms: {
      title: 'Ketentuan Penggunaan',
      description:
        'Panduan jelas untuk menggunakan situs kami dan memahami di mana perjanjian proyek dimulai.',
      related: 'Baca Ketentuan Penggunaan kami',
    },
    privacy: {
      title: 'Kebijakan Privasi',
      description:
        'Apa yang Anda bagikan, bagaimana situs ini terhubung dengan layanan lain, dan ke mana Anda bisa bertanya tentang informasi Anda.',
      related: 'Baca Kebijakan Privasi kami',
    },
  },

  notFound: {
    title: 'Halaman tidak ditemukan',
    body: 'Halaman yang Anda cari tidak ada atau mungkin sudah dipindahkan. Periksa kembali URL-nya, atau kembali ke halaman sebelumnya.',
    backHome: 'Kembali ke beranda',
    contact: 'Hubungi kami',
  },
}
