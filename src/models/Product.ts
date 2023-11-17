type Product = {
    title: string,
    price: number
}

const data = [
    {title:'produto X', preco: 200},
    {title:'produto Y', preco: 200},
    {title:'produto Z', preco: 200},

]

export const Product = {
    getAll: () => {

        return data
    }



}