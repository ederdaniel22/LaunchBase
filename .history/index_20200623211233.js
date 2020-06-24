//Criar um programa que calcula a média
//das notas entre os alunos e envia mensagem
//do cálculo da média
//se a média for maior que 7 parabenizar a turma

const aluno01 = 'Eder'
const notaAluno01 = 9.8

const aluno2 = 'Daniel'
const notaAluno2 = 7.5

const aluno3 = 'Domingues'
const notaAluno3 = 6.9

const media = (notaAluno1 + notaAluno2 + notaAluno3)/3

if(media < 6){
    console.log(`A nota foi de ${media}. Parabéns`);
}

console.log(media);
