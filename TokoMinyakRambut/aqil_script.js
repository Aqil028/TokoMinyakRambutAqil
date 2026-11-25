// Toggle Menu Mobile
const aqilBtnMenu = document.getElementById('aqil_btn_menu');
const aqilNavList = document.getElementById('aqil_nav_list');

if (aqilBtnMenu) {
  aqilBtnMenu.addEventListener('click', function () {
    aqilNavList.classList.toggle('aqil_buka');
  });
}

// Filter 13 Katalog Produk
function aqilFilterProduk(kategori, tombolAktif) {
  // Ubah status aktif pada tombol filter
  const semuaTombol = document.querySelectorAll('.aqil_btn_filter');
  semuaTombol.forEach(btn => btn.classList.remove('aqil_aktif'));
  tombolAktif.classList.add('aqil_aktif');

  // Tampilkan atau sembunyikan kartu produk sesuai kategori
  const semuaKartu = document.querySelectorAll('.aqil_card');
  semuaKartu.forEach(kartu => {
    const kategoriKartu = kartu.getAttribute('data-kategori');
    if (kategori === 'semua' || kategoriKartu === kategori) {
      kartu.style.display = 'flex';
    } else {
      kartu.style.display = 'none';
    }
  });
}

// Fitur Interaktif Rekomendasi Produk (panduan.html)
function aqilCekRekomendasi() {
  const aroma = document.getElementById('aqil_pilih_aroma').value;
  const jumlah = document.getElementById('aqil_pilih_jumlah').value;
  const kotakHasil = document.getElementById('aqil_hasil_kuis');

  let namaPaket = '';
  let hargaPaket = '';

  if (aroma === 'all') {
    namaPaket = 'Paket 3 Botol All Varian (1 Bubblegum + 1 Vanilla + 1 Lemon Yuzu)';
    hargaPaket = 'Rp 95.000';
  } else if (aroma.startsWith('mix_')) {
    if (aroma === 'mix_bv') namaPaket = 'Paket 2 Botol Bubblegum & Vanilla';
    if (aroma === 'mix_lv') namaPaket = 'Paket 2 Botol Lemon Yuzu & Vanilla';
    if (aroma === 'mix_bl') namaPaket = 'Paket 2 Botol Bubblegum & Lemon Yuzu';
    hargaPaket = 'Rp 65.000 (Otomatis Paket 2 Botol Mix)';
  } else {
    const labelAroma = aroma === 'bubblegum' ? 'Bubblegum' : (aroma === 'vanilla' ? 'Vanilla' : 'Lemon Yuzu');
    if (jumlah === '1') {
      namaPaket = '1 Botol Varian ' + labelAroma;
      hargaPaket = 'Rp 35.000';
    } else if (jumlah === '2') {
      namaPaket = 'Paket 2 Botol ' + labelAroma;
      hargaPaket = 'Rp 65.000';
    } else {
      namaPaket = 'Paket 3 Botol ' + labelAroma;
      hargaPaket = 'Rp 95.000';
    }
  }

  kotakHasil.style.display = 'block';
  kotakHasil.innerHTML = `
    <strong>Rekomendasi Terbaik Untukmu:</strong><br>
    <p style="margin: 8px 0;"><strong>${namaPaket}</strong> (${hargaPaket})</p>
    <a href="contact.html" class="aqil_btn_pesan" style="margin-top:8px;">Pesan Paket Ini Sekarang</a>
  `;
}

// Validasi & Simulasi Kirim Pesan Form Kontak (contact.html)
function aqilKirimPesan(event) {
  event.preventDefault();
  const nama = document.getElementById('aqil_input_nama').value;
  const email = document.getElementById('aqil_input_email').value;
  const paket = document.getElementById('aqil_input_paket').value;
  const pesan = document.getElementById('aqil_input_pesan').value;
  const notif = document.getElementById('aqil_notifikasi_sukses');

  notif.style.display = 'block';
  notif.innerHTML = `
    <strong>Terima kasih, ${nama}!</strong><br>
    Pesan Anda terkait <em>"${paket}"</em> telah berhasil dikirim ke pemilik Aqil Hair Oil.<br>
    Balasan akan segera dikirimkan ke <strong>${email}</strong>.
  `;

  document.getElementById('aqil_form_kontak').reset();
}

