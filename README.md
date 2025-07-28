# Finwest Consulting Website

Website perusahaan konsultan keuangan dan bisnis Finwest Consulting yang dibangun dengan Next.js 15 dan dioptimalkan untuk deployment di Vercel.

## Fitur

- **Responsive Design**: Tampilan optimal di semua perangkat
- **SEO Optimized**: Meta tags dan struktur yang SEO-friendly
- **Performance**: Static Site Generation (SSG) untuk loading cepat
- **Modern UI**: Desain profesional dengan Tailwind CSS
- **Contact Form**: Integrasi dengan Formspree untuk form kontak
- **Analytics**: Vercel Analytics terintegrasi

## Teknologi

- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (Icons)
- Vercel Analytics

## Instalasi

1. Clone repository:
\`\`\`bash
git clone <repository-url>
cd finwest-consulting
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Jalankan development server:
\`\`\`bash
npm run dev
\`\`\`

4. Buka [http://localhost:3000](http://localhost:3000) di browser.

## Konfigurasi Form Kontak

Untuk mengaktifkan form kontak:

1. Daftar di [Formspree](https://formspree.io/)
2. Buat form baru dan dapatkan form ID
3. Ganti `YOUR_FORM_ID` di file `app/components/Contact.tsx` dengan form ID Anda:
\`\`\`javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
\`\`\`

## Deployment ke Vercel

### Otomatis (Recommended)

1. Push kode ke GitHub repository
2. Import project di [Vercel Dashboard](https://vercel.com/dashboard)
3. Vercel akan otomatis detect Next.js dan deploy

### Manual

1. Install Vercel CLI:
\`\`\`bash
npm i -g vercel
\`\`\`

2. Deploy:
\`\`\`bash
vercel
\`\`\`

3. Follow instruksi di terminal

## Struktur Folder

\`\`\`
finwest-consulting/
├── app/
│   ├── components/          # Komponen React
│   ├── tentang/            # Halaman Tentang Kami
│   ├── layanan/            # Halaman Layanan
│   ├── kontak/             # Halaman Kontak
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
└── next.config.js          # Next.js configuration
\`\`\`

## Customization

### Warna Brand
Warna utama dapat diubah di `tailwind.config.js`:
- Biru tua: `#1E3A8A`
- Emas: `#D4AF37`

### Konten
- Edit informasi perusahaan di komponen masing-masing
- Ganti placeholder kontak dengan informasi sebenarnya
- Update link Instagram sesuai akun resmi

### SEO
Meta tags dapat diubah di setiap file `page.tsx` dan `layout.tsx`.

## Performance

Website ini dioptimalkan untuk:
- Core Web Vitals
- SEO
- Accessibility
- Mobile responsiveness

## Support

Untuk pertanyaan teknis atau bantuan deployment, silakan buat issue di repository ini.

## License

© 2025 Finwest Consulting. All rights reserved.
