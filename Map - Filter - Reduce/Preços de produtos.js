const produtos = [
    {
        nome: "notebook",
        preco: "2100"
    },
    {
        nome: "smartphone",
        preco: 400
    }
]
const precosEmReais = produtos.map(p => p.preco * 4)
console.log(precosEmReais)
console.log(produtos)