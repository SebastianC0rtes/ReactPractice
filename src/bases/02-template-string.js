//Temaplate String 


const nombre = 'Sebastian'
const apellido = 'Cortes'

const nombreCompleto = nombre + ' '+ apellido
const nombreC = `${nombre} ${apellido}`

console.log(nombreCompleto)
console.log(nombreC)

function getSaludo(nombre){
    return 'Hola' +' '+ nombre
}

console.log ( `Este es un texto: ${ getSaludo(nombreCompleto) }` );