// Database 13 Katalog Produk Aqil Hair Oil
const aqilDataProduk = {
  1: {
    nama: "1 Botol Varian Bubblegum",
    kategori: "Satuan - 1 Botol",
    harga: "Rp 35.000",
    foto: "Foto 1 Botol Bubblegum",
    deskripsi: "Aroma permen karet manis yang ceria, menjaga kelembapan rambut seharian.",
    isi: "1 Botol Bubblegum (60ml)",
    kandungan: "Virgin Coconut Oil, Vitamin E, Ekstrak Bubblegum.",
    cocokUntuk: "Aktivitas kampus, nongkrong, dan acara santai."
  },
  2: {
    nama: "1 Botol Varian Vanilla",
    kategori: "Satuan - 1 Botol",
    harga: "Rp 35.000",
    foto: "Foto 1 Botol Vanilla",
    deskripsi: "Aroma vanilla lembut dan elegan, membuat rambut berkilau alami.",
    isi: "1 Botol Vanilla (60ml)",
    kandungan: "Sweet Almond Oil, Argan Oil, Ekstrak Vanilla Bean.",
    cocokUntuk: "Ruangan ber-AC, acara formal, dan malam hari."
  },
  3: {
    nama: "1 Botol Varian Lemon Yuzu",
    kategori: "Satuan - 1 Botol",
    harga: "Rp 35.000",
    foto: "Foto 1 Botol Lemon Yuzu",
    deskripsi: "Kesegaran sitrus jeruk yuzu Jepang, anti lepek untuk aktivitas luar ruangan.",
    isi: "1 Botol Lemon Yuzu (60ml)",
    kandungan: "Jojoba Oil, Grapeseed Oil, Minyak Esensial Yuzu.",
    cocokUntuk: "Aktivitas outdoor, olahraga, dan siang hari."
  },
  4: {
    nama: "Paket 2 Botol Bubblegum",
    kategori: "Paket Duo - 2 Botol",
    harga: "Rp 65.000",
    foto: "Foto 2 Botol Bubblegum",
    deskripsi: "Stok ganda khusus pecinta aroma manis segar Bubblegum. Lebih hemat Rp 5.000!",
    isi: "2 Botol Bubblegum (2 x 60ml)",
    kandungan: "Virgin Coconut Oil, Vitamin E, Ekstrak Bubblegum.",
    cocokUntuk: "Pemakaian harian rutin pecinta aroma manis."
  },
  5: {
    nama: "Paket 2 Botol Vanilla",
    kategori: "Paket Duo - 2 Botol",
    harga: "Rp 65.000",
    foto: "Foto 2 Botol Vanilla",
    deskripsi: "Dua botol varian Vanilla untuk pemakaian rutin lebih lama dan hemat.",
    isi: "2 Botol Vanilla (2 x 60ml)",
    kandungan: "Sweet Almond Oil, Argan Oil, Ekstrak Vanilla Bean.",
    cocokUntuk: "Perawatan rambut kering dan bercabang secara rutin."
  },
  6: {
    nama: "Paket 2 Botol Lemon Yuzu",
    kategori: "Paket Duo - 2 Botol",
    harga: "Rp 65.000",
    foto: "Foto 2 Botol Lemon Yuzu",
    deskripsi: "Dua botol kesegaran ekstra Lemon Yuzu agar rambut bebas bau matahari.",
    isi: "2 Botol Lemon Yuzu (2 x 60ml)",
    kandungan: "Jojoba Oil, Grapeseed Oil, Minyak Esensial Yuzu.",
    cocokUntuk: "Pekerja lapangan atau yang sering beraktivitas di luar ruangan."
  },
  7: {
    nama: "Paket 2 Botol Bubblegum & Vanilla",
    kategori: "Paket Duo Mix - 2 Botol",
    harga: "Rp 65.000",
    foto: "Foto Bubblegum & Vanilla",
    deskripsi: "Kombinasi dua aroma manis yang lembut dan menenangkan.",
    isi: "1 Botol Bubblegum + 1 Botol Vanilla",
    kandungan: "VCO, Sweet Almond Oil, Argan Oil, Vitamin E.",
    cocokUntuk: "Ganti-ganti suasana wangi manis pagi dan malam."
  },
  8: {
    nama: "Paket 2 Botol Lemon Yuzu & Vanilla",
    kategori: "Paket Duo Mix - 2 Botol",
    harga: "Rp 65.000",
    foto: "Foto Lemon Yuzu & Vanilla",
    deskripsi: "Perpaduan segarnya sitrus untuk siang hari dan hangatnya vanilla untuk malam.",
    isi: "1 Botol Lemon Yuzu + 1 Botol Vanilla",
    kandungan: "Jojoba Oil, Sweet Almond Oil, Argan Oil, Ekstrak Yuzu & Vanilla.",
    cocokUntuk: "Penggunaan fleksibel siang (outdoor) dan malam (indoor)."
  },
  9: {
    nama: "Paket 2 Botol Bubblegum & Lemon Yuzu",
    kategori: "Paket Duo Mix - 2 Botol",
    harga: "Rp 65.000",
    foto: "Foto Bubblegum & Lemon Yuzu",
    deskripsi: "Kombinasi aroma paling energik, ceria, dan menyegarkan sepanjang hari.",
    isi: "1 Botol Bubblegum + 1 Botol Lemon Yuzu",
    kandungan: "VCO, Jojoba Oil, Grapeseed Oil, Vitamin E.",
    cocokUntuk: "Mahasiswa dan anak muda dengan aktivitas padat."
  },
  10: {
    nama: "Paket 3 Botol All Varian",
    kategori: "Best Seller - 3 Botol",
    harga: "Rp 95.000",
    foto: "Foto 3 Botol All Varian",
    deskripsi: "Lengkap! Dapat semua varian dalam satu paket paling hemat (hemat Rp 10.000).",
    isi: "1 Bubblegum + 1 Vanilla + 1 Lemon Yuzu",
    kandungan: "Formula lengkap VCO, Argan Oil, Jojoba Oil, dan Vitamin E.",
    cocokUntuk: "Kamu yang ingin mencoba semua aroma sesuai mood harian."
  },
  11: {
    nama: "Paket 3 Botol Bubblegum",
    kategori: "Paket Trio - 3 Botol",
    harga: "Rp 95.000",
    foto: "Foto 3 Botol Bubblegum",
    deskripsi: "Paket hemat 3 botol sekaligus khusus untuk penggemar berat varian Bubblegum.",
    isi: "3 Botol Bubblegum (3 x 60ml)",
    kandungan: "Virgin Coconut Oil, Vitamin E, Ekstrak Bubblegum.",
    cocokUntuk: "Stok bulanan atau patungan bersama teman."
  },
  12: {
    nama: "Paket 3 Botol Vanilla",
    kategori: "Paket Trio - 3 Botol",
    harga: "Rp 95.000",
    foto: "Foto 3 Botol Vanilla",
    deskripsi: "Paket stok bulanan 3 botol varian Vanilla dengan harga paling ekonomis.",
    isi: "3 Botol Vanilla (3 x 60ml)",
    kandungan: "Sweet Almond Oil, Argan Oil, Ekstrak Vanilla Bean.",
    cocokUntuk: "Stok bulanan perawatan kilau rambut alami."
  },
  13: {
    nama: "Paket 3 Botol Lemon Yuzu",
    kategori: "Paket Trio - 3 Botol",
    harga: "Rp 95.000",
    foto: "Foto 3 Botol Lemon Yuzu",
    deskripsi: "Paket hemat 3 botol Lemon Yuzu untuk kesegaran rambut maksimal tiap hari.",
    isi: "3 Botol Lemon Yuzu (3 x 60ml)",
    kandungan: "Jojoba Oil, Grapeseed Oil, Minyak Esensial Yuzu.",
    cocokUntuk: "Stok bulanan anti lepek dan bebas bau matahari."
  }
};

