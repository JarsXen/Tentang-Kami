document.addEventListener("DOMContentLoaded", function() {
    // Interaktivitas gambar dan efek tambahan
    // ...

    // Aktifkan animasi konfeti saat halaman dimuat
    const confetti = document.querySelector('.confetti');
    if (confetti) {
        confetti.style.display = 'block';
    }

    // Buat partikel
    const particleContainer = document.getElementById('particle-container');
    for (let i = 0; i < 50; i++) {
        let particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 5 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.bottom = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particleContainer.appendChild(particle);
    }

    // Muat halaman cerita
    loadStoryPage();
});

// Fungsi untuk membuka dan menutup lightbox
function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function currentSlide(n) {
    var images = document.getElementsByClassName('gallery-item');
    var lightboxImage = document.getElementById('lightbox-img');
    lightboxImage.src = images[n - 1].src;
}

// Fungsi untuk memuat halaman cerita
function loadStoryPage() {
    document.getElementById('pageContent').innerHTML = `
        <main class="story-content">
            <!-- Tempatkan konten cerita di sini -->
            <p class="intro">Halo..ini tentang kami, sedikit cerita tentang kami awal bertemu, suka dan duka sampai sekarang. Kita bertemu di salah satu Game Online Free Fire pada tahun 2021 kami berdua saling mutual WhatsApp tapi... sekedar Save nomor dan penonton story WhatsApp. Tidak lama kemudian Saya punya pasangan dan disitu kami masih saling jadi penonton story dan masih belum banyak komunikasi, sekitar 2021 akhir hingga 2022 akhir Lala masih menjadi penonton story. Saya pun pernah modus menanyakan lomba untuk acara ClassMeet, waktu saya bertanya saya sudah single dan Lala pun tidak mengetahui bahwa saya telah mengakhiri hubungan dengan pacar saya yang dulu dan Lala pun menjadi cewe cool biar tidak dikira orang Ke-3 katanya. Singkat cerita pada bulan Mei 2023 kita telah jadian, banyak suka dan duka yang telah kami lewati bersama hingga saat ini.</p>
            <!-- Konten cerita lainnya -->
        </main>
        <button onclick="loadGalleryPage()">Lihat Foto Lalaa</button>
    `;
    // Tambahkan listener untuk lightbox di sini jika diperlukan
}

// Fungsi untuk memuat halaman galeri
function loadGalleryPage() {
    document.getElementById('pageContent').innerHTML = `
        <main class="gallery">
            <!-- Tempatkan galeri foto di sini -->
            <img src="lalaa1.jpg" alt="Foto 1" class="gallery-item" onclick="openLightbox(); currentSlide(1)">
            <img src="lalaa2.jpg" alt="Foto 1" class="gallery-item" onclick="openLightbox(); currentSlide(1)">
            <img src="lalaa3.jpg" alt="Foto 1" class="gallery-item" onclick="openLightbox(); currentSlide(1)">
            <img src="lalaa4.jpg" alt="Foto 1" class="gallery-item" onclick="openLightbox(); currentSlide(1)">
            <img src="lalaa5.jpg" alt="Foto 1" class="gallery-item" onclick="openLightbox(); currentSlide(1)">
            <img src="lalaa6.jpg" alt="Foto 1" class="gallery-item" onclick="openLightbox(); currentSlide(1)">
            <img src="lalaa7.jpg" alt="Foto 1" class="gallery-item" onclick="openLightbox(); currentSlide(1)">
            <img src="lalaa8.jpg" alt="Foto 1" class="gallery-item" onclick="openLightbox(); currentSlide(1)">
            <img src="lalaa9.jpg" alt="Foto 1" class="gallery-item" onclick="openLightbox(); currentSlide(1)">
            <!-- Foto lainnya -->
        </main>
        <button onclick="loadStoryPage()">Kembali ke Cerita</button>
    `;
    // Tambahkan listener untuk lightbox di sini jika diperlukan
}
