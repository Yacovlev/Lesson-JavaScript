//imprimir de 1 a 10
/*for(var i=1; i<=10; i++){
    console.log(i);
}*/

//Imprimir os números impares menores que 100
/*for (var i=1; i<=100; i +=2){
    console.log(i)
}*/

//Imprimir a tabuada do número 8 
/* for(var i=1; i<=10; i++){
    var row = "8*"+i+"="+8*i;
    console.log(row);
} */

//Imprimir todas as tabuadas do número 1 ao 10 
function imprimirTabuada(n){
   for (var i=1;i<=10; i++)  {
    var linha = n+"*"+i+"="+n*i;
    console.log(linha); 
 }
}
for (var i=1; i<=10;i++) {
    imprimirTabuada(i)
    console.log("");
}