// Fungsi Menampilkan Hanya 1 Detail Produk Sesuai URL (?id=...)
function aqilTampilkanDetail() {
  const wadah = document.getElementById('aqil_wadah_detail');
  if (!wadah) return; // Berhenti jika bukan di halaman detail.html

  // Ambil nilai parameter 'id' dari URL (default ke 1 jika tidak ada)
  const params = new URLSearchParams(window.location.search);
  const idProduk = params.get('id') || '1';
  const produk = aqilDataProduk[idProduk];

  if (!produk) {
    wadah.innerHTML = `<p>Produk tidak ditemukan. <a href="produk.html">Kembali ke katalog</a>.</p>`;
    return;
  }

  // Render hanya produk yang dipilih
  wadah.innerHTML = `
    <div class="aqil_detail_grid">
      <div class="aqil_img_placeholder aqil_img_besar">${produk.foto}</div>
      <div class="aqil_detail_info">
        <span class="aqil_badge">${produk.kategori}</span>
        <h1>${produk.nama}</h1>
        <div class="aqil_harga">${produk.harga}</div>
        <p>${produk.deskripsi}</p>
        <ul class="aqil_komposisi_list">
          <li><strong>Isi Paket:</strong> ${produk.isi}</li>
          <li><strong>Kandungan Utama:</strong> ${produk.kandungan}</li>
          <li><strong>Rekomendasi:</strong> ${produk.cocokUntuk}</li>
        </ul>
        <a href="contact.html" class="aqil_btn_pesan">Pesan Produk Ini Sekarang</a>
      </div>
    </div>
  `;
}

// Jalankan otomatis saat halaman detail.html dibuka
aqilTampilkanDetail();