const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

const filmes = [
    'Capitão América',
    'Homem de Ferro',
    'Hulk',
    'Capitã Marvel',
    'Homem-Formiga',
    'Homem Aranha: de Volta ao Lar'
];

// primeira rota, retorna apenas 'Hello Bluemer!'
app.get('/', (req, res) => {
    res.send('Hello Bluemer!');
});

// rota de filmes -> lista de filmes
app.get('/filmes', (req, res) => {
    res.send(filmes);
});

// rota do filme individual -> id
app.get('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const filme = filmes[id];

    if (filme) {
        res.send(filme);
    }
    res.send('Filme não encontrado');
});

/*
Listar      - GET
Criar       - POST
Atualizar   - PUT
Deletar     - DELETE
*/

// rota cadastrar um novo filme
app.post('/filmes', (req, res) => {
    const filme = req.body.filme;
    filmes.push(filme);
    const id = filmes.length;

    res.send(`Filme adicionado com sucesso: ${filme}. O ID do filme é ${id}.`);
});

// rota para atualizar um filme
app.put('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const filme = req.body.filme;

    filmes[id] = filme;
    res.send(`Filme atualizado com sucesso! ${id} - ${filme}`)
});

// rota para deletar um filme
app.delete('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    delete filmes[id];

    res.send('Filme excluído com sucesso!');
});

app.listen(port, () => {
    console.info(`App rodando na porta http://localhost:${port}`);
});
