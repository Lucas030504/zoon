const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    email: String,
    tel: String,
    nome: String,
    sobrenome: String,
    senha: String,
    data: String
})

// exportando o model
module.exports = Person