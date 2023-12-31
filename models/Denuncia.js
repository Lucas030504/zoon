const mongoose = require('mongoose')

const Denuncia = mongoose.model('Denuncia', {
    motivo: String,
    relato: String,
    cep: Number,
    estado: String,
    cidade: String,
    bairro: String,
    rua: String,
    complemento: String,
    numero: String,
    email: String,
    id_usuario: String,
    // anexo: File
    data: String,
    status: String,
    status_motivo: String

})

// exportando o model
module.exports = Denuncia