/*
#TRACCIA:
quanto manca:  Stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora. Oltre a Math ci sono anche altre funzionalitá di javascript (built-in) che possaimo usare senza installazioni come ad esempio le funzioni dell'oggetto Date.
*/

//Get date and save it in a variable
const date = new Date();
console.log(date);

//Get minutes from date and save it in a variable
const minutes = date.getMinutes();
console.log(minutes);

//Communicate to the user minutes remaining until the next hour
alert(`Mancano ${60 - minutes} minuti allo scoccare della prossima ora!`);

