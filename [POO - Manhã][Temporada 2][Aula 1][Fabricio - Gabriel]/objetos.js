let aluno1 = new Aluno('2°(Manhã)', 'fagc1@aluno.ifal.edu.br', 'Fabricio', 'Costa', 'https://lh3.googleusercontent.com/d/17jAtucgnXEUVT06_Rhm-n1xQazWmsuM5', '2022304463', new Date("2006-09-06"));
let aluno2 = new Aluno('2°(Manhã)', 'gllf1@aluno.ifal.edu.br','Gabriel', 'Farias' , 'https://lh3.googleusercontent.com/d/1NTR45eSWi_6haSJi3P-IMqGJdkrOt-0J', '20223056300', new Date("2006-04-20"));
let aluno3 = new Aluno('2°(Manhã)','mdrf1@aluno.ifal.edu.br', 'Melrick', 'Ribeiro', 'https://lh3.googleusercontent.com/d/1XUZw8EtjRqL7ouVNORZIVGii2FJxxL_F', '2022305307', '16');
let aluno4 = new Aluno('2°(Manhã)','kggr1@aluno.ifal.edu.br', 'Kemylly', 'Rodrigues','https://lh3.googleusercontent.com/d/1uWL4Z7JRW478UM_pObd4dGNp--USG5or', '2022304525', '17');
let aluno5 = new Aluno('2°(Manhã)','gfdg1@aluno.ifal.edu.br', 'Girleirde', 'Silva', 'https://lh3.googleusercontent.com/d/1D0tK367ziUWFUs2PgIVZKbTHEuiPV43r', '2022309216', 'Girleide', '17');
let aluno6 = new Aluno('2°(Manhã)','trfm1@aluno.ifal.edu.br','Thiago', 'Melo','https://lh3.googleusercontent.com/d/1yK1BWGSRxuHt4gP6mmYNOIRHs4plJ8gR', '2022398620', 'Thiago', '16');
let aluno7 = new Aluno('2°(Manhã)','ejcp1@aluno.ifal.edu.br','Ellen', 'Viana', 'https://lh3.googleusercontent.com/d/1xkGio1rSh25XTFnKAHcwXXsFliwU22HQ', '2022337845', 'Ellen Jaiany', '16');
let aluno8 = new Aluno('2°(Manhã)','rjlsd1@aluno.ifal.edu.br','Robert', 'Silva', 'https://lh3.googleusercontent.com/d/1drscdtgDQC-LFQVWkxioz8aJAPlELlcP', '202225625', 'Robert', '19');
let aluno9 = new Aluno('2°(Manhã)','rcpz1@aluno.ifal.edu.br', 'Reberca', 'Santos', 'https://lh3.googleusercontent.com/d/1vw8sfjAXTlZpfwTJNJSXJQd1sOgKiVb0', '20223045652', 'Rebeca', '16');
let aluno10 = new Aluno('2°(Manhã)','wmbs1@aluno.ifal.edu.br','Wytalo', 'Santos', 'https://lh3.googleusercontent.com/d/1veLv6ByeW7wDjrojoeoYjeE-vIprjSLz', '202230512', 'Wytalo', '17');
console.log(aluno1.getIdade());

let listaDeAlunos = [];
listaDeAlunos.push(aluno1, aluno2, aluno3, aluno4, aluno5, aluno6, aluno7, aluno8, aluno9, aluno10);

var outAlunos = document.getElementById("outAlunos"); 

for(let i = 0; i < listaDeAlunos.length; i++){
    outAlunos.innerHTML += `
        <div class='card'>
            <div class='cabecalho'>
                <div>
                    <div class='turma'>${listaDeAlunos[i].turma}</div>
                    <h3 class='nome'>${listaDeAlunos[i].getNome()}</h3>
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
                        <div
                            <p class='label'>Email:</p>
                            <p class='valor'>${listaDeAlunos[i].email}</p>
                        </div>
                    </div>

            </div>
        </div>
    `;
}