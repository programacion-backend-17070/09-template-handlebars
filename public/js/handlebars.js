// AQUI HACEMOS QUERY A LA BASE DE DATOS

const movies = [
  { id: 1, name: 'Joker' },
  { id: 2, name: 'Good Fellas' },
  { id: 3, name: 'Matrix' },
  { id: 4, name: 'Shrek 2' }]

const nombre = "Lalo"

// obtener template del DOM
const template = document.getElementById("template").innerHTML

// Compilar template
const compile = Handlebars.compile(template)

// combinar template y datos en un texto resultante
// en formato HTML
const result = compile({ nombre, movies })

// Actualizar el DOM
document.getElementById("app").innerHTML = result
console.log(result)
