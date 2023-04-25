const http = require('http');
const server = http.createServer((req, res)=>{
res.status = 200;
res.setHeader('Content-Type', 'text/plain; charset=utf-8');
res.end('¡Bienvenido/a!');
});
server.listen(80, () => {
    console.log('Server on Port 80');
});
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3306;
// Cargar otros .js
const seleccionar = require("./select");
const agregar = require("./create");
const editar = require("./update");
const eliminar = require("./delete");
/*/ Modelo de usuario
const connection = mysql.createConnection({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
/*/