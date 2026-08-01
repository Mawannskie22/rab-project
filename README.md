# Cost Guard — RAB & Project Cost Control Website

Website perusahaan jasa **hitung RAB, audit BQ, review RAB, cost control, cashflow, dan schedule proyek** untuk kontraktor, owner, developer, dan konsultan di Indonesia.

Dibangun dengan **Next.js 16 (App Router)** + **Tailwind CSS 4** + **Framer Motion**.

## Menjalankan Project

```bash
npm install
npm run dev       # development server → http://localhost:3000
npm run build     # production build
npm run start     # jalankan hasil build
npm run lint      # cek linting
```

## Struktur Halaman

| Halaman | URL |
| --- | --- |
| Beranda | `/` |
| Layanan | `/layanan` |
| Harga | `/harga` |
| Tentang | `/tentang` |
| Portfolio | `/portfolio` |
| Artikel / Blog | `/artikel` |
| Detail Artikel | `/artikel/[slug]` |
| Kontak | `/kontak` |

## SEO Checklist (sudah terpasang)

- [x] `app/robots.ts` → `robots.txt` otomatis
- [x] `app/sitemap.ts` → `sitemap.xml` otomatis (termasuk semua artikel)
- [x] Metadata unik per halaman (title, description, canonical, Open Graph)
- [x] Structured data JSON-LD: `ProfessionalService`, `FAQPage`, `Service`, `BreadcrumbList`, `Article`, `ItemList`
- [x] `app/opengraph-image.tsx` → gambar OG untuk share media sosial
- [x] Canonical URL & robots meta otomatis oleh Next.js
- [x] Konten artikel long-tail: biaya bangun rumah, RAB, audit BQ

## Konfigurasi Penting — `data/site.ts`

Semua pengaturan penting dipusatkan di **`data/site.ts`**. Jangan lupa melengkapi:

1. **`url`** → ganti `https://costguard.id` dengan domain asli Anda setelah terdaftar.
2. **`whatsapp`** → sudah diisi `6281999476069` dan dipakai konsisten di seluruh website.
3. **`email`** → ganti `info@costguard.id` dengan email bisnis Anda.
4. **`analyticsId`** → isi ID Google Analytics 4 (format `G-XXXXXXX`) setelah membuat properti GA4.
5. **`searchConsoleVerification`** → isi token verifikasi Google Search Console, lalu buka `app/layout.tsx` dan tambahkan:
   ```ts
   verification: { google: siteConfig.searchConsoleVerification },
   ```
   pada objek `metadata`.
6. **Data bisnis** (alamat, kota, telepon) → pastikan sesuai profil Google Business Anda.

## Cara Mendapatkan Ranking Google (Langkah Setelah Deploy)

1. **Daftarkan domain** (mis. di Niagahoster/Domainesia/Cloudflare) dan hubungkan ke Vercel/Netlify.
2. **Deploy** project ini (Vercel paling mudah — otomatis terdeteksi sebagai Next.js).
3. **Google Search Console**: verifikasi domain → submit `sitemap.xml` → pantau indexing.
4. **Google Analytics 4**: buat properti baru → masukkan ID ke `data/site.ts`.
5. **Google Business Profile**: daftarkan bisnis agar muncul di Google Maps & pencarian lokal.
6. **Konsistensi NAP** (Nama/Alamat/Telepon): gunakan data yang sama di website, Google Business, dan media sosial.
7. **Terus tambah artikel** di `data/artikel.ts` (target kata kunci long-tail seperti "biaya bangun rumah per meter", "jasa audit BQ", "cara membuat RAB"). Tambahkan konten baru minimal 1-2 artikel/bulan.
8. **Backlink**: minta review/bahasan dari klien, forum, atau direktori bisnis lokal.

> Catatan jujur: kata kunci head seperti "biaya bangunan" sangat kompetitif (didominasi portal besar). Ranking #1 untuk kata kunci tersebut butuh waktu berbulan-bulan, konsistensi konten, dan otoritas domain. Strategi realistis: kuasai dulu kata kunci long-tail yang lebih spesifik, lalu bangun otoritas bertahap.

## Data & Konten

- **`data/artikel.ts`** → daftar artikel blog (tambah artikel baru di sini; sitemap & listing otomatis mengikuti).
- **`data/site.ts`** → konfigurasi website & bisnis.
- Konten komponen (layanan, harga, FAQ, portfolio, keunggulan) ada langsung di `components/`.
