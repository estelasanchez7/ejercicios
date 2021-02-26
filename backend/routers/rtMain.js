const express = require ('express')
const rtMain = express.Router()
const daoUsuarios = require('../dao/daoUsuarios')
const Usuario = require('../models/Usuario')

rtMain.get('/welcome',(req,res)=>{
    res.json({
        saludo:'Hola Mundo'
    })
})

rtMain.post('/guardar', (req,res)=>{
    console.log(req.body)
    daoUsuarios.guardar(req.body)
    .then(resp=>{
        res.json({resp:'Guardado correctamente en mongo'})
    })
})

rtMain.get('/listar', async function (req, res) {
    let misUsuarios = await daoUsuarios.listar()
    console.log(misUsuarios)
    res.json(
        misUsuarios
    )
})

//eliminar

rtMain.post('/eliminar',(req,res)=>{
    daoUsuarios.eliminar(req.body.id)
    res.json({respuesta:'ok'})
})
  

module.exports= rtMain