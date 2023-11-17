import {Request, Response} from 'express'

export const nome = ((req:Request, res:Response) =>{



    let nome: string = req.query.nome as string
        // no typescript precisa informar que a resultante e do tipo que voce quer
    // pode utilizar tambem let nome: string = String(req.params)


    res.render('pages/nome',{
        nome
    })


})

export const idade = ((req:Request, res:Response) =>{


    res.render('pages/idade')
})

export const idadeResultado = ((req:Request, res:Response) =>{


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

export const login = ((req:Request, res:Response) =>{

    res.render('pages/login')
  
})

export const loginEmail = ((req:Request, res:Response) =>{

    let email: string = req.query.nome as string
    let senha: string = req.query.nome as string


    res.render('pages/login',{
        email, senha 
  
})

})