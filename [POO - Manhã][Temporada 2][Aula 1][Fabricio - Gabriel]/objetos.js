let aluno1 = new Aluno('2°(Manhã)', 'fagc1@aluno.ifal.edu.br','https://lh3.googleusercontent.com/d/17jAtucgnXEUVT06_Rhm-n1xQazWmsuM5', '2022304463', 'Fabricio Arcanjo Guimarães Costa', '16');
let aluno2 = new Aluno('2°(Manhã)', 'gllf1@aluno.ifal.edu.br','https://lh3.googleusercontent.com/d/1NTR45eSWi_6haSJi3P-IMqGJdkrOt-0J', '20223056300', 'Gabriel Luiz Lourenço Farias', '17');
let aluno3 = new Aluno('2°(Manhã)','mdrf1@aluno.ifal.edu.br','https://lh3.googleusercontent.com/d/1XUZw8EtjRqL7ouVNORZIVGii2FJxxL_F', '2022305307', 'Melrick Davison Fonseca Ribeiro', '16');

let listaDeAlunos = [];
listaDeAlunos.push(aluno1, aluno2, aluno3);

var outAlunos = document.getElementById("outAlunos"); 

for(let i = 0; i < listaDeAlunos.length; i++){
    outAlunos.innerHTML += `
        <div class='card'>
            <div class='cabecalho'>
                <div>
                    <div class='turma'>${listaDeAlunos[i].turma}</div>
                    <h3 class='nome'>${listaDeAlunos[i].nome}</h3>
                </div>
                <img class='ifal' src="./LogoIfal-removebg-preview.png" alt="">
            </div>

            <div class='corpo'>
                <img src="${listaDeAlunos[i].foto}" alt="">
                    <div class='info'>
                        <div>
                            <p class='label'>Matricula:</p>
                            <p class='valor'>${listaDeAlunos[i].matricula}</p>
                        </div>
                        <div>
                            <p class='label'>Email:</p>
                            <p class='valor'>${listaDeAlunos[i].email}</p>
                        </div>
                    </div>

            </div>
        </div>
    `;
}