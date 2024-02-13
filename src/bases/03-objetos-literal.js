//Objetos literales

const persona = {
    nombre: 'Sebastian',
    apellido: 'Cortes',
    edad: 25,
    direccion:{
        ciudad: 'Armenia',
        zip: 321456,
        lat: 987654,
        log: 654321
    }
};

// console.log({persona})
// console.table(persona)

const persona2 = { ...persona };

console.log(persona);
console.log(persona2);