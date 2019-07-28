// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')


// Inicializar variables
var app = express();

// Body parser

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// Importar rutas
var appRoutes = require('./routes/app');
var usuariosRoutes = require('./routes/usuarios');
var loginRoutes = require('./routes/login');
var hospitalesRoutes = require('./routes/hospitales');
var medicosRoutes = require('./routes/medicos');
var busquedasRoutes = require('./routes/busquedas');
var uploadRoutes = require('./routes/upload');
var imgRoutes = require('./routes/img');



// Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true }, (err, res) => {

    if (err) throw err;
    console.log('Base de datos: \x1b[36m%s\x1b[0m', 'online');
})

// Rutas
app.use('/usuario', usuariosRoutes);
app.use('/hospital', hospitalesRoutes);
app.use('/medico', medicosRoutes);
app.use('/login', loginRoutes);
app.use('/busqueda', busquedasRoutes);
app.use('/img', imgRoutes);
app.use('/upload', uploadRoutes);

app.use('/', appRoutes);

// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'onlline');
    console.log('Node/Express: \x1b[36m%s\x1b[0m', 'online');
});