# Simulasi CBT Mandiri SMK (Mobile-First)

Aplikasi Web Simulasi Computer-Based Test (CBT) mandiri, ringan, zero-dependency, berbasis IndexedDB offline-ready untuk smartphone dan desktop siswa SMK.

## Fitur Utama
- **Mobile-First UX**: Navigasi per-soal dengan bottom-bar yang dioptimasi untuk layar smartphone.
- **Anti-Cheating Shuffle**:
  - Pengacakan urutan nomor soal (PG) menggunakan algoritma Fisher-Yates per sesi ujian.
  - Pengacakan posisi opsi jawaban (A–E) secara dinamis tanpa mengubah validitas kunci jawaban asli.
- **Bagian Esai Terstruktur**: Input uraian analitis real-time counter karakter.
- **Ringkasan & Validasi Sebelum Submit**: Layar review untuk memeriksa butir kosong / belum terjawab.
- **Evaluasi Otomatis & Rubrik Mandiri**:
  - Penilaian instan soal Pilihan Ganda (PG Benar × 2 = Maksimal 70 Poin).
  - Pembahasan dan rubrik resmi penilaian esai (Maksimal 30 Poin).
- **Bank Soal Terintegrasi (Standar 5NK)**:
  1. AI untuk Produktivitas Kerja (Kelas XI Lintas Jurusan) - 35 PG + 5 Esai
  2. Data Science I (Kelas XI TKJ) - 35 PG + 5 Esai
  3. Data Science II (Kelas XII TKJ) - 35 PG + 5 Esai
  4. Keamanan Jaringan (Kelas XII TKJ) - 35 PG + 5 Esai

## Menjalankan Server Lokal (LAN / WiFi Sekolah)

Akses dari smartphone siswa yang terhubung pada jaringan WiFi yang sama via:
 (atau langsung buka file  di browser tanpa server).

## GitHub Pages
Aplikasi ini dapat langsung dijalankan via GitHub Pages dari branch  root ().
