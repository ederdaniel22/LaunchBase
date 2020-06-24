//Criar um programa que calcula a média
//das notas entre os alunos e envia mensagem
//do cálculo da média
//se a média for maior que 7 parabenizar a turma

const aluno01 = 'Eder'
const notaAluno1 = 10

const aluno2 = 'Daniel'
const notaAluno2 = 8

const aluno3 = 'Domingues'
const notaAluno3 = 8.5

const media = (notaAluno1 + notaAluno2 + notaAluno3)/3;
console.log(media);

if(media > 5 ){
    console.log(`A nota foi de ${media}. Parabéns`);
}else {
    console.log('A media tá ruim');
}
    const idade = 16
    if(idade > 18){
        console.log('deixar entrar')
    } else{
        console.log('Barrados no baile')
    }

    console.log(5 == 5  && 6 == 6 )
    console.log(5 == 5  && 6 != 6 )
    
    console.log(5 != 5  || 6 == 6 )
    console.log(5 == 5  || 6 != 6 )
    
    console.log(!(5 > 6 ))
    console.log(!(5 < 6))
    
    


