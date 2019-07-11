// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di invitati.

// array di nomi e cognomi
var nomi = ["Giuseppe","Marco", "Maria", "Susanna", "Francesca", "Alberto"];
var cognomi = ["Rossi", "Verdi", "Bianchi", "Pieri", "Notazio", "Gialli"];

// array vuoto per nome e cognome generati
var listaInvitati = [];

// funzione per popolare array vuoto
function generatore(x, y) {
  var nomeCasuale = Math.floor(Math.random() * (x.length));
  var cognomeCasuale = Math.floor(Math.random() * (y.length));
  console.log(nomeCasuale);
  console.log(cognomeCasuale);

  var nomeInvitato = x[nomeCasuale];
  var cognomeInvitato = y[cognomeCasuale];

  listaInvitati.push(nomeInvitato + " " + cognomeInvitato);
}

// chiamata della funzione
generatore(nomi, cognomi);

// stampa array con nome e cognome generati
console.log(listaInvitati);
