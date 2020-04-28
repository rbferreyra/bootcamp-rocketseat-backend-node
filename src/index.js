const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

//para interpretar o conteúdo das entradas feitas em POST/PUT utilizando o BODY
//deve atribuir o metodo abaixo, para recuperar essas entradas em JSON
app.use(express.json());

const projects = [];

app.get('/', (request, response) => {
    return response.json({ message: 'Hello world' });
});

app.get('/projects', (request, response) => {
    const { title, owner } = request.query; // query params

    const results = title ? projects.filter(project => project.title.includes(title)) : projects;

    return response.json(results);
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body; // conteúdo das entradas usando o BODY

    const project = { id: uuid(), title, owner };

    projects.push(project);

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params; // route params
    const { title, owner } = request.body;

    const projectIndex = projects.findIndex(project => project.id == id);

    if (projectIndex < 0) {
        return response.json({ error: "Project not found" }, 400);
    }

    const project = {
        id,
        title,
        owner
    };

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params; // route params

    const projectIndex = projects.findIndex(project => project.id == id);

    if (projectIndex < 0) {
        return response.status(400).json({ error: "Project not found" });
    }

    projects.splice(projectIndex, 1); //remove a index 

    return response.status(204).send();
});

app.listen(3333, () => {
    console.log('Backend started!');
});

