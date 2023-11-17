import {Request, Response} from 'express'

export const home = ((req:Request, res:Response) =>{

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