document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  // Add click event to the menu toggle button
  menuToggle.addEventListener("click", () => {
    // Toggle the "hidden" class for the mobile menu
    mobileMenu.classList.toggle("hidden");
  });
});
