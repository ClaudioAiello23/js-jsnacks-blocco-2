'use strict';

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi
//  e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.


const nomi = ['Claudio', 'Luca', 'Diego'];
const cognomi = ['Rossi', 'Bianchi', 'Neri'];


const invitati = [...nomi, ...cognomi];


for (let i = 0; i < 3; i++){
        
    console.log(nomi[i]+' '+ cognomi[i]);

}

// snack 3 da correggere

