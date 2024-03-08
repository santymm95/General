document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a elementos HTML
    var openModal = document.getElementById("openModal");
    var closeModal = document.getElementById("closeModal");
    var modal = document.getElementById("videoModal");

    // Ocultar el modal al cargar la página
    modal.style.display = "none";

    // Mostrar el modal al hacer clic en el botón "Abrir Video"
    openModal.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Cerrar el modal al hacer clic en la "X" o en el fondo oscuro
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
