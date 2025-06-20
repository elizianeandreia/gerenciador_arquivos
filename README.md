# 📁 Sistema de Distribuição de Arquivos

Um sistema simples e funcional para **upload**, **visualização** e **exclusão** de arquivos. Ideal para distribuição de documentos, relatórios ou materiais entre equipes.

---

## 🚀 Funcionalidades

- 📤 Upload de múltiplos arquivos
- 📄 Listagem dos arquivos enviados
- 🗑️ Exclusão de arquivos individuais
- 🌐 Integração frontend React + backend Node.js/Express
- 🗂️ Armazenamento local de arquivos na pasta `uploads`

---

## 🖼️ Demonstração

> 🔗 Deploy do frontend:  
> [https://elizianeandreia.github.io/gerenciador_arquivos/](https://elizianeandreia.github.io/gerenciador_arquivos/)

> ⚠️ *Para que o botão "Enviar" funcione corretamente, é necessário que o backend esteja rodando localmente em `http://localhost:3001`.*

---

## 📦 Tecnologias utilizadas

### Frontend

- [React](https://reactjs.org/)
- HTML e CSS (ou Tailwind, se quiser futuramente)
- Fetch API

### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Multer](https://github.com/expressjs/multer)
- [CORS](https://github.com/expressjs/cors)

---

## 🔧 Como rodar localmente

###1. Clone o repositório:
git clone https://github.com/elizianeandreia/gerenciador_arquivos.git
cd gerenciador_arquivos

###2. Backend:cd backend
npm install
npm start

###3. Frontend:
cd ../frontend
npm install
npm start

###4. 📂 Estrutura do projeto
gerenciador_arquivos/
│
├── backend/
│   ├── index.js
│   └── uploads/
│
├── frontend/
│   ├── src/
│   │   └── App.js
│   └── package.json
│
├── README.md


👩‍💻 Desenvolvedora
Eliziane Andreia Junckes
