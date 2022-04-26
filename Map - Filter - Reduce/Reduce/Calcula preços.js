const lista = [
    {
        nome: 'Sabão em pó',
        preco: 30
    },
    {
        nome: 'Cereal',
        preco: 12
    },
    {
        nome: 'Toalha',
        preco: 30
    }
];
const saldoDisponivel = 100;
function calculaSado(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev - current.preco}, saldoDisponivel);    
}
console.log(calculaSado(saldoDisponivel, lista))