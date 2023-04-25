const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3306;
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'administrador',
  password: 'xPuhupaIhCpz0fyn',
  database: 'prueba_farmacia'
})
const conectar = () =>{
    connection.connect((err) => {
        if (err) throw err;
        console.log('Conexión exitosa a la base de datos MySQL');
      })
}
//Agregar medicamento
connection.query('INSERT INTO medicamentos (nombre_medicamento, proveedor_medicamento, costo_medicamento, precio_medicamento) VALUES ("Loratadina", "Sandoz Farmacéutica", "$75,04", "$0,65")', function(error, results){
    if(error)
        throw error;
    console.log('¡Registro agregado!', results);
});