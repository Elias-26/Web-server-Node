//despues de instalar express con (npm i express) podemos 
// refrescar nuestra pagina en chrome y veremos como un ligero cambio 
require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;//esto hace que en (package.json) se ingrese el comando "start":node app.js
//que hara que con solo colocar en la terminal un npm start sea suficiente para poder iniciar de nuevo nuestra pagina. 



//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });

//para servir contenido estatico 
app.use(express.static('public'));

//app.get('/', (req, res) => { //la funcion de flecha funciona igual que funtion normal
  //  res.render('home', {
    //    titulo: 'Curso de Node',
      //  Nombre: 'Elias Reynaga'
    //});
//});


//app.get('/generic', (req, res) => { //la funcion de flecha funciona igual que funtion normal

//    res.render('generic', {
//        titulo: 'Curso de Node',
//        Nombre: 'Elias Reynaga'
//    });
//});


//app.get('/elements', (req, res) => { //la funcion de flecha funciona igual que funtion normal

//    res.render('elements', {
//        titulo: 'Curso de Node',
//        Nombre: 'Elias Reynaga'
//    });
//});


app.get('*', (req, res) => { //la funcion de flecha funciona igual que funtion normal
    //El asterisco ayuda a que cualquier ruta en la pagina que no tenga algun contenido muestre un error(404 | page not found )
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

/*no olvidar que en consola colocar el comando npm start para que se vea 
los avances en angular  */ 