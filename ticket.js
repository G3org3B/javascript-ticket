
// richiesta utente - numero km e età //

var age = prompt("Quanti anni hai?");

var km = prompt("Quanti km devi percorrere?");

var ticket = 0.21; //priceticket 1km//

// calcolo prezzo base del viaggio //

var totalticket = km * ticket;
console.log(km * ticket);

// Applicazione degli sconti //

 var ticketsale = ticket * km;

// sconto 20% //
if (age <= 18) {
  ticketsale = ((ticket / 100) * 80) * km;
  console.log((ticket / 100) * 80) * km;

}
// sconto 40% //
else if (age >= 64) {
  ticketsale = ((ticket / 100) * 60) * km;
  console.log((ticket / 100) * 60) * km;

}

// prezzo scontato //
var finalticket = ticketsale * km;

document.getElementById("finalticket").innerHTML = ("Il suo prezzo totale compreso di sconto è: " + finalticket + " &#8364")
