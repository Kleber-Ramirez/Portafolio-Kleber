function suggestActivities() {
    const mood = document.getElementById('moodSelect').value;
    let suggestions = "";

    switch (mood) {
        case "feliz":
            suggestions = "¡Genial! Aquí tienes algunas actividades para mantener tu buen ánimo: salir a caminar, escuchar música alegre, o reunirte con amigos.";
            break;
        case "triste":
            suggestions = "Lo siento que te sientas así. ¿Qué tal si intentas hacer algo relajante como leer un libro, ver una película inspiradora, o meditar?";
            break;
        case "estresado":
            suggestions = "Tómate un respiro. Puedes intentar hacer ejercicio, practicar yoga, o simplemente darte un tiempo para ti mismo.";
            break;
        case "aburrido":
            suggestions = "Es hora de explorar algo nuevo. Prueba aprender algo nuevo, hacer un rompecabezas, o dar un paseo por un lugar diferente.";
            break;
        case "emocionado":
            suggestions = "¡Aprovecha esa energía! Sal a hacer deporte, comienza un nuevo proyecto creativo, o organiza una salida con amigos.";
            break;
        default:
            suggestions = "Por favor selecciona tu estado de ánimo para obtener sugerencias.";
    }

    document.getElementById('suggestions').innerText = suggestions;
}
