function showNavigationMenu() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");

  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    console.log("Button clicked");
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });

  document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      navMenu.classList.remove("show");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 721) {
      navMenu.classList.remove("show");
    }
  });
}

showNavigationMenu();