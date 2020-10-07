//const http = require("http")
const express = require("express") // Molde
const router = express.Router()
const app = express() //se crea la instancia. Panqué

router.get('/',function(req,res){
    res.send("HOLA !")
})

router.get('/hola',function(req,res){
    res.send("HOLA DESDE EXPRESS CON GET!")
})

router.post('/hola',function(req,res){
    res.send("HOLA DESDE EXPRESS CON POST !")
})

router.get('/adios',function(req,res){
    res.send("Adios DESDE EXPREESS CON GET!")
})

router.post('/adios',function(req,res){
    res.send("Adios DESDE EXPRESS CON POST !")
})

app.use(router)

app.listen(8080,()=>{
    console.log("Server is working")
})