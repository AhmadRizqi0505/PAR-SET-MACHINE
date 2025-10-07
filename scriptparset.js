document.addEventListener("DOMContentLoaded", function() {
  const dropdownBtn = document.getElementById("ParameterSettingMcBtn");
  const dropdownContent = document.getElementById("SettingSubMenu");

  // Klik dropdown di HP
  dropdownBtn.addEventListener("click", function(e) {
    if (window.innerWidth <= 600) {
      e.preventDefault();
      dropdownContent.classList.toggle("show");
    }
  });

  // Klik di luar → tutup dropdown
  document.addEventListener("click", function(e) {
    if (!e.target.closest(".dropdown")) {
      dropdownContent.classList.remove("show");
    }
  });

  // Fungsi hamburger menu
  window.myFunction = function() {
    const nav = document.getElementById("myTopnav");
    if (nav.classList.contains("responsive")) {
      nav.classList.remove("responsive");
    } else {
      nav.classList.add("responsive");
    }
  };
});
