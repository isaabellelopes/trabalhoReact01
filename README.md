# 🛒 Sistema de Gerenciamento de Produtos

Projeto desenvolvido por **Isabelle Lopes** como uma aplicação fullstack com funcionalidades de cadastro, listagem, edição e exclusão de produtos.

## 🚀 Tecnologias utilizadas

- **Frontend**: ReactJS
- **Backend**: Node.js + Express
- **Banco de Dados**: MySQL

---

## 📦 Funcionalidades

- ✅ Cadastrar novo produto
- 📝 Editar produto existente
- ❌ Excluir produto
- 🔍 Visualizar detalhes do produto
- 💬 Campos obrigatórios com validação
- 💰 Preço formatado em Reais

---

## 🧑‍💻 Como rodar o projeto

### 🔧 Requisitos

- Node.js instalado
- MySQL em execução

### 📁 Backend

1. Vá até a pasta do backend:

```bash
   cd backend
    npm install
    npm start
```

2. Configure o Banco de dados(db.js):

```bash
const db = mysql.createConnection({
  host: "localhost",
  user: "seu_usuario",
  password: "sua_senha",
  database: "nome_do_banco"
});
```
3. Rode o script SQL "SqlProdutos.sql" para possuir uma base de dados.
### Frontend

2. Vá até a pasta do frontend:

```bash
cd frontend/reactproject
npm install
npm start
```
Feito por Isabelle Lopes.
Github: https://github.com/isaabellelopes/trabalhoReact01
