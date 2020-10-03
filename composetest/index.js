const express = require('express');
var mysql = require('mysql');
const app = express();

const ip = process.env.IP || "127.0.0.1";
const port =  process.env.PORT || 80;
const pass =  process.env.PASS || "12345";
const user =  process.env.USER || "root";
app.get('/', (req, res) => {

    res.send( "Hola")
});
app.get('/datos', (req, res) => {

    var connection = mysql.createConnection({
        host: ip,
        port: 3306,
        user: user,
        password: pass,
        database: 'practica'
    });
    
    connection.connect(function(error){
        if(error){
            console.log('Error');
        }else{
            console.log('Connected to the database!');
        }
    });   

    connection.query(`select * from cosa;`, function (err, result) {
        if (err) {
            console.log(err)
            res.status(500).send({ data: 'fail', error: err });
        } else
            res.status(200).send({ data: result });
    });

    connection.end();

});
app.listen(port, () => {

    console.log(`corriendo en el puerto 80`);
});
