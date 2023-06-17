let aluno1 = new Aluno("Gabriel", 1);
let aluno2 = new Aluno("Fabricio", 2);
let aluno3 = new Aluno("Melrick", 3);
let aluno4 = new Aluno("Davi", 4);
let aluno5 = new Aluno("Gabriel", 5);
let aluno6 = new Aluno("Luiza", 6);
let aluno7 = new Aluno("Adonai", 7);
let aluno8 = new Aluno("Matheus", 8);
let aluno9 = new Aluno("Guilherme", 9);
let aluno10 = new Aluno("Isabel", 10);

var listaDeAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6, aluno7, aluno8, aluno9, aluno10];
for(let i = 0; i < listaDeAlunos.length; i++){
    console.log(`Nome: ${listaDeAlunos[i].nome} \n Matrícula: ${listaDeAlunos[i].matricula}`);
}

console.log('=====================================================');
console.log('Primeiro Ano:\n');

let primeiroAno = new Turma();
primeiroAno.addAlunoPriAno(aluno6);
primeiroAno.addAlunoPriAno(aluno7);
primeiroAno.addAlunoPriAno(aluno8);
primeiroAno.addAlunoPriAno(aluno9);
primeiroAno.addAlunoPriAno(aluno10);

primeiroAno.showAlunosPriAno();

console.log('=====================================================');
console.log('Segundo Ano:\n');

let segundoAno = new Turma();
segundoAno.addAlunoSegAno(aluno1),
segundoAno.addAlunoSegAno(aluno2),
segundoAno.addAlunoSegAno(aluno3),
segundoAno.addAlunoSegAno(aluno4),
segundoAno.addAlunoSegAno(aluno5),

console.log(segundoAno.showAlunosSegAno());