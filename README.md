# Desafio 3LM Informática

## Início Rápido

Para utilizar esse projeto em sua máquina é necessário ter instalado [Node.JS](https://nodejs.org/en/) e o Banco de dados Relacional [MySQL](https://www.mysql.com/)

## Imagens

![Frontend](img/frontend.png)
![Backend](img/backend.png)

## Rodando o Projeto

### Backend

- Variáveis de Ambiente do Banco de Dados

  - Abra o painel do seu SGBD e crie um novo banco de dados
  - Acesse `desafio-funcionarios/backend `
  - Renomeie o arquivo `.env-example` para `.env`
  - configure as variáveis de ambiente com as informações seguintes:

    | Variáveis | Dados     |
    | --------- | --------- |
    | HOST      | localhost |
    | PORT      | 3306      |
    | USERNAME  | user      |
    | PASSWORD  | senha     |
    | DATABASE  | banco     |

    > Porta default MySQL 3306

- Rodando o Projeto em Modo de desenvolvimento

```bash
$ cd backend

$ npm install

$ npm run start:dev
```

Acesse: http://localhost:3000

### Frontend

- Variável de Ambiente de url da API

  - Acesse `desafio-funcionarios/frontend`
  - Renomeie o arquivo `.env.local-example` para `.env.local`
  - Adicione a URL da API

  > Padrão da URL de api é http://localhost:3000 sem a "/"

- Rodando o projeto

```bash
$ cd frontend

$ npm install

$ npm run dev
```

Acesse: http://localhost:3001

## Tecnologias

- [x] [Next.js](https://nextjs.org/)
- [x] [Nest.js](https://nestjs.com/)
- [x] [Tailwindcss](https://tailwindcss.com/)
- [x] [TypeORM](https://typeorm.io/#/)
- [x] [Swagger](https://swagger.io/)
- [x] [MySQL](https://www.mysql.com/)

## Informações Extras

As entidades e os métodos da API estão em ingles para ficarem padronizados.

Ex: get..... find...

| Nome     | Significado |
| -------- | ----------- |
| Role     | Cargo       |
| Employee | Funcionário |
| Wage     | Salário     |

Peço que siga atentamente os passos de instalação e, caso tenha algum problema na execução do projeto, pode entrar em contato para qualquer informação.
