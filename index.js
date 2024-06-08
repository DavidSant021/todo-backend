const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())

// Middleware responsável em fazer a aplicação ler requests Json
app.use(express.json())

app.use(express.urlencoded({extended: true}))

// DB Connection
const conn = require('./db/conn')

conn()

// Routes
const routes = require('./routes/router')

app.use('/api', routes)

app.listen(process.env.PORT, () => {
    console.log('Servidor Online!')
})
