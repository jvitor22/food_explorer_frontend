<h1>
    <a href="#"> Food Explorer </a>
</h1>

<p align="center"> A aplicação que foi desenvolvida é um cardápio digital para um restaurante fictício, conhecido como Food Explorer. O Frontend da aplicação foi desenvolvido com JavaScript e React.js </p>

#

<p align="center">
   <a href="#sobre">Sobre </a> •
   <a href="#features"> Features </a> •
   <a href="#-layout">Layout</a> •
   <a href="#tecnologias"> Tecnologias </a> •
   <a href="#Como executar o projeto"> Como executar o projeto </a •
   <a href="#requisitos"> Requisitos </a> •
</p>

## Sobre

O Food Explorer é um cardápio digital, onde o administrador do restaurante pode criar e editar os produtos do cardápio. Já o usuário tem a possibilidade de ver os pratos e fazer seus pedidos.
O frontend foi desenvolvido do zero, utilizando a prototipação disponível no <a href="https://www.figma.com/file/xP2dFPdN2Yc7JWJr7wDC2X/food-explorer-v2-(Community)?type=design&node-id=201-1532&t=jqnK9ldtRr9wHFSC-0">Figma</a>.

<br/>

## Features

- [x] Setup Vite
- [x] Rotas de Autenticação
- [x] Rotas da aplicação para usuários e admin
- [x] Frontend integrado com o backend
- [x] Hook de autenticação para o usuário
- [x] Um projeto estruturado, com uma boa organização das pastas, divisão de componentes no front-end;
- [x] Os dados do admin, do restaurante e dos usuários serão armazenados em um banco de dados;
- [x] Os usuários deverão se autenticar para entrar na aplicação através da tela de login;
- [x] Possibilidade de fazer uma busca pelo nome do prato;
- [x] O admin pode fazer upload de imagens para cadastrar e editar os produtos;
- [x] Aplicação responsiva: utilizado o conceito de Mobile First;
- [x] Deploy da aplicação.

<br/>

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/xP2dFPdN2Yc7JWJr7wDC2X/food-explorer-v2-(Community)?type=design&node-id=201-1532&t=jqnK9ldtRr9wHFSC-0>
  Figma
</a>

<br/>

## Tecnologias

Tecnologias utilizadas no Frontend:

- [Vite](https://vitejs.dev/)
- [HTML5](https://www.w3schools.com/html/default.asp)
- [CSS3](https://www.w3schools.com/css/default.asp)
- [Styled Components](https://styled-components.com/)
- [JavaScript](https://www.w3schools.com/js/)
- [React.js](https://pt-br.reactjs.org/)
- [Axios](https://axios-http.com/ptbr/)

<br/>

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (API) 
2. Frontend 

💡 O Backend deve estar rodando em sua máquina para que o frontend seja reenderizado.

## Requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 

## 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório:
$ https://github.com/jvitor22/food_explorer_api.git
# Acesse a pasta do projeto no terminal/cmd
$ cd + sua pasta + git clone https://github.com/jvitor22/food_explorer_api.git
# Instale as dependências
$ npm install
# Execute as migration
$ npm run migrate
# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Login do admin
$ email: adming@email.com
$ password: admin123
# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

<br/>

### 🎲 Rodando a aplicação (Frontend)

```bash
# Clone este repositório
$ https://github.com/gregoryAlvim/frontend-FoodExplorer.git
# Acesse a pasta do projeto no terminal/cmd
$ cd + sua pasta + git clone https://github.com/jvitor22/food_explorer_frontend.git
# Instale as dependências com:
$ npm install
# Rode a aplicação em modo de desenvolvimento:
$ npm run dev
# O servidor inciará na porta:3333 - acesse <   http://127.0.0.1:5173/ >
```

---
## Deploy do projeto.
https://food-explorer-jvitor22.netlify.app/