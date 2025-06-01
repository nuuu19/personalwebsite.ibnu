// Dark mode otomatis berdasarkan waktu
(function autoDarkMode() {
  const jam = new Date().getHours();
  const body = document.body;
  const button = document.getElementById('toggleDarkMode');

  if (jam >= 18 || jam < 6) {
    body.classList.add('dark');
    if (button) button.textContent = '☀️ Light Mode';
  } else {
    body.classList.remove('dark');
    if (button) button.textContent = '🌙 Dark Mode';
  }
})();

// Dark mode toggle
document.getElementById('toggleDarkMode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  document.getElementById('toggleDarkMode').textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// AOS init
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});
// Validasi Formulir Kontak
// Validasi Formulir Kontak (tanpa alert)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  const nama = this.nama.value.trim();
  const email = this.email.value.trim();
  const pesan = this.pesan.value.trim();

  let valid = true;

  // Reset pesan error
  document.getElementById('error-nama').textContent = '';
  document.getElementById('error-email').textContent = '';
  document.getElementById('error-pesan').textContent = '';

  // Validasi nama
  if (nama === '') {
    document.getElementById('error-nama').textContent = 'Nama tidak boleh kosong.';
    valid = false;
  }

  // Validasi email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('error-email').textContent = 'Format email tidak valid.';
    valid = false;
  }

  // Validasi pesan
  if (pesan.length < 10) {
    document.getElementById('error-pesan').textContent = 'Pesan minimal 10 karakter.';
    valid = false;
  }

  if (!valid) {
    e.preventDefault(); // Cegah pengiriman form
  }
});
// Tombol Kembali ke Atas
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
