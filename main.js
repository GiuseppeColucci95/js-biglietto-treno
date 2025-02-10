/* 
#TRACCIA
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//Ask user for number of km to do and save it in a variable
const chilometers = Number(prompt("Quanti chilometri vuoi percorrere? Inserisci un numero..."));
console.log(chilometers);

//Ask user for his age and save it in a variable
const userAge = Number(prompt("Quanti anni hai? Inserisci un numero..."));
console.log(userAge);

//Save costs and discounts in a variable
const chilometerCost = 0.21;
const youngDiscount = 20;
const oldDiscount = 40;

//Calculate trip cost and save it in a variable
const tripCost = chilometers * chilometerCost;
console.log(`Trip cost not discounted: ${tripCost.toFixed(2)}`);

//Set a variable for discounted trip cost
let discountedTripCost = tripCost;

//Calculate discount (if necessary)
if (userAge < 18) {
  discountedTripCost = discountedTripCost - (discountedTripCost * 20 / 100);
  console.log(`Under 18, trip cost: ${discountedTripCost.toFixed(2)}`);
} else if (userAge > 65) {
  discountedTripCost = discountedTripCost - (discountedTripCost * 40 / 100);
  console.log(`Over 65, trip cost: ${discountedTripCost.toFixed(2)}`);
}

//Communicate final trip cost to the user

