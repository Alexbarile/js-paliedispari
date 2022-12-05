let pariDispari = prompt('Pari o Dispari');
let numero_utente = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numero_utente)

function generateNumRandom(min, max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

let numero_computer = generateNumRandom(1, 5);

console.log(numero_computer)

function somma(numero_utente, numero_computer){
    let sommaTot = numero_utente + numero_computer
    console.log(sommaTot)
    return sommaTot;

}

let sommaTot = somma(numero_utente, numero_computer);