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
//Eliminar medicamentos
connection.query("DELETE from medicamentos WHERE id_medicamento = 2", function(error, eliminar){
    if(error)
        throw error;
    console.log('¡Registro eliminado!', eliminar);
});