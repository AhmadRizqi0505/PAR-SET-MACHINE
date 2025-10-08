// === Toggle Hamburger Menu ===
function myFunction() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// === Dropdown toggle for mobile ===
document.addEventListener("DOMContentLoaded", function () {
  // Toggle main dropdown
  document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle("open");
      }
    });
  });

  // Toggle sub-dropdown
  document.querySelectorAll(".dropdown-sub > a").forEach(link => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle("open");
      }
    });
  });
});
