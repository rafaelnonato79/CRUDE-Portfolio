const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    tipo: { type: String, required: true },
    logo: { type: String, required: true },
    cor_primaria: { type: String, required: true },
    prints: { type: [String], required: true },
    descricao: { type: String, required: true },
    link: { type: String, required: true },
    cores: { type: [String], required: true },
    tecnologias: { type: [String], required: true },
    desenvolvedores: { type: [String], required: true }
});

module.exports = mongoose.model('Project', ProjectSchema);
