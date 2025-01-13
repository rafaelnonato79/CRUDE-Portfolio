const express = require('express');
const { createProject, getProjects, updateProject, deleteProject, getProjectById } = require('../controllers/projectController');
const router = express.Router();

router.post('/projects', createProject);       // Criar projeto
router.get('/projects', getProjects);          // Listar todos os projetos
router.put('/projects/:id', updateProject);    // Atualizar projeto por ID
router.delete('/projects/:id', deleteProject); // Deletar projeto por ID
router.get('/projects/:id', getProjectById); // Mostrar projeto por ID

module.exports = router;
