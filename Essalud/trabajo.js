function calculandoImc() {
  let peso, altura, IMC;

  peso = Math.round(prompt("Ingresa tu peso (kg):"));
  altura = prompt("Ingresa tu altura (m):");
  IMC = peso / (altura * altura);

  if (IMC < 18) alert("Peso insuficiente");
  else if (IMC >= 18 && IMC < 25) alert("Peso normal");
  else if (IMC >= 25 && IMC < 30) alert("Peso elevado");
  else if (IMC > 30) alert("Usted tiene sobrepeso");
  else alert("No ingreso sus datos");
}

function calcularTemperatura() {
  let temp;
  temp = prompt("Ingresa tu temperatura en grados centígrados: ");

  if (temp < 27) {
    alert("La temperatura ingresada es incorrecta.");
  } else if (temp < 36.5) {
    alert("Tu temperatura es menor a la normal.");
  } else if (temp >= 36.5 && temp <= 37.5) {
    alert("Tu temperatura es normal.");
  } else if (temp > 37.5 && temp <= 38) {
    alert("Tienes calentura.");
  } else if (temp > 38 && temp <= 39) {
    alert("Tienes fiebre.");
  } else if (temp > 39 && temp <= 45) {
    alert("Tienes fiebre grave.");
  } else if (temp > 45) {
    alert("La temperatura ingresada es incorrecta.");
  }
}
function calcularRitmoCardiaco() {
  let edad = parseInt(prompt("Ingresa tu edad:"));
  let pulsaciones = parseInt(prompt("Ingresa tus pulsaciones por minuto:"));

  if (edad >= 3 && edad <= 4) {
    if (pulsaciones >= 80 && pulsaciones <= 120) {
      alert("Tu ritmo cardíaco es normal.");
    } else {
      alert("Tu ritmo cardíaco es anormal.");
    }
  } else if (edad >= 7 && edad <= 9) {
    if (pulsaciones >= 70 && pulsaciones <= 110) {
      alert("Tu ritmo cardíaco es normal.");
    } else {
      alert("Tu ritmo cardíaco es anormal.");
    }
  } else if (edad >= 10) {
    if (pulsaciones >= 60 && pulsaciones <= 100) {
      alert("Tu ritmo cardíaco es normal.");
    } else {
      alert("Tu ritmo cardíaco es anormal.");
    }
  } else {
    alert("Edad ingresada no válida.");
  }
}






  