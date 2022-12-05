let parola = prompt('Inserisci una parola');

function palindroma(par){
    let parInversa = par.split('').reverse().join('');
    return parInversa;
}

let parolaInversa = palindroma(parola);

if(parola == parolaInversa){
    alert('La parola è palindroma');
}
else{
    alert('La parola non è palindroma');
}