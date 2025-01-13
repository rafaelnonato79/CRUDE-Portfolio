const express = require('express');
const { createEmployee, getEmployees, updateEmployee, deleteEmployee, getEmployeeById } = require('../controllers/employeeController');
const router = express.Router();

router.post('/employees', createEmployee);      // Criar funcionário
router.get('/employees', getEmployees);        // Listar todos
router.put('/employees/:id', updateEmployee);  // Atualizar por ID
router.delete('/employees/:id', deleteEmployee); // Deletar por ID
router.get('/employees/:id', getEmployeeById); // Mostrar por ID

module.exports = router;
