# Langkah Memulai Project Baru: Geely MAI Jakarta

Panduan singkat. Ikuti urutan dari atas ke bawah.

1. **Buat repository baru** di GitHub (Public). Nama bebas, misal `geely-mai`.
2. **Unggah ZIP ini** ke halaman utama repository (Add file, Upload files). Website dibangun otomatis oleh GitHub Actions.
3. **Aktifkan GitHub Pages**: Settings, Pages, Source = GitHub Actions.
4. **Domain**: setelah Anda menentukan alamat website, isi nama domain di file `public/CNAME` (satu baris, tanpa https://). Atur DNS di registrar, lalu isi Custom domain di Settings, Pages. Tanpa file CNAME, website tayang di alamat github.io.
5. **Masuk admin** di `/admin/` dengan token GitHub baru untuk repo ini.
6. **Menu Pengaturan**: isi alamat lengkap dan jam buka dealer Geely MAI (sengaja dikosongkan), cek nomor WhatsApp dan sosmed.
7. **Ganti materi contoh**: foto slider, promo, testimoni, dan foto model dengan milik Geely MAI.
8. **Terbitkan konten bertahap**: semua 75 artikel dan 11 landing page berstatus *draft*. Buka satu per satu di admin, baca, ubah status menjadi terbit, atur tanggal. Disarankan 1-2 per hari.
9. **Google Search Console baru**: daftarkan domain baru, lalu kirim `sitemap-index.xml`. File verifikasi lama sudah dihapus.
10. **IndexNow**: file kunci baru sudah dibuat di folder `public` (nama 32 huruf/angka .txt). Biarkan, jangan dihapus.
11. **Otomasi opsional** (Telegram, laporan): ikuti `panduan/OTOMASI-SETUP.md` dengan akun/bot baru.

Catatan: harga dan promo di artikel kategori "Harga & Promo" adalah data per Oktober 2026. Periksa ulang sebelum terbit.
