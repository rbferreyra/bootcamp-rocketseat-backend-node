const express = require('express');

const app = express();

//para interpretar o conteúdo das entradas feitas em POST/PUT utilizando o BODY
//deve atribuir o metodo abaixo, para recuperar essas entradas em JSON
app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello world' });
});

app.get('/projects', (request, response) => {
    const { title, owner } = request.query; // query params

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 01',
        'Projeto 02',
    ]);
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body; // conteúdo das entradas usando o BODY

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 01',
        'Projeto 02',
        'Projeto 03',
    ]);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params; // route params

    console.log(id);

    return response.json([
        'Projeto 04',
        'Projeto 02',
        'Projeto 03',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params; // route params

    console.log(id);

    return response.json([
        'Projeto 02',
        'Projeto 03',
    ]);
});

app.listen(3333, () => {
    console.log('Backend started!');
});

