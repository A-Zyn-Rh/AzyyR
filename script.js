/* script.js */
document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // BAGIAN 1: Efek Fade In saat scroll (Kode Lama Kamu)
  // ==========================================
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Hanya animasi sekali
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el) => observer.observe(el));

  // ==========================================
  // BAGIAN 2: Efek Bintang (Kode Baru)
  // ==========================================
  function initStars() {
    // Cek apakah container bintang sudah ada di HTML?
    let starContainer = document.getElementById("stars-container");

    // Jika belum ada, buat container secara otomatis lewat JS
    if (!starContainer) {
      starContainer = document.createElement("div");
      starContainer.id = "stars-container";
      // Styling agar menempel di background dan tidak ikut scroll
      starContainer.style.position = "fixed";
      starContainer.style.top = "0";
      starContainer.style.left = "0";
      starContainer.style.width = "100%";
      starContainer.style.height = "100%";
      starContainer.style.zIndex = "-1"; // Pastikan di belakang konten
      starContainer.style.pointerEvents = "none"; // Agar bisa diklik tembus
      document.body.prepend(starContainer);
    }

    const starCount = 150; // Jumlah bintang

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      // Posisi Random
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      // Ukuran Random (0px - 3px)
      const size = Math.random() * 3;
      // Durasi & Delay Random
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 5;

      // Apply styles
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Apply animasi (nama keyframe: 'twinkle' - harus ada di CSS)
      star.style.animation = `twinkle ${duration}s ease-in-out infinite`;
      star.style.animationDelay = `${delay}s`;

      starContainer.appendChild(star);
    }
  }

  // Jalankan fungsi bintang
  initStars();

  console.log("Modern Website Loaded Successfully (Stars + Observer)");
});
function createStars() {
  const starContainer = document.getElementById("stars");

  for (let i = 0; i < 120; i++) {
    // jumlah bintang
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 3 + 1; // 1–4px random
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 2 + "s";

    starContainer.appendChild(star);
  }
}

createStars();
