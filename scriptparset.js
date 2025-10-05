document.addEventListener("DOMContentLoaded", function() {
  const dropdownBtn = document.getElementById("ParameterSettingMcBtn");
  const dropdownContent = document.getElementById("SettingSubMenu");

  // Handle dropdown di HP 
  dropdownBtn.addEventListener("click", function(e) {
    if (window.innerWidth <= 600) { 
      e.preventDefault();
      dropdownContent.classList.toggle("show");
    }
  });

  document.addEventListener("click", function(e) {
    if (!e.target.closest(".dropdown")) {
      if (dropdownContent) dropdownContent.classList.remove("show");
    }
  });

  // Hamburger menu
  window.myFunction = function() {
    const nav = document.getElementById("myTopnav");
    nav.classList.toggle("responsive");
  };

  document.querySelectorAll('.dropdown').forEach(drop => {
  const menu = drop.querySelector('.dropdown-content');
  
  drop.addEventListener('mouseenter', function() {
    if (!menu) return;

    // sementara tampil buat cek tinggi
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
