//Criar um programa que calcula a média
//das notas entre os alunos e envia mensagem
//do cálculo da média

const aluno1 = 'Eder'
const notaAluno1 = 9.8

const aluno2 = 'Daniel'
const notaAluno2 = 7.5
const aluno3 = 'Domingues'
const notaAluno3 = 6.9

const media = (notaAluno1 + notaAluno2 + notaAluno3)/3
if(media < 6){
    console.log('aluno reprovado')
}elseif(media = 6 && media < 7){
    console.log('Aluno em recuperação')
} else (media >= 7) {
    console.log('Aluno aprovado')
}

console.log(media)
