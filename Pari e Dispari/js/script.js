let pari_Dispari = prompt('Pari o Dispari');
let numero_utente = parseInt(prompt('Inserisci un numero tra 1 e 5'));
console.log(numero_utente)

// genero numero randomico per computer

function generateNumRandom(min, max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

let numero_pc = generateNumRandom(1, 5);

console.log(numero_pc)

// faccio somma numero utente + numero computer

// function somma(numero_utente, numero_pc){
//     let sommaTot = numero_utente + numero_pc
//     console.log(sommaTot)
//     return sommaTot;

// }

let sommaTot = numero_utente + numero_pc; 
console.log(sommaTot);

// definiamo se la somma è PARI o DISPARI

function pariDispari(sommaTot){
    if(sommaTot % 2 == 0){
        return "pari";
    
    }
    else{
        return "dispari";
       
    }
}

let result = pariDispari(sommaTot);

if(pari_Dispari == result){
    alert('hai vinto')
}
else{
    alert('hai perso')
}



