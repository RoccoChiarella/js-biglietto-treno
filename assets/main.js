var chilometri = prompt('Inserisci quanti chilometri deve percorrere il treno');

var anni = prompt('Inserisci la tua età');

var prezzo = chilometri * 0.21;

if ((anni >= 18) && (anni < 65)) {
    document.getElementById('prezzo-biglietto').innerHTML = prezzo;
} else if (anni >= 65) {
    var prezzo_scontato = prezzo - (prezzo * 0.4);
    document.getElementById('prezzo-biglietto').innerHTML = prezzo_scontato;
} else if (anni < 18) {
    var prezzo_scontato = prezzo - (prezzo * 0.2);
    document.getElementById('prezzo-biglietto').innerHTML = prezzo_scontato;
}
