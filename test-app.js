const express = require('express');

const app = express();

const PORT = process.env.PORT || 8881;

app.get('/', function(req, res){
    return res.send(` process id ${process.pid} - PORT ${PORT} `)
})

app.listen(PORT)

console.log('ON PORT ' + PORT);