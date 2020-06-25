//criar objetos em JavaScript utilizando funções e constantes.

/*const aluno01 = {
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
const media =(aluno01.nota + aluno02.nota + aluno03.nota)/3
console.log(media)*/


//Para colocar todos os objetos em uma única variável
//criar uma variavel abrir colchetes dentro abrir chaves e incluir em cada chave as propriedadews dos objetos 
//separador por virgula e apara cada propriedade finalizar com virgula exceto o último

//A este conjunto de objetos e propriedades chamamos de array.

/*const alunos = [{
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
console.log(alunos)

const media =(alunos[0].nota + alunos[1].nota + alunos[2].nota)/3
console.log(media)

const nomesDeAlunos = ["Evelise", "Katherine", "Karoline"]
console.log(nomesDeAlunos)*/

//para mostrar tudo o que tem no array uso console.log para chamar e o nome da variável utilizada


const alunosDaTurmaA = [{
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
const alunosDaTurmaB = [{
    nome: "Janaina",
    nota: 7
},
{
    nome: "Izabella",
    nota: 9.5
},
{
    nome: "Danielle",
    nota: 7.5
}]
function calculaMedia(alunos){
    return(alunos[0].nota + alunos[1].nota + alunos[2].nota)/3
    //const media2 =(alunosDaTurmaB[0].nota + alunosDaTurmaB[1].nota + alunosDaTurmaB[2].nota)/3
}//para usar o bloco fora do escopo
//chamo a função criada e executo

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media){
    if(media > 5){
        console.log(`A media foi de ${media}. Parabéns`)
    }else {
        console.log(`A média é menor que 5 precisa estudar`)
    }
    
}

enviaMensagem(media1)
enviaMensagem(media2)
