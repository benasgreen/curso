// npm run start-dev para iniciar o server


//importando a biblioteca express
import  express,{Request, Response}from 'express'
import {Server} from 'http' 
import path from 'path'
//importando o mustache
import mustache from 'mustache-express'
import dotenv from 'dotenv'
//importando nosso arquivo index.ts
import mainRoutes from './routes/index'


//usando dotenv
dotenv.config()

//usando EXPRESS
const server = express()

//configurando o mustache
server.set('view engine','mustache')
//configurando o caminho da pasta views
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())
//conexao com a pasta public (parte front end)
server.use(express.static(path.join(__dirname, '../public')))     // para importar e referenciar imagem usar '..'

//configurando o POST
server.use(express.urlencoded({extended:true}))




server.use(mainRoutes)

//criando a pagina nao encontrada, normalmente e criado no server por ser uma pagina especifica
server.use((req:Request, res:Response) =>{
    res.status(404).send('Página não encontrada')
})


//gerando o servidor na porta 2000  
server.listen(process.env.PORT)


console.log('http://localhost:2000/')