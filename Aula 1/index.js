/*
const calculadora = require('./calculadora');

console.log(calculadora.sum(1, 3));
console.log(calculadora.sub(5, 2));
console.log(calculadora.mul(5, 2));
console.log(calculadora.div(10, 2));
*/

const http = require('http');

http.createServer(function (req, res) {
    res.end('<h1>Ola</h1>');
}).listen(3000);

console.log('Meu servidor está rodando.');