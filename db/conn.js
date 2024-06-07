const mongoose = require('mongoose')
require('dotenv').config()

async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_URL)

        console.log('Conectado ao Banco de dados.')
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main