require('dotenv').config();

const express = require('express');
const connectDB = require('./config/database');
const employeeRoutes = require('./routes/employeeRoutes'); // Rotas de funcionários
const projectRoutes = require('./routes/projectRoutes');   // Rotas de projetos

const app = express();

// Middleware
app.use(express.json());

// Conectar ao banco de dados
connectDB();

// Rotas
app.use('/', employeeRoutes);  // Prefixo para as rotas de funcionários
app.use('/', projectRoutes);   // Prefixo para as rotas de projetos

// Inicializar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
