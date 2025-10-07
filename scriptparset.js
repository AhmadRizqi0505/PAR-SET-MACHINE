document.addEventListener("DOMContentLoaded", function() {
  const dropdownBtn = document.querySelector(".dropdown > a");
  const dropdownContent = document.getElementById("SettingSubMenu");

  // Handle klik dropdown di HP
  dropdownBtn.addEventListener("click", function(e) {
    if (window.innerWidth <= 600) { // hanya aktif di HP
      e.preventDefault();
      dropdownContent.classList.toggle("show");
    }
  });

  // Klik di luar area -> tutup dropdown
  document.addEventListener("click", function(e) {
    if (!e.target.closest(".dropdown") && !e.target.closest(".icon")) {
      dropdownContent.classList.remove("show");
    }
  });

  // Fungsi hamburger menu
  window.myFunction = function() {
    const nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  };

  // Cek tinggi dropdown untuk posisi atas/bawah (khusus desktop)
  document.querySelectorAll('.dropdown').forEach(drop => {
    const menu = drop.querySelector('.dropdown-content');

    drop.addEventListener('mouseenter', function() {
      if (!menu) return;

      // sementara tampil buat ukur tinggi
      menu.style.visibility = 'hidden';
      menu.style.display = 'block';

      const rect = menu.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom > windowHeight) {
        menu.classList.add("to-top");
      } else {
        menu.classList.remove("to-top");
      }

      // balikin lagi
      menu.style.visibility = '';
      menu.style.display = '';
    });
  });
});
