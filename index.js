const express = require('express')
const app = express()

//http://localhost:3000/lucero/123
app.get('/', (req, res) => {
    res.json({msg: 'Hola GET'})
})

app.get('/:user/:password', (req, res) => {
    const {user, password} = req.params
    if(user === 'lucero' && password === '123'){
        res.json({msg: 'Inicio de sesion exitoso'})
        return
    }
    res.json({msg: 'Fallo en el usuario o contraseña'})
})

app.post('/', (req, res) => {
    res.json({msg: 'Hola POST'})
})

app.put('/', (req, res) => {
    res.json({msg: 'Hola PUT'})
})
app.patch('/', (req, res) => {
    res.json({msg: 'Hola PATCH'})
})
app.delete('/', (req, res) => {
    res.json({msg: 'Hola DELETE'})
})

//http://localhost:3000

app.listen(3000, () => {
    console.log('listening on port 3000')
})