


// definizione array
var primo = [2, 3, 4, 5];
var secondo = [1, 45, 3, 34, 22, 198];

console.log(primo, secondo);

// funzione per verificare se la lunghezza degli array è la stessa
function aggiunta(x, y) {
  // in caso contrario aggiungo al piu piccolo
  if(x.length < y.length) {
    for (var i = x.length ; i < y.length; i++) {
      var numeroGenerato = Math.floor(Math.random() * (100));
      x.push(numeroGenerato);
    }
  } else if(y.length < x.length) {
    for (var i = y.length ; i < x.length; i++) {
      var numeroGenerato = Math.floor(Math.random() * (100));
      y.push(numeroGenerato);
    }
  }
}

aggiunta(primo, secondo);
console.log(primo, secondo);
