// === Toggle Hamburger Menu ===
function toggleMenu() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}

// === Dropdown toggle for mobile ===
document.addEventListener("DOMContentLoaded", function () {
  // Toggle dropdown utama di mobile
  document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();

        // Tutup dropdown lain jika ada yang sedang terbuka
        document.querySelectorAll(".dropdown.open").forEach(openItem => {
          if (openItem !== this.parentElement) {
            openItem.classList.remove("open");
          }
        });

        // Toggle dropdown ini
        this.parentElement.classList.toggle("open");
      }
    });
  });

  // Toggle sub-dropdown di mobile
  document.querySelectorAll(".dropdown-sub > a").forEach(link => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();

        // Tutup submenu lain di dalam dropdown yang sama
        document.querySelectorAll(".dropdown-sub.open").forEach(openSub => {
          if (openSub !== this.parentElement) {
            openSub.classList.remove("open");
          }
        });

        // Toggle submenu ini
        this.parentElement.classList.toggle("open");
      }
    });
  });
});
