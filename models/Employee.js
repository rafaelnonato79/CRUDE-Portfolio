const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    foto: { type: String, required: true }, // URL da foto do funcionário
    cargo: { type: String, required: true },
    data_ingresso: { type: Date, required: true },
    issues: { type: Number, required: true },
    nome: { type: String, required: true },
    pra_cima: { type: Number, required: true },
    projetos: { type: [String], required: true }, // Lista de projetos
    tempo_de_empresa_em_meses: { type: Number, required: true },
    timeline: [
        {
            date: { type: String, required: true }, // Formato de data como string (ex: "2024/07")
            titulo: { type: String, required: true },
            descricao: { type: String, required: true }
        }
    ],
    junior: { type: Boolean, required: true } // Indica se é um funcionário júnior
});

module.exports = mongoose.model('Employee', EmployeeSchema);
