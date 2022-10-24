//config do servidor
const express = require('express')
const app = express()
const porta = process.env.PORT || 4040
app.use(express.json())
app.set('view engine', 'ejs')

//rota padrão
app.get('/',(req,res)=>{
    res.render('index.ejs')
})

//upload
app.post('/', (req,res)=>{
    res.send("LOL")
    console.log(req.body,req.file) //apoio a lógica
})

//escuta do servidor
app.listen(porta, () =>{
    console.log(`Servidor escutanto em http:\\localhost:${porta}`)
})
