function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
    //alert("Obrigado por clicar");
}
function redirecionar(){
    window.open("https://remoteok.com/")
    //window.location.href = "https://remoteok.com/"
}
function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar"
   elemento.innerHTML = "Obrigado por passar"
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*var lista = ["maçã", "pêra", "laranja"]
console.log(lista.length);

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));

/*function soma(n1, n2){
    return n1 + n2
}
alert(soma(5,10));

/*var d =  new Date();
alert(d);

/*var count;
for(count=0; count<=5; count++){
   alert(count); 
};


/*var validar = 0;
function validaIdade (idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);

/*var count = 0
while(count<= 1000){
    console.log(count);
    count = count + 1
}*/



 /*
var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("menor de idade");
};

/*var lista = ["maçã", "pêra", "laranja"];
lista.push("uva")
console.log(lista);
console.log(lista.toString())
console.log(lista.join("  "))

/*var lista = ("maçã", "pêra", "laranja");
console.log(lista);
console.log(lista.toString());

var lista = ["maçã", "pêra", "laranja"];
lista.pop()
console.log(lista)


var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
console.log(lista);

/*var lista = ["maçã", "pêra", "laranja"];
console.log(lista[1]);
alert(lista[0])

var lista = ["maça", "pêra", "laranja"];
console.log(lista)


/*var frutas = [{nome: "maçã", cor: "vermelha"},{nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);

/*var fruta = {nome: "maçã", cor: "vermelha"}
var frase = " é de cor "
console.log(fruta.nome + frase + fruta.cor);
alert(fruta.cor);


/*var N1 = 5;
var N2 = 6;
console.log(N1 * N2);

/*var frase = "Brasil é o melhor time do mundo";
console.log(frase.toUpperCase());

/*var frase = "Brasil é o melhor time do mundo";
console.log(frase.toLowerCase());

/*var frase = "Japão é o melhor time do mundo";
alert(frase.replace("Japão", "Brasil"));

/*var frase = "Japão é o melhor time do mundo";
console.log(frase.replace("Japão", "Brasil"));

/*var nome = "Josué"
var idade = 9;
var idade2 = 52;
var frase = "Japão é o melhor time do mundo";
console.log(nome);
console.log(idade + idade2);
console.log(frase);

var nome = "Josué"
var idade = 30;
var idade2 = 1;
console.log(nome);
console.log(idade + idade2);

var idade = "29";
var idade2 = "10";
alert(idade + idade2);

var nome = "Josué Negreiros Fernandes";
var idade = 30;
var idade2 = 60;
//alert("O primeiro JS de " + nome + ". "+ nome + " tem " + idade + " anos.")
alert(idade + idade2);
*/