function filtraPares(arr){
    return arr.filter(callback);
}
function callback (item){
    return item % 2 === 0; //return item % 2 !== 0; (para ver os números ímpares)
}
const meuArray  = [1, 2, 6, 55, 77, 81];

console.log(filtraPares(meuArray));