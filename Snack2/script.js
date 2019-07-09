// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


var parola1, parola2, elemento, parolaPiuCorta, parolaPiuLunga;

elemento = document.getElementById('mio_id');
elemento1 = document.getElementById('mio_id1');

parola1 = prompt("Inserisci la prima parola");

parola2 = prompt("Inserisci la seconda parola");

if (parola1.length > parola2.length) {
  parolaPiuLunga = parola1;
  parolaPiuCorta = parola2;

  elemento.innerHTML = "La parola più lunga è : " + parolaPiuLunga;
  elemento1.innerHTML = "La parola più corta è : " + parolaPiuCorta;
} else if (parola2.length > parola1.length) {
  parolaPiuLunga = parola2;
  parolaPiuCorta = parola1;

  elemento.innerHTML = "La parola più lunga è : " + parolaPiuLunga;
  elemento1.innerHTML = "La parola più corta è : " + parolaPiuCorta;
} else {
  elemento.innerHTML = "Le parole hanno stessa lunghezza";
}
