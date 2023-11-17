import {Request, Response} from 'express'

export const home = ((req:Request, res:Response) =>{



    let nome: string = req.query.nome as string
    let idade: number = parseInt(req.query.idade as string)
    let telefone: number = parseInt(req.query.idade as string)
    let endereco: string = req.query.nome as string
    
    res.render('pages/informacoes',{
        nome, idade, telefone, endereco
    })


})