//callback é uma função anônima passada como argumento para outra função

const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}
const soma = function(num1, num2) {
    return num1 + num2;
}
const sub = function(num1, num2){
    return num1 - num2;
}
const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 5, 3);

console.log(resultSoma);
console.log(resultSub);