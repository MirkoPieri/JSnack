// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

var inserimentoUtente = parseInt(prompt("Inserisci un numero"));

// funzione
function paroDisparo(str) {
  // switch per definizione paro o disparo
  switch (true) {
    case str % 2 === 0:
      console.log(str);
      break;
    default:
      console.log(str + 1);
  }
}

// richiamo della funzione
paroDisparo(inserimentoUtente);
