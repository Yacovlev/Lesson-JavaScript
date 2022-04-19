const precos = [
    "Crédito",
    "R$ 250",
    "R$ 300",
    "R$ 555",
    "Contas a pagar",
    "Meus dados"
]
const filtraPrecos = precos.filter(precos => precos.includes ("R$"));

console.log(filtraPrecos)