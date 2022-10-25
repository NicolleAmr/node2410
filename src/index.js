//config do servidor
const express = require('express')
const app = express()
const porta = process.env.PORT || 4040
app.use(express.json())
app.set('view engine', 'ejs')

//multer - pacote dentro do modulo que faz dowload dentro da plataforma
const multer = require('multer')

//storage
const storage = multer.diskStorage({
    //destino
    destination: (req,res,cb) =>{
        cb(null,'uploads')
    },

    //nome do arquivo
    filename: (req,file, cb) =>{
        cb(null,file.originalname)
    }
})

const upload = multer ({storage})

//rota padrão
app.get('/',(req,res)=>{
    res.render('index.ejs')
})

//upload
//midlware - procurar dps o que ele faz, pq o loko n explica direito
app.post('/', upload.single('arquivo'),(req,res)=>{
    res.send("LOL")
    console.log(req.body,req.file) //apoio a lógica
})

//escuta do servidor
app.listen(porta, () =>{
    console.log(`Servidor escutanto em http://localhost:${porta}`)
})
