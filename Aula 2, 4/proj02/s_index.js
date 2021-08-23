import express from "express";

const app = express();
app.use(express.json());

const port = 3000;

const modeloCarro = [
    'Onix',
    'Uno',
    'Toro'
];

const tipoCarro = [
    'SUV',
    'Sedan',
    'Hatch'
];

const combustivelCarro = [
    'Alcool',
    'Gasolina',
    'Flex'
];

const marcaCarro = [
    'Chevrolet',
    'Fiat',
    'Citroen'
];

const anoCarro = [
    1970,
    2005,
    2015
];

app.get('/', (req, res) => {
    res.send('Bem vindo ao meu catálogo de carros!');
});

app.get('/carros', (req, res) => {
    res.send(modeloCarro);
});

app.get('/carros/:id', (req, res) => {
    const id = req.params.id - 1;
    const modelo = modeloCarro[id];
    const tipo = tipoCarro[id];
    const combustivel = combustivelCarro[id];
    const marca = marcaCarro[id];
    const ano = anoCarro[id];
    if (carro) {
        res.send(`modelo: ${modelo}; tipo: ${tipo}; combustivel: ${combustivel}; marca: ${marca}; ano: ${ano}`);
    } else {
        res.send(`Carro não encontrado!`);
    }
});

app.post('/carros', (req, res) => {
    const modelo = req.body.modelo;
    modeloCarro.push(modelo);
    const tipo = req.body.tipo;
    tipoCarro.push(tipo);
    const combustivel = req.body.combustivel;
    combustivelCarro.push(combustivel);
    const marca = req.body.marca;
    marcaCarro.push(marca);
    const ano = req.body.ano;
    anoCarro.push(ano);
    const id = modeloCarro.length;
    res.send(`O carro de modelo ${modelo} foi adicionado. Ele possui o ID ${id}`);
});

app.put('/carros/:id', (req, res) => {
    const id = req.params.id - 1;
    const modelo = req.body.modelo;
    modeloCarro[id] = modelo;
    const tipo = req.body.tipo;
    tipoCarro[id] = tipo;
    const combustivel = req.body.combustivel;
    combustivelCarro[id] = combustivel;
    const marca = req.body.marca;
    marcaCarro[id] = marca;
    const ano = req.body.ano;
    anoCarro[id] = ano;
    res.send(`As informações do carro foram atualizadas.`);
});

app.delete('/carros/:id', (req, res) => {
    const id = req.params.id - 1;
    delete modeloCarro[id];
    delete tipoCarro[id];
    delete combustivelCarro[id];
    delete marcaCarro[id];
    delete anoCarro[id];
    res.send(`O carro foi deletado`);
});

app.listen(port, () => {
    console.info('Server está rodando!');
});