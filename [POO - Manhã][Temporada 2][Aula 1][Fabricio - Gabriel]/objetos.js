let aluno1 = new Aluno('', '01', 'Fabricio', '16');
let aluno2 = new Aluno('', '02', 'Gabriel', '17');
let aluno3 = new Aluno('', '03', 'Melrick', '16');

let listaDeAlunos = [];
listaDeAlunos.push(aluno1, aluno2, aluno3);

var outAlunos = document.getElementById("outAlunos"); 

for(let i = 0; i < listaDeAlunos.length; i++){
    outAlunos.innerHTML += `
        <div class='cards'>
            <div class='foto'>${listaDeAlunos[i].foto}</div>
            <div class='nome'>${listaDeAlunos[i].nome}</div>
            <div class='matricula'>Matrícula: ${listaDeAlunos[i].matricula}</div>
            <div class='idade'>Idade: ${listaDeAlunos[i].idade}</div>
        </div>
    `;
}