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

    res.render('pages/home',{
        name:'Joao',
        lastname:'Silva',
        mostrarIdade,
        produtos:[
            {titulo: 'produto X', preco: 200},
            {titulo: 'produto Y', preco: 200},
            {titulo: 'produto Z', preco: 200}
            
        
        ],
        frases: [
            'frase do dia 1',
            'frase do dia 2',
            'frase do dia 3'
        ]
    })
                
})




router.get('/contato',(req:Request,res:Response) =>{
    res.render('pages/contato')
})

// toda vez que usar render tem que identificar o arquivo com ''
// ex: render('contato')  se usar send (vai aparecer o que esta escrito dentro do parenteses)

router.get('/sobre',(req:Request,res:Response) =>{ 
    res.render('pages/sobre')
})

router.get('/nome',(req:Request,res:Response) =>{ 

    let nome: string = req.query.nome as string
        // no typescript precisa informar que a resultante e do tipo que voce quer
    // pode utilizar tambem let nome: string = String(req.params)


    res.render('pages/nome',{
        nome
    })

})

router.get('/informacoes',(req:Request,res:Response) =>{ 

    let nome: string = req.query.nome as string
    let idade: number = parseInt(req.query.idade as string)
    let telefone: number = parseInt(req.query.idade as string)
    let endereco: string = req.query.nome as string
    
    res.render('pages/informacoes',{
        nome, idade, telefone, endereco
    })

})

router.get('/idade',(req:Request,res:Response) =>{
    res.render('pages/idade')
})

router.post('/idade',(req:Request,res:Response) =>{ 

    let idade: number = 2023 - parseInt(req.body.idade as string)


    // outro jeito de fazer
    /*
        let mostrarIdade: boolean = false
        let date: number = (new date()).getfullyear
        let idade: number = date - parseInt(req.query.idade as string)
    */

    res.render('pages/idade',{
        idade 
    })

})

router.get('/login ',(req:Request,res:Response) =>{
    res.render('pages/login')
})

router.post('/login',(req:Request,res:Response) =>{ 

    let email: string = req.query.nome as string
    let senha: string = req.query.nome as string


    res.render('pages/login',{
        email, senha 
    })

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