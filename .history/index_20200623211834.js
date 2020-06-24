//Criar um programa que calcula a média
//das notas entre os alunos e envia mensagem
//do cálculo da média
//se a média for maior que 7 parabenizar a turma

const aluno01 = 'Eder'
const notaAluno1 = 2

const aluno2 = 'Daniel'
const notaAluno2 = 6

const aluno3 = 'Domingues'
const notaAluno3 = 6.9

const media = (notaAluno1 + notaAluno2 + notaAluno3)/3;
console.log(media);

if(media > 5 ){
    console.log(`A nota foi de ${media}. Parabéns`);
}else {
    console.log('A media tá ruim');
}

