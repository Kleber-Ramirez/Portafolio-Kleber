document.addEventListener("DOMContentLoaded", function () {
    // ✅ Código del menú hamburguesa
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // ✅ Código para manejar el envío del formulario
    const form = document.querySelector("form");
    if (form) { // Evita errores si el formulario no está en la página
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Evita que la página se recargue

            fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: { "Accept": "application/json" }
            })
            .then(response => {
                if (response.ok) {
                    alert("Tu mensaje ha sido enviado con éxito. ¡Gracias por contactarme!");
                    form.reset();
                } else {
                    alert("Hubo un problema al enviar el mensaje. Inténtalo nuevamente.");
                }
            })
            .catch(error => {
                alert("Error de conexión. Verifica tu internet.");
            });
        });
    }
});
