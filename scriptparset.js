document.addEventListener("DOMContentLoaded", function() {
  const dropdowns = document.querySelectorAll(".dropdown > a");
  const subDropdowns = document.querySelectorAll(".dropdown-sub > a");

  // === Fungsi hamburger ===
  window.myFunction = function() {
    const nav = document.getElementById("myTopnav");
    nav.classList.toggle("responsive");
  };

  // === Toggle dropdown utama (Parameter Setting MC) ===
  dropdowns.forEach(btn => {
    btn.addEventListener("click", function(e) {
      if (window.innerWidth <= 600) {
        e.preventDefault();
        const content = this.nextElementSibling;

        // Tutup dropdown lain
        document.querySelectorAll(".dropdown-content.show").forEach(menu => {
          if (menu !== content) menu.classList.remove("show");
        });

        content.classList.toggle("show");
      }
    });
  });

  // === Toggle submenu (MC 30, MC 40, dll) ===
  subDropdowns.forEach(btn => {
    btn.addEventListener("click", function(e) {
      if (window.innerWidth <= 600) {
        e.preventDefault();
        const submenu = this.nextElementSibling;
        
        // Tutup submenu lain di level yang sama
        this.parentElement.parentElement
          .querySelectorAll(".dropdown-submenu.show")
          .forEach(sm => {
            if (sm !== submenu) sm.classList.remove("show");
          });

        submenu.classList.toggle("show");
      }
    });
  });

  // Tutup dropdown jika klik di luar
  document.addEventListener("click", function(e) {
    if (window.innerWidth <= 600 &&
        !e.target.closest(".dropdown") &&
        !e.target.closest(".icon")) {
      document.querySelectorAll(".dropdown-content.show, .dropdown-submenu.show")
        .forEach(menu => menu.classList.remove("show"));
    }
  });
});
