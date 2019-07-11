// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

var numeriInteri = [];

// ciclo per popolare array
for (var i = 0; i < 9; i++) {
  numeriInteri.push(i + 1);
}

console.log(numeriInteri);

var somma = 0;

// funzione per la somma
function sommaDispari(x) {

  // ciclo per somma numeri dispari
  for (var i = 0; i < x.length; i++) {
    if (i % 2 != 0) {
      somma += x[i];
    } else {
      console.log(x[i] + " è in posizione pari" + " posizione: " + i);
    }
  }
}

// richiamo della funzione
sommaDispari(numeriInteri);

// stampa della funzione
console.log(somma);
