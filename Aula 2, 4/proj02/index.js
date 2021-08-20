const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;

const games = [
    'Metal Slug',
    'Super Mario World',
    'Sonic Colors',
    'Mario Kart 8',
    'Mortal Combat'
]

const msgInicio = [
    'Bem vindos',
    'Ola amigos, bem vindo ao servidor',
    'Servidor de jogos',
    'Este é meu servidor',
];

function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function frase(num) {
    return msgInicio[num];
}

//GET / home
app.get('/', (req, res) => {
    res.send(`<h1>${frase(randomMinMax(0, msgInicio.length))}</h1>`);
});

app.get('/games', (req, res) => {
    res.send(games);
});

app.get('/games/:id', (req, res) => {
    const id = req.params.id - 1;
    const game = games[id];
    if (game) {
        res.send(game);
    } else {
        res.send('Jogo não encontrado.');
    }
});

app.post('/games', (req, res) => {
    const game = req.body.game;
    games.push(game);
    const id = games.length;
    res.send(`O jogo ${game} foi adicionado. Ele possui o ID ${id}`);
});

app.put('/games/:id', (req, res) => {
    const updateGame = req.body.game;
    const id = req.params.id - 1;
    games[id] = updateGame;
    res.send(`As informações do jogo foram atualizadas.`);
});

app.delete('/games/:id', (req, res) => {
    const id = req.params.id - 1;
    delete games[id];
    res.send('O jogo foi deletado.');
});

app.listen(port, () => {
    console.info('Server está rodando!');
})