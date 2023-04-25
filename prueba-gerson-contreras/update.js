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
//Actualizar medicamento
connection.query("UPDATE medicamentos SET nombre_medicamento = 'Loratadina' WHERE id_medicamento = '4'", function(error, actualizar){
    if(error)
        throw error;
    console.log('¡Registro actualizado!', actualizar);
});