const Palavras = ['Olááá', 'oi', 'generoso'];

const maiorPalavra = Palavras.reduce((maiorPalavra, palavraAtual) => {
    if(palavraAtual.length > maiorPalavra.length) {
        return palavraAtual;
    } 
    return maiorPalavra;
}, '');
console.log(maiorPalavra);