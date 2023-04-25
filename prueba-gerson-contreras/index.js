const http = require('http');
const server = http.createServer((req, res)=>{
res.status = 200;
res.setHeader('Content-Type', 'text/plain');
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
const conexion = require("./select");
const conexion2 = require("./create");
const conexion3 = require("./update");
const conexion4 = require("./delete");