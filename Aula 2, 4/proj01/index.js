const express = require('express');
const app = express();

const port = 3000;

const filmes = [
    'As Crônicas de Nárnia',
    'O Senhor dos Anéis',
    'O Hobbit'
];

// Get / Home
app.get('/', (req, res) => {
    res.send("Bem vindos ao site de lista de filmes!");
});

// Get /filmes listando todos
app.get('/filmes', (req, res) => {
    res.send(filmes)
})

// Get /filmes apenas o id
app.get('/filmes/:id', (req, res) => {
    const id = req.params.id;
    const filme = filmes[id];
    res.send(filme)
})

app.listen(port, () => {
    console.info(`App está rondando na porta em: http://localhost:${port}/`);
});