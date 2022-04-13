let notas = [
{nome: "aluno 1", nota1: 7.6, nota2:8.9, nota3: 9.9, nota4: 6.8},
{nome: "aluno 2", nota1: 4.5, nota2: 9.6, nota3: 7.6, nota4: 8.7},
{nome: "aluno 3", nota1: 9.2, nota2:8.5, nota3: 7.3, nota4:5.6},
{nome: "aluno 4", nota1: 10.0, nota2: 9.6, nota3: 10.0, nota4: 9.4}
];
console.log(notas);

let medias = notas.map(function(item){
  let media = {nome: item.nome, media: (item.nota1+item.nota2+item.nota3+item.nota4)/4}
  return media;  
});
console.log(medias);