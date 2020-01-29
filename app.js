var db = require('./models/db');
const express = require( 'express' );
const routes = require('./routes');
const nunjucks = require( 'nunjucks' );
const bodyParser = require('body-parser'); 
const morgan = require("morgan")

const app = express(); // crea una instancia de una aplicación de express

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates

/****** MIDDLEWARES ******/

// Middleware static: serve images, CSS files, and JavaScript files in a directory named public
app.use(express.static('./stylesheets'));
app.use(morgan("tiny"))
// Middleware body-parser extract the entire body portion of an incoming request stream and exposes it on req.body
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);





db.sync({logging: false, force: false})
.then(function () {
    // asegurate de reemplazar el nombre de abajo con tu app de express
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);