let aluno1 = new Aluno('https://lh3.googleusercontent.com/d/17jAtucgnXEUVT06_Rhm-n1xQazWmsuM5', '01', 'Fabricio', '16');
let aluno2 = new Aluno('https://lh3.googleusercontent.com/d/1NTR45eSWi_6haSJi3P-IMqGJdkrOt-0J', '02', 'Gabriel', '17');
let aluno3 = new Aluno('https://lh3.googleusercontent.com/d/1XUZw8EtjRqL7ouVNORZIVGii2FJxxL_F', '03', 'Melrick', '16');

let listaDeAlunos = [];
listaDeAlunos.push(aluno1, aluno2, aluno3);

var outAlunos = document.getElementById("outAlunos"); 

for(let i = 0; i < listaDeAlunos.length; i++){
    outAlunos.innerHTML += `
        <div class='cards'>
            <img src="${listaDeAlunos[i].foto}" alt="">
            <div class='nome'>${listaDeAlunos[i].nome}</div>
            <div class='matricula'>Matrícula: ${listaDeAlunos[i].matricula}</div>
            <div class='idade'>Idade: ${listaDeAlunos[i].idade}</div>
        </div>
    `;
}