const express = require('express');
const path = require('path');
const app = express();

const { engine } = require('express-handlebars');

const movies = require('./movies')

// const engine = require('./engine');

const PORT = process.env.PORT || 8080

app.set('view engine', 'hbs');
app.engine('hbs', engine({
  layoutsDir: path.join(__dirname, 'views/layouts'),
  extname: 'hbs',
  defaultLayout: 'index'
}));
// decirle a express que vamos a usar un engine ntl (custom)
// el engine se ejecuta cada que renderizamos un template con res.render
// app.engine("ntl", engine)

// decirle a express que los templates .ntl estaran en la carpeta ./views y que utilice el engine ntl
// app.set('views', './views'); // especifica el directorio de vistas
// app.set('view engine', 'ntl')

app.use("/static/", express.static(path.join(__dirname, "public")))

// app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public/index.html")))

// app.get("/", (req, res) => res.render("index", { title: "Titulo", message: "message" }))

app.get("/", (req, res) => res.render("main", { movies, name: 'Lalo' }))

app.listen(
  PORT,
  () => console.log(`listening on http://localhost:${PORT}`)
)