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
//Seleccionar
connection.query('SELECT * FROM medicamentos',function(err, filas){
    if(err){
      throw err;
    } else{
      filas.forEach(fila =>{
          console.log(filas);
      });
    } 
  });