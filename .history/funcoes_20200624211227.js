//criar objetos em JavaScript utilizando funções e constantes.

const aluno01 = {
    nome: "Eder",
    nota: 9.9
}
const aluno02 = {
    nome: "Daniel",
    nota: 10
}
const aluno03 = {
    nome: "Domingues",
    nota: 8.8
}



//Para colocar todos os objetos em uma única variável
//criar uma variavel abrir colchetes dentro abrir chaves e incluir em cada chave as propriedadews dos objetos 
//separador por virgula e apara cada propriedade finalizar com virgula exceto o último

//A este conjunto de objetos e propriedades chamamos de array.
const alunos = [{
    nome: "Karoline",
    nota: 10
},
{
    nome: "Katherine",
    nota: 9.5
},
{
    nome: "Evelise",
    nota: 10
}]
const media =(alunos.nota[0] + alunos.nota[1] + alunos.nota[2])/3
console.log(media)