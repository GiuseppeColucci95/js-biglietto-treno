/*
Gioco del pari/dispari
Chiedere all'utente se sceglie pari o dispari e un numero da 1 a 9
Generare un numero random da 1 a 9
Fare la somma dei due numeri e comunicare all'utente se ha vinto oppure no
*/


//Ask to the user id even or odd and save it in a variable
const userChoice = prompt("Scegli tra pari e dispari [es: pari, dispari]");
console.log("User Choice: ", userChoice);

//Ask a number to the user and save it in a variable
const userNumber = Number(prompt("Scegli un numero da 1 a 9 [es: 1, 2, ..., 9]"));
console.log("User Choice: ", userNumber);

//Generate a random number between 1 and 9 and save it in a variable
const randomNumber = Math.floor((Math.random() * 9) + 1);
console.log("Computer Choice: ", randomNumber);

//Calculate sum betweeen user number and generated random number
const sum = userNumber + randomNumber;
console.log("Sum: ", sum);

if (((userChoice == "pari") && (sum % 2 == 0)) || ((userChoice == "dispari") && (sum % 2 != 0))) {
  alert("Hai vinto!");
} else {
  alert("Hai perso!");
}



