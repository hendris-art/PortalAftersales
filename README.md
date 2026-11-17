# ORIENT Aftersales – Aplikasi

Aplikasi (PWA) untuk membuka Portal Aftersales ORIENT (Google Apps Script) seperti aplikasi biasa:
ikon di layar utama / Start menu, jendela sendiri tanpa bilah browser, layar offline, dan tombol menu (muat ulang, buka langsung, layar penuh).

Isi folder ini diunggah ke GitHub Pages (gratis). Panduan lengkap: buka **PANDUAN.html**.

Pengaturan satu-satunya: di `index.html`, isi `const APP_URL = '...'` dengan URL Web App yang berakhiran `/exec`
(boleh dikosongkan; aplikasi akan meminta URL saat pertama dibuka).

## Orient Sparepart (folder `sparepart/`)
Aplikasi (PWA) terpisah untuk web app **SPAREPART & INVENTORY MANAGEMENT SYSTEM**.
Alamat pasang: https://hendris-art.github.io/PortalAftersales/sparepart/ — dibuka dari tombol **Download Aplikasi** di form permintaan sparepart (akun di luar orient.co.id).
URL web app sudah tertanam di `sparepart/index.html` (`APP_URL`). Naikkan `VERSI` di `sparepart/sw.js` setiap kali file di folder ini diubah.
