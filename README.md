## INSTALAÇÃO INICIAL

Para poder rodar, é necessário:
-> instalar o [`docker`](https://docs.docker.com/compose/install/)
-> Copiar todos os arquivos que não estão na pasta `node_modules` (usar o repositório do backend [`obuc-back`](https://github.com/Julio-Telles/obuc-back))

## AJUSTES DE CONFIGURAÇÃO

Para rodar o projeto, o arquivo `.env.example` foi necessário ajustar os parâmetros para:
NODE_ENV=
HOSTNAME_FRONTEND="http://localhost:5173"
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=password
DB_NAME=

-> MAS ISSO JÁ ESTÁ AJUSTADO NESSE PROJETO


## PARA RODAR O PROJETO LOCAL

Para rodar o projeto localmente, execute a sequência de comandos pelo terminal
-> `docker compose up`
-> `npm install`
-> `npm run migrate`
-> `npm run dev`


## INSTALAÇÃO DAS DEPENDÊNCIAS

-> Até o momento, não foi necessário nenhuma dependência extra, nem executar os comandos abaixo porque já se encontram no "package.json".
O projeto original indica as seguintes dependências (que são usadas no projeto):
- [npm i @sequelize/postgres](https://sequelize.org/docs/v7/databases/postgres/)
- [npm i pg](https://node-postgres.com/)
- [npm i pg-hstore](https://www.npmjs.com/package/pg-hstore)
- [npm i dotenv](https://www.npmjs.com/package/dotenv)


## ORIENTAÇÕES ORIGINAIS


# Task Management API

Este projeto é uma API RESTful desenvolvida em Node.js para gerenciamento de tarefas, utilizando o framework Express.js, Sequelize como ORM e PostgreSQL como banco de dados.

## Requisitos

- Node.js v21.6.1
- Docker e Docker Compose
- PostgreSQL

## Configuração do Ambiente

Certifique-se de configurar as variáveis de ambiente no arquivo `.env` antes de iniciar o projeto. As variáveis necessárias são:

```
NODE_ENV=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASS=
DB_NAME=
```

## Instalação e Uso

### 1. Instale as Dependências

```sh
npm install
```

### 2. Configure as Variáveis de Ambiente

Crie um arquivo `.env` com as variáveis descritas anteriormente.

### 3. Execute as Migrações do Banco de Dados

```sh
npm run migrate
```

### 4. Inicie o Servidor

Para iniciar em modo de desenvolvimento:

```sh
npm run dev
```

Para iniciar em modo de produção:

```sh
npm start
```

### 5. Executando com Docker Compose

O projeto inclui um arquivo `docker-compose.yml` que configura um container PostgreSQL para desenvolvimento. Para executar o PostgreSQL usando Docker Compose, utilize o seguinte comando:

```sh
docker-compose up -d
```

Isso iniciará o container `postgresdb` com a imagem do PostgreSQL.

## Scripts Disponíveis

- **dev**: Inicia o servidor em modo de desenvolvimento usando `nodemon`.
- **start**: Inicia o servidor em modo de produção.
- **migrate**: Executa as migrações do banco de dados.
- **migration:generate**: Gera uma nova migração para o banco de dados.
- **migration:undo**: Desfaz a última migração.

## Dependências

- **express**
- **sequelize**
- **pg**
- **pg-hstore**
- **dotenv**

### Dependências de Desenvolvimento

- **nodemon**
- **sequelize-cli**

## Docker Compose

O projeto inclui um arquivo `docker-compose.yml` para facilitar a configuração do ambiente de desenvolvimento.

```yaml
version: '3.8'

services:
  postgresdb:
    image: postgres
    restart: 'always'
    expose:
      - '5432'
    ports:
      - '5432:5432'
    environment:
      - POSTGRES_PASSWORD=password
```

Este serviço cria um container PostgreSQL para o ambiente de desenvolvimento, facilitando o teste e o uso da aplicação.