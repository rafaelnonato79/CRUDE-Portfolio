const Project = require('../models/Project');

// Criar um novo projeto
const createProject = async (req, res) => {
    try {
        const novoProjeto = new Project(req.body);
        await novoProjeto.save();
        res.status(201).json(novoProjeto);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar projeto' });
    }
};

// Listar todos os projetos
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao listar projetos' });
    }
};
//Mostrar projeto por ID
const getProjectById = async (req, res) => {
    try {
        // O ID é passado na URL como parâmetro
        const { id } = req.params;

        // Busca o projeto no banco de dados usando o _id
        const project = await Project.findById(id);

        // Se o projeto não for encontrado, retorna um erro 404
        if (!project) {
            return res.status(404).json({ message: 'Projeto não encontrado' });
        }

        // Se encontrado, retorna o projeto
        res.status(200).json(project);
    } catch (err) {
        console.error('Erro ao buscar projeto por ID:', err);
        res.status(500).json({ error: 'Erro ao buscar projeto' });
    }
};

// Atualizar projeto por ID
const updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar projeto' });
    }
};

// Deletar projeto por ID
const deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar projeto' });
    }
};

module.exports = { createProject, getProjects, getProjectById, updateProject, deleteProject };







