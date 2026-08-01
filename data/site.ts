export const siteConfig = {
  name: "Cost Guard",
  legalName: "PT Cost Guard Indonesia",
  tagline: "Cost Control Partner",
  url: "https://costguard.id",
  description:
    "Jasa hitung RAB, audit BQ, review RAB, cost control, cashflow dan schedule proyek untuk kontraktor, owner, developer, dan konsultan di Indonesia.",
  keywords: [
    "hitung RAB",
    "jasa hitung RAB",
    "biaya bangunan",
    "cara menghitung biaya bangunan",
    "hitung biaya bangun rumah",
    "RAB rumah",
    "audit BQ",
    "jasa audit BQ",
    "review RAB",
    "cost control proyek",
    "jasa cost control",
    "estimasi biaya bangun rumah per meter",
    "kontrol biaya proyek",
    "RAB renovasi",
    "RAB interior",
  ],
  whatsapp: "6281999476069",
  whatsappDisplay: "+62 819-9947-6069",
  email: "info@costguard.id",
  phone: "+6281999476069",
  address: "Jakarta, Indonesia",
  city: "Jakarta",
  region: "DKI Jakarta",
  country: "ID",
  postcode: "12345",
  priceRange: "Rp500.000 - Rp5.000.000",
  openingHours: "Mo-Sa 08:00-18:00",
  foundedYear: 2020,
  // Masukkan ID GA4 Anda (format: G-XXXXXXX) setelah membuat properti Google Analytics 4
  analyticsId: "",
  // Masukkan token verifikasi Google Search Console (format: xxx) lalu buka app/layout.tsx
  searchConsoleVerification: "",
} as const;

export const waLink = (message?: string) =>
  message
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${siteConfig.whatsapp}`;
