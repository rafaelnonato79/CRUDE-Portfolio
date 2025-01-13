const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    cargo: { type: String, required: true },
    data_ingresso: { type: Date, required: true },
    issues: { type: Number, required: true },
    nome: { type: String, required: true },
    pra_cima: { type: Number, required: true },
    projetos: { type: [String], required: true }, // Lista de projetos
    tempo_de_empresa_em_meses: { type: Number, required: true },
    timeline: [
        {
            date: { type: String, required: true },
            titulo: { type: String, required: true },
            descricao: { type: String, required: true }
        }
    ]
});

module.exports = mongoose.model('Employee', EmployeeSchema);
