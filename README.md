# Backend Node.js

Bootcamp Rocketseat - Criando backend da app com Node.js

## Requerimentos

* Node.js
* Yarn

## Instrução inicial

### yarn

Inicializar o gerenciador de pacotes, utilizando o [yarn](https://yarnpkg.com/)

```bash
yarn init -y
```

### express.js

Incluir a dependência para gerenciamento de rotas da app, utilizando o micro framework [express.js](https://expressjs.com/pt-br/)

```bash
yarn add express
```

### nodemon

Incluir a dependência [nodemon](https://nodemon.io/) para monitorar todas as alterações nos arquivos da aplicação e reiniciar o servidor de forma automática, quando necessário.

Define a flag `-D` para incluir a dependência somente em ambiente de desenvolvimento.

```bash
yarn add nodemon -D
```

### Rodar o server

Incluimos no arquivo `package.json`, uma instrução para executar o servidor utilizando o nodemon.

```json
  "scripts": {
    "dev" : "nodemon"
  }
```

E alteramos o valor da execução do arquivo principal

```json
  "main": "src/index.js"
```

Rodar o server

```bash
  yarn dev
```

Resultado

```bash
yarn run v1.22.4
$ nodemon
[nodemon] 2.0.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.js`
Backend started!
```
