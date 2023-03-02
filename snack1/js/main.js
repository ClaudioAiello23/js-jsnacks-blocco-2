'use strict';

// // Chiedi all'utente il numero 5 volte e fai la somma - CON CICLO WHILE

// Imposto una somma di partenza uguale a zero
let somma= 0;

// Imposto un inserimento dell'utente con valore partenza = 1
let insert = 1;

/*lancio un ciclo While che imposta la condizione di chiedere per 5 volte
l'operazione ad un utente*/
while (insert <= 5){
  const input = Number(prompt('inserisci un numero' ));
  console.log(input);
  if (!isNaN(input)){
    somma += input;
    insert++;
  }
}

// richiedo un alert che stampi la somma dei 5 numeri inseriti
alert(somma);





