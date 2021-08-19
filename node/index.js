const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const insert = `INSERT INTO people(name) values('MARCUS')`;

connection.query(insert);

let people = '';

connection.query('SELECT name FROM people', function (error, rows, fields) {
    if (error) throw error;
    console.log(rows)

    peolpe = rows.map(r => `<li>${r.name}</li>`)
        .join('')

  });

connection.end()

app.get('/', (req, res)=> {

    res.send(`<h1>Full Cycle</h1><ul>${peolpe}<ul>`)
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})