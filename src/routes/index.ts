import {Router, Request, Response} from 'express'
import { truncate } from 'fs'
import { userInfo } from 'os'

const router = Router()

//criando a primeira rota 'home'
router.get("/",(req:Request,res:Response) =>{

        let idade: number = 18
        let mostrarIdade: boolean = false

        if(idade >= 18){
            mostrarIdade = true
        }
   /* let user = {
        name: 'José',
        age: 28

    }
    */
    //let user: string = 'Rafael'
    
   /* res.render('home',{
        name:'Joao',
        lastname:'Silva',
        showWelcome: true    // variavel boleana
    })*/

    res.render('home',{
        name:'Joao',
        lastname:'Silva',
        mostrarIdade,
        produtos:[
            {titulo: 'produto X', preco: 200},
            {titulo: 'produto Y', preco: 200},
            {titulo: 'produto Z', preco: 200}
            
        
        ]
    })
                
})




router.get('/contato',(req:Request,res:Response) =>{
    res.render('contato')
})

// toda vez que usar render tem que identificar o arquivo com ''
// ex: render('contato')  se usar send (vai aparecer o que esta escrito dentro do parenteses)

router.get('/sobre',(req:Request,res:Response) =>{ 
    res.render('sobre')
})
//ROTA ESTÁTICA
router.get('/noticia/titulo-da-noticia',(req:Request,res:Response) =>{
    res.send("Noticia Aparecendo na tela")
})

//ROTA DINÂMICA
router.get('/noticia/:slug',(req:Request,res:Response) =>{
    let slug: string = req.params.slug
    res.send(`Notícia: ${slug}`)
})

router.get('/voo/:origem-:destino',(req:Request,res:Response) =>{
    let {origem,destino} = req.params
    res.send(`Procurandos voos de ${origem} até ${destino}`)
})



export default router