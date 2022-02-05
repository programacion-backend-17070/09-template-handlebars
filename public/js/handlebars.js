var movies = [
  { id: 1, name: 'Joker' },
  { id: 2, name: 'Good Fellas' },
  { id: 3, name: 'Matrix' } 
];
var nombre = "<strong>Lalo</strong>"

var template = document.getElementById("template").innerHTML
var compile = Handlebars.compile(template)
var result = compile({ nombre, movies })
document.getElementById("app").innerHTML += result
console.log(template)