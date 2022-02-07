const express = require('express');
const path = require('path')
const app = express();

const { engine } = require('express-handlebars');
const movies = require('./movies')

const PORT = process.env.PORT || 8080

// decirle a express que vamos a usar un engine lalo (custom)
// el engine se ejecuta cada que renderizamos un template con res.render
// app.engine("lalo", engine)
// // decirle a express que los templates .lalo estaran en la carpeta ./views y que utilice el engine lalo
// app.set("views", "./views")
// app.set("view engine", "lalo")

app.engine("hbs", engine({
  layoutDir: path.join(__dirname, 'views/layouts'),
  defaultLayout: 'index',
  extname: 'hbs'
}))
app.set("view engine", "hbs")

app.use("/static/", express.static(path.join(__dirname, "public")))

// app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public/index.html")))

// const instancia = new Contenedor()
// app.get("/api/productos", (req, res) => instancia.getProductos().then(data => res.send(data)))
// res.render
// primer parametro es el nombre del template
// segundo parametro son los datos a combinar
// app.get("/", (req, res) => res.render("index", { title: "Este es un titulo", message: "Este es un mensaje" }))
app.listen(
  PORT,
  () => console.log(`listening on http://localhost:${PORT}`)
)