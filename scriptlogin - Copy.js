document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Contoh username & password yang valid
  if (username === "Citra" && password === "Citra2025@@") {
  const btn = document.querySelector(".button");
	btn.classList.add("button--loading");
	
	  setTimeout(() => {
		  window.location.href = "Beranda.html";
		}, 2000);
	  } else {
		alert("Username atau password salah!");
	
	window.addEventListener("pageshow", function(event) {
    const button = document.querySelector(".button");
    button.classList.remove("button--loading");
  });
  }

});
