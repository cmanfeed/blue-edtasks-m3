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

function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function game(num) {
    return games[num];
}

app.get('/', (req, res) => {
    res.send('You are in the root!');
});

app.get('/randomgame', (req, res) => {
    res.send(`<h1>${game(randomMinMax(0, games.length))}</h1>`);
});

app.get('/games', (req, res) => {
    res.send(games);
});

app.get('/games/:id', (req, res) => {
    const id = req.params.id;
    if (id > games.length || id < 0) {
        res.send('Id não existente')
    } else {
        const game = games[id];
        res.send(game);
    }
});


app.listen(port, () => {
    console.info('Server está rodando!');
})