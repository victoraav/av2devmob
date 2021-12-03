const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'game'
});

const app = express();

app.get('/pontuacao', function(req, res) {
    connection.getConnection(function (err, connection) {
        connection.query('SELECT * FROM pontuacao', function (error, results, fields) {
            res.send(results)
        });
    });
  });

  app.listen(3000, () => {
    console.log('Vai no navegador e entra em http://localhost:3000/pontuacao para ver a pontuacao salva');
   });




