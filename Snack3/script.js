// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

var numero, somma;
somma = 0;
var elemento = document.getElementById('mio_id');

// ciclo for
// for (var i = 1; i <= 5; i++) {
//   numero = parseInt(prompt("Inserisci un numero"));
//   somma = somma + numero;
// }
//
//
// elemento.innerHTML = "La somma è " + somma + ".";


// ciclo while
var j = 0;

while (j != 5) {
  numero = parseInt(prompt("Inserisci un numero"));
  somma = somma + numero;
  j++;
}

elemento.innerHTML = "La somma è " + somma + ".";
