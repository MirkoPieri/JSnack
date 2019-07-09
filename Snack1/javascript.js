
var numero1, numero2, elemento;

numero1 = parseInt(prompt("Inserisci il primo numero"));

numero2 = parseInt(prompt("Inserisci il secondo numero"));

elemento = document.getElementById('mio_id');

if (numero1 > numero2) {
  elemento.innerHTML = numero1;
} else if (numero2 > numero1) {
  elemento.innerHTML = numero2;
} else {
  elemento.innerHTML = "I numeri sono uguali";
}
