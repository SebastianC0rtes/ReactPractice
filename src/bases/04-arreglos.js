//Arreglos

// const arreglo = new Array();
const arreglo = [1,2,3,4];
const arreglo2 = [...arreglo,5];

// arreglo.push(1); No usar porque modifica el arreglo inicial

const arreglo3 = arreglo2.map( function(numero){
    return numero*2;
} )
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);