export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "cta"; text?: string };

export interface Article {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  date: string;
  category: string;
  readTime: string;
  content: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: "cara-menghitung-biaya-bangun-rumah-per-meter",
    title: "Cara Menghitung Biaya Bangun Rumah per Meter (2026)",
    description:
      "Panduan lengkap cara menghitung biaya bangun rumah per meter, mulai dari luas bangunan, harga satuan material dan upah, hingga langkah menyusun RAB yang akurat agar tidak membengkak.",
    keywords: [
      "cara menghitung biaya bangun rumah",
      "biaya bangun rumah per meter",
      "harga bangun rumah per meter 2026",
      "estimasi biaya bangunan",
    ],
    date: "2026-08-01",
    category: "Estimasi Biaya",
    readTime: "7 menit",
    content: [
      {
        type: "p",
        text: "Menghitung biaya bangun rumah per meter adalah langkah paling penting sebelum memulai pembangunan. Kesalahan kecil dalam perhitungan bisa berujung pada pembengkakan anggaran, proyek macet, atau kualitas bangunan yang dikorbankan. Artikel ini akan membahas cara menghitung biaya bangunan secara sistematis, komponen apa saja yang harus masuk, dan bagaimana memastikan angka estimasi Anda benar-benar realistis.",
      },
      {
        type: "h2",
        text: "Komponen utama biaya bangun rumah",
      },
      {
        type: "p",
        text: "Sebelum menghitung, Anda perlu memahami bahwa biaya bangun rumah terdiri dari beberapa komponen besar. Jangan hanya menghitung material dan upah tukang, karena masih ada banyak biaya lain yang sering terlewat.",
      },
      {
        type: "ul",
        items: [
          "Pekerjaan persiapan: pembersihan lahan, pengukuran, pembuatan bowplank",
          "Pekerjaan struktur: pondasi, sloof, kolom, balok, dan plat lantai",
          "Pekerjaan arsitektur: dinding, plesteran, lantai, atap, plafon, pintu dan jendela",
          "Pekerjaan MEP: instalasi listrik, air bersih, air kotor, dan sanitasi",
          "Biaya upah tenaga kerja (borongan atau harian)",
          "Biaya jasa perencanaan (gambar, RAB, struktur)",
          "Biaya tak terduga dan cadangan pembulatan",
        ],
      },
      {
        type: "h2",
        text: "Rumus dasar menghitung biaya bangunan",
      },
      {
        type: "p",
        text: "Cara paling umum menghitung biaya bangun rumah adalah dengan mengalikan luas bangunan dengan harga satuan per meter persegi. Rumusnya sederhana:",
      },
      {
        type: "quote",
        text: "Total Biaya = Luas Bangunan (m²) × Harga per m²",
      },
      {
        type: "p",
        text: "Sebagai contoh, jika Anda membangun rumah seluas 100 m² dengan harga standar Rp4.000.000 per m² (bangunan sederhana), maka estimasinya adalah Rp400.000.000. Namun perlu diingat: harga per m² sangat bervariasi tergantung spesifikasi material, lokasi, tingkat kesulitan, dan sistem pembayaran (borongan penuh atau harian).",
      },
      {
        type: "h2",
        text: "Kisaran harga per meter persegi tahun 2026",
      },
      {
        type: "ul",
        items: [
          "Bangunan sederhana (standar, material ekonomis): ± Rp3.500.000 – Rp4.500.000 / m²",
          "Bangunan menengah (material standar premium): ± Rp4.500.000 – Rp6.000.000 / m²",
          "Bangunan mewah / modern (spesifikasi tinggi): ± Rp6.000.000 – Rp9.000.000 / m²",
          "Renovasi sebagian: bisa lebih murah, tergantung lingkup pekerjaan",
        ],
      },
      {
        type: "p",
        text: "Angka di atas hanya panduan kasar. Untuk hasil yang akurat, perhitungan harus berbasis volume pekerjaan riil dari gambar: berapa m³ beton, berapa m² dinding, berapa kg besi, dan seterusnya. Inilah yang disebut metode perhitungan RAB (Rencana Anggaran Biaya).",
      },
      {
        type: "h2",
        text: "Metode RAB yang lebih akurat",
      },
      {
        type: "p",
        text: "Cara menghitung biaya bangunan yang paling akurat bukan dengan patokan per m² saja, melainkan dengan menyusun RAB. Berikut langkah-langkahnya:",
      },
      {
        type: "ul",
        items: [
          "Kumpulkan gambar rencana (denah, tampak, potongan) dan spesifikasi material",
          "Buat daftar item pekerjaan dan hitung volume tiap item secara detail",
          "Tentukan harga satuan: harga material + upah tenaga kerja per item",
          "Kalikan volume dengan harga satuan untuk mendapat biaya per item",
          "Jumlahkan seluruh item, tambahkan biaya tak terduga (5-10%)",
        ],
      },
      {
        type: "h3",
        text: "Kenapa banyak orang salah hitung?",
      },
      {
        type: "p",
        text: "Kesalahan paling umum adalah volume pekerjaan yang salah, item pekerjaan yang terlewat (misalnya lupa rabat kerja, talang air, atau disposal limbah), dan harga satuan yang tidak diperbarui. Dampaknya satu: biaya bangunan membengkak di tengah jalan.",
      },
      {
        type: "h2",
        text: "Kesimpulan",
      },
      {
        type: "p",
        text: "Menghitung biaya bangun rumah per meter bisa dimulai dengan rumus luas × harga satuan, tetapi untuk hasil yang bisa dipertanggungjawabkan Anda perlu RAB yang detail. Jika tidak punya waktu atau pengalaman menyusunnya, gunakan jasa hitung RAB profesional agar estimasi biaya bangunan Anda akurat sejak awal.",
      },
      {
        type: "cta",
      },
    ],
  },
  {
    slug: "apa-itu-rab-panduan-lengkap",
    title: "Apa itu RAB? Panduan Lengkap Rencana Anggaran Biaya untuk Pemula",
    description:
      "Memahami pengertian RAB (Rencana Anggaran Biaya), isi dokumennya, cara membuat RAB yang benar, dan mengapa RAB adalah kunci agar biaya bangunan tidak membengkak.",
    keywords: [
      "apa itu RAB",
      "Rencana Anggaran Biaya",
      "cara membuat RAB",
      "contoh RAB bangunan",
    ],
    date: "2026-07-20",
    category: "RAB",
    readTime: "6 menit",
    content: [
      {
        type: "p",
        text: "RAB atau Rencana Anggaran Biaya adalah dokumen yang memuat perkiraan biaya seluruh pekerjaan pada suatu proyek konstruksi. Dokumen ini adalah jantung dari perencanaan biaya bangunan: tanpa RAB yang benar, kontraktor maupun owner sama-sama berjalan tanpa peta dan sangat rentan terhadap pembengkakan biaya.",
      },
      {
        type: "h2",
        text: "Apa saja isi dokumen RAB?",
      },
      {
        type: "ul",
        items: [
          "Judul dan deskripsi pekerjaan proyek",
          "Daftar item pekerjaan yang diurutkan secara sistematis",
          "Volume pekerjaan (m³, m², m¹, unit, dsb.)",
          "Harga satuan per pekerjaan (material, upah, alat)",
          "Jumlah biaya per item dan total rekapitulasi",
          "Analisa harga satuan sebagai lampiran perhitungan",
        ],
      },
      {
        type: "h2",
        text: "Cara membuat RAB langkah demi langkah",
      },
      {
        type: "p",
        text: "Berikut alur penyusunan RAB yang umum dipakai oleh estimator profesional:",
      },
      {
        type: "ul",
        items: [
          "Pelajari gambar kerja dan spesifikasi teknis secara menyeluruh",
          "Buat daftar pekerjaan mengikuti urutan pelaksanaan di lapangan",
          "Hitung volume pekerjaan dari gambar dengan teliti",
          "Tentukan analisa harga satuan menggunakan harga pasar terkini",
          "Susun rekapitulasi per kelompok pekerjaan (struktur, arsitektur, MEP)",
          "Tambahkan margin/cadangan dan biaya tak terduga",
          "Review kembali untuk memastikan tidak ada item yang terlewat",
        ],
      },
      {
        type: "h2",
        text: "Jenis-jenis RAB",
      },
      {
        type: "ul",
        items: [
          "RAB perencanaan: digunakan owner untuk menyiapkan anggaran proyek",
          "RAB penawaran: diajukan kontraktor saat proses tender",
          "RAB pelaksanaan: RAB final yang menjadi acuan pelaksanaan di lapangan",
        ],
      },
      {
        type: "h3",
        text: "Kapan RAB dibuat?",
      },
      {
        type: "p",
        text: "RAB sebaiknya dibuat sedini mungkin, bahkan sebelum pembangunan dimulai. Idealnya RAB perencanaan sudah tersedia saat Anda membandingkan penawaran kontraktor, karena inilah yang membuat Anda bisa menilai wajar atau tidaknya sebuah penawaran harga.",
      },
      {
        type: "h2",
        text: "Mengapa RAB sering keliru?",
      },
      {
        type: "p",
        text: "RAB keliru biasanya terjadi karena tiga hal: volume salah hitung, harga satuan tidak aktual, dan item pekerjaan terlewat. Itulah sebabnya banyak owner yang memilih menggunakan jasa hitung RAB atau melakukan audit BQ untuk memvalidasi RAB sebelum proyek dimulai.",
      },
      {
        type: "h2",
        text: "Kesimpulan",
      },
      {
        type: "p",
        text: "RAB bukan sekadar dokumen formal, melainkan alat pengendali biaya. Memahami apa itu RAB dan cara membuatnya akan menyelamatkan Anda dari kerugian finansial yang besar. Jika Anda butuh RAB yang akurat dan bisa dipertanggungjawabkan, konsultasikan proyek Anda kepada tim estimator profesional.",
      },
      {
        type: "cta",
      },
    ],
  },
  {
    slug: "jasa-audit-bq-cegah-pembengkakan-biaya-proyek",
    title: "Jasa Audit BQ: Cara Mencegah Pembengkakan Biaya Proyek",
    description:
      "Apa itu audit BQ (Bill of Quantity), kenapa audit BQ penting sebelum tender, item apa saja yang diperiksa, dan bagaimana jasa audit BQ membantu mencegah pembengkakan biaya konstruksi.",
    keywords: [
      "jasa audit BQ",
      "audit bill of quantity",
      "review RAB",
      "cegah pembengkakan biaya proyek",
    ],
    date: "2026-07-05",
    category: "Audit BQ",
    readTime: "6 menit",
    content: [
      {
        type: "p",
        text: "BQ atau Bill of Quantity adalah daftar kuantitas pekerjaan yang menjadi dasar penawaran harga dalam proyek konstruksi. Audit BQ adalah proses pemeriksaan ulang terhadap daftar tersebut untuk memastikan volume, rumus, item, dan harga sudah benar. Tanpa audit BQ, pembengkakan biaya bukan lagi kemungkinan — melainkan tinggal menunggu waktu.",
      },
      {
        type: "h2",
        text: "Kenapa audit BQ sangat penting?",
      },
      {
        type: "ul",
        items: [
          "Menemukan kesalahan volume yang menguntungkan salah satu pihak",
          "Mendeteksi item pekerjaan yang terlewat dan baru terlihat di lapangan",
          "Memvalidasi harga satuan agar tidak terlalu tinggi atau tidak realistis",
          "Menjadi dasar yang adil sebelum proses tender dimulai",
          "Mengurangi risiko sengketa antara owner dan kontraktor",
        ],
      },
      {
        type: "h2",
        text: "Apa saja yang diperiksa dalam audit BQ?",
      },
      {
        type: "p",
        text: "Tim auditor akan memeriksa BQ Anda secara menyeluruh, mencakup:",
      },
      {
        type: "ul",
        items: [
          "Akurasi perhitungan volume pekerjaan terhadap gambar",
          "Kebenaran rumus di file Excel (referensi sel, logika perhitungan)",
          "Kelengkapan item pekerjaan sesuai spesifikasi teknis",
          "Kesesuaian harga satuan dengan harga pasar terkini",
          "Rekapitulasi total dan kesesuaian antar tabel",
          "Analisa harga satuan yang dipakai",
        ],
      },
      {
        type: "h2",
        text: "Kapan waktu terbaik melakukan audit BQ?",
      },
      {
        type: "p",
        text: "Waktu terbaik adalah SEBELUM tender dikeluarkan atau sebelum kontrak ditandatangani. Pada tahap ini, kesalahan masih bisa diperbaiki tanpa biaya tambahan yang besar. Audit BQ juga tetap berguna untuk proyek yang sedang berjalan, terutama untuk mengontrol tagihan progress dan pekerjaan tambah kurang.",
      },
      {
        type: "h3",
        text: "Audit BQ untuk file Excel maupun PDF",
      },
      {
        type: "p",
        text: "Banyak BQ dikirim dalam bentuk file Excel dengan ribuan baris rumus. Audit BQ yang baik akan memeriksa keandalan rumus tersebut satu per satu, bukan hanya membaca angka hasilnya. Untuk gambar kerja berupa PDF, volume tetap dapat dihitung ulang selama ukurannya terbaca jelas.",
      },
      {
        type: "h2",
        text: "Dampak bila BQ tidak diaudit",
      },
      {
        type: "ul",
        items: [
          "Proyek berjalan lebih mahal 10-20% dari seharusnya",
          "Pekerjaan tambah yang membengkak karena item terlewat",
          "Perselisihan nilai kontrak antara owner dan kontraktor",
          "Cashflow proyek bermasalah karena biaya tak terduga",
        ],
      },
      {
        type: "h2",
        text: "Kesimpulan",
      },
      {
        type: "p",
        text: "Audit BQ adalah investasi kecil yang melindungi nilai proyek yang jauh lebih besar. Menggunakan jasa audit BQ profesional berarti Anda mendapatkan pemeriksaan independen yang menyeluruh sebelum keputusan finansial terbesar di proyek Anda dibuat.",
      },
      {
        type: "cta",
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
