function calculateCompatibility() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    if (name1 === "" || name2 === "") {
        document.getElementById('result').innerText = "Por favor, ingrese ambos nombres.";
        return;
    }

    const compatibility = Math.floor(Math.random() * 101);
    let message = "";

    if (compatibility > 90) {
        message = "¡Esta es tu media naranja! Tienen mucha compatibilidad.";
    } else if (compatibility > 70) {
        message = "Posiblemnete te quiera comó un buen amigo..";
    } else if (compatibility > 50) {
        message = "Tienen una compatibilidad moderada.";
    } else if (compatibility > 30) {
        message = "La compatibilidad es baja.";
    } else {
        message = "No parecen muy compatibles.";
    }

    document.getElementById('result').innerHTML = `${compatibility}% - ${message}`;
}
