document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuButton = document.getElementById("toggleMenu");
    const offcanvasMenu = document.getElementById("offcanvasMenu");
  
    toggleMenuButton.addEventListener("click", function () {
      offcanvasMenu.classList.toggle("show");
    });
  
    // Cierra el menú si se hace clic fuera de él
    document.addEventListener("click", function (event) {
      if (!offcanvasMenu.contains(event.target) && offcanvasMenu.classList.contains("show")) {
        offcanvasMenu.classList.remove("show");
      }
    });
  });