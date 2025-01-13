require('dotenv').config();

const express = require('express');
const cors = require('cors')
const connectDB = require('./config/database');
const employeeRoutes = require('./routes/employeeRoutes'); // Rotas de funcionários
const projectRoutes = require('./routes/projectRoutes');   // Rotas de projetos

const app = express();

//Serve os arquivos estaticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());
app.use(cors())
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
