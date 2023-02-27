'use strict';

// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo


let insertNumber = Number (prompt('Inserisci un numero'));


if (insertNumber % 2 == 1){
    console.log('Numero inserito maggiorato di 1: ', insertNumber +1);
    
}  else {
    console.log('Numero inserito pari: ', insertNumber);

}