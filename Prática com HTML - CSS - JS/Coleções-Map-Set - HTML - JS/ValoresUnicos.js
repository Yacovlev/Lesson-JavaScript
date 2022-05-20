const meuArray = [30, 30, 40, 5, 223, 475, 5, 686];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}
console.log(valoresUnicos(meuArray));