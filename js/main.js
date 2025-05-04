// Element selectors
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menu-toggle"); // Add this line

// Scroll effect
window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 0;

  // Header and logo styling
  header?.classList.toggle("bg-white", isScrolled);
  header?.classList.toggle("shadow-[0_0_4px_rgb(14_55_54_/_15%)]", isScrolled);
  logo?.classList.toggle("text-black", isScrolled);
  hamburger?.classList.toggle("text-black", isScrolled);
  menu?.classList.toggle("text-black", isScrolled);
  menu?.classList.toggle("text-[#ff2c1f]", !isScrolled);

  // Uncheck menu toggle when scrolled
  if (menuToggle?.checked) {
    menuToggle.checked = false;
  }
});
