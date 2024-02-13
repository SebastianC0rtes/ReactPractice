//Desestructuración de objetos
//Asignación desestructurante

const personas = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldadoooooo'
};

// console.log(personas.nombre);
// console.log(personas.edad);
// console.log(personas.clave);

// const { nombre:Identificacion } = personas;
// console.log(Identificacion);

const retornaPersona = ( usuario ) => {
    // console.log(usuario);

    const { nombre, edad, clave } = personas;
    // console.log( nombre );
    // console.log( edad );
    // console.log( clave );
};
retornaPersona( personas );

const retornaPersona2 = ({nombre,edad,rango = 'Capitan'}) => {
    console.log(nombre);
    console.log(edad);
    console.log(rango)};

retornaPersona2( personas );
