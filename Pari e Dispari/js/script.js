let pari_Dispari = prompt('Pari o Dispari');
let numero_utente = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numero_utente)

// genero numero randomico per computer

function generateNumRandom(min, max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

let numero_computer = generateNumRandom(1, 5);

console.log(numero_computer)

// faccio somma numero utente + numero computer

function somma(numero_utente, numero_computer){
    let sommaTot = numero_utente + numero_computer
    console.log(sommaTot)
    return sommaTot;

}

let sommaTot = somma(numero_utente, numero_computer);

// definiamo se la somma è PARI o DISPARI

function pariDispari(numero){
    if(numero % 2 == 0){
        return true;
        // alert('Utente Vince')
    }
    else{
        return false;
        // alert('Computer VInce')
    }
}

let numero = pari_Dispari;
let result = pariDispari(numero);

if(result === true){
    alert('numero pari')
}
else{
    alert('numero dispari')
}

// pariDispari(sommaTot, pari_Dispari)

