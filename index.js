let maVariable = 'Hello World' //  Ptit commentaire
console.log(maVariable);
/*
Commentaire multiligne
*/ 
const test = 22;
console.log(test);
console.log(typeof(test));

let maVariable2 = maVariable.concat(' B2');
console.log(maVariable2);

// Fonction flêchée
const greet = (param) => {console.log('hello ' + param);}

// Fonction = () => {}

// callbacks
setTimeout(() => console.log('callback'), 3000)
console.log('avant fin timeout...');
