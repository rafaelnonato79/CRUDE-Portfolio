const { get } = require('mongoose');
const Employee = require('../models/Employee');

// Criar um novo funcionário
const createEmployee = async (req, res) => {
    try {
        const novoFuncionario = new Employee(req.body);
        await novoFuncionario.save();
        res.status(201).json(novoFuncionario);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar funcionário' });
    }
};

// Listar todos os funcionários
const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao listar funcionários' });
    }
};

//Mostrar funcionario por ID
const getEmployeeById = async (req, res) => {
    try {
        // O ID é passado na URL como parâmetro
        const { id } = req.params;

        // Busca o funcionário no banco de dados usando o _id
        const employee = await Employee.findById(id);

        // Se o funcionário não for encontrado, retorna um erro 404
        if (!employee) {
            return res.status(404).json({ message: 'Funcionário não encontrado' });
        }

        // Se encontrado, retorna o funcionário
        res.status(200).json(employee);
    } catch (err) {
        console.error('Erro ao buscar funcionário por ID:', err);
        res.status(500).json({ error: 'Erro ao buscar funcionário' });
    }
};


// Atualizar funcionário por ID
const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(employee);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar funcionário' });
    }
};

// Deletar funcionário por ID
const deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar funcionário' });
    }
};

module.exports = { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee };
