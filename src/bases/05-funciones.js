//Funciones 
// No hacer esto
// function saludar (nombre){
//     return `Hola, ${nombre}`
// };
// saludar = 30;

const saludar = function( nombre ){
    return `Hola ${nombre}`
};

//Funciones flecha

const saludar2 = ( nombre )=> {
    return `Hola ${nombre}`
};

const saludar3 = ( nombre )=> `Hola ${nombre}`;
const saludar4 = ( )=> `Hola Juan`;

// console.log(saludar3('Sebastian'));
// console.log(saludar4('Sebastian'));

const getUser = () => {
    return {
        Uid: 'ABCD1546',
        username: 'mamerto'
    }
};
const getUser2 = () => ({
        Uid: 'ABCD1546',
        username: 'mamerto'
});

// console.log(getUser())
// console.log(getUser2())

//Tarea
//Transformar a funcion flecha 
//Tiene que retornar un objeto implicito 
//Pruebas
function getUsuarioArchivo ( nombre ) {
    return {
        uid: 'ABC456',
        username: nombre
    }
};

const usuarioActivo = getUsuarioArchivo ('Fernando');
console.log ( usuarioActivo );

//Funcion Flecha
const getUsuarioArchivoFlecha = ( nombre )=> ({
        uid: 'ABC456',
        username: nombre
    });

const nombreActivo = getUsuarioArchivoFlecha('Sebitas');
console.log( nombreActivo )

