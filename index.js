//const http = require("http")
const express = require("express") // Molde
const router = express.Router()
const app = express() //se crea la instancia. Panqué

router.get('/hola',function(req,res){
    res.send("HOLA !")
})

router.get('/',function(req,res){
    res.send("Va !")
})

router.get('/adios',function(req,res){
    res.send("Adios 222 !")
})

app.use(router)

app.listen(8080,()=>{
    console.log("Server is working")
})




// const server = http.createServer((req,res)=>{
//  console.log("Petición entrante")
//  res.write('Hola desde node')
//  res.end()
// })
// server.listen(8080,()=>{
//     console.log("El servidor esta escuchando en el puerto 8080.")    
// })


