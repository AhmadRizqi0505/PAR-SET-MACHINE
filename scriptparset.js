
document.addEventListener("DOMContentLoaded", function() {
  const dropdownBtn = document.getElementById("ParameterSettingMcBtn");
  const dropdownContent = document.getElementById("SettingSubMenu");

  dropdownBtn.addEventListener("click", function(e) {
    if (window.innerWidth <= 600) { // aktif cuma di HP
      e.preventDefault();
      dropdownContent.classList.toggle("show");
    }
  });

  document.addEventListener("click", function(e) {
    if (!e.target.closest(".dropdown")) {
      dropdownContent.classList.remove("show");
    }
  });

  window.myFunction = function() {
    const nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  };
});
