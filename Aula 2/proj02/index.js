const express = require('express');
const app = express();

const port = 3000;

const games = [
    'Metal Slug',
    'Super Mario World',
    'Sonic Colors',
    'Mario Kart 8',
    'Mortal Combat'
]

app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});

app.get('/games', (req, res) => {
    res.send(games);
});

app.get('/games/:id', (req, res) => {
    const id = req.params.id;
    const game = games[id];
    res.send(game);
});


app.listen(port, () => {
    console.info('Server está rodando!');
})