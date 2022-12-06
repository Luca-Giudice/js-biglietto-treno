// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// 1 Prednere l'elemnto DOM
// 2 Chiedere il numero di chilometri da percorrere 
// 3 chiedere l'età del passeggiero
// 4 Calcolare il prezzo del biglietto
// 5 Verificare eventuali sconti
// 6 Stamparlo in pagina

// 1 prendere l'elemnento dal DOM

const targetElement = document.getElementById('target');
let priceMessage = 'Il totale del biglietto è: ';

// 2 Chiedere il numero di di chilometri da percorrere
// 3 Chiedere l'età del passegero

const kms = parseInt(prompt('Quanti chilometri devi percorrere?', 50).trim();)
const age = parseInt(prompt ('Quanti anni hai?', 32).trim();)

// 4 Prezzo base
let price = kms * 0.21;

// 5 Verificare eventuali sconti
if(age >= 65){
    price = price * 0.6;

} else if(age < 18){
    price = price * 0.8;
}

targetElement.innerText = priceMessage + price.toFixed(2) + '€';







