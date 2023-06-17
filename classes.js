class Aluno{
        constructor(nome, matricula){
            this.nome = nome;
            this.matricula = matricula;
        }
       
}

class Turma{
    constructor(){
        this.alunosPriAno = [];
        this.alunosSegAno = [];
    }
    addAlunoPriAno(aluno){
        this.alunosPriAno.push(aluno);
    }
    addAlunoSegAno(aluno){
        this.alunosSegAno.push(aluno);
    }
    removeAlunoPriAno(aluno){
        for (let i = 0; i < this.alunosPriAno.length; i++) {
           if(this.alunosPriAno[i] == aluno){
            this.alunosPriAno.splice(i, 1)
            i--
           }
        }
    }
    removeAlunoSegAno(aluno){
        for(let i = 0; i < this.alunosSegAno.length; i++){
            if (this.alunosSegAno[i] == aluno) {
                this.alunosSegAno.splice(i, 1);
                i--
            }
        }
    }
    showAlunosPriAno() {
        for(let i = 0; i < this.alunosPriAno.length; i++) {
            console.log(this.alunosPriAno[i]);
        }
    }
    showAlunosSegAno() {
        for(let i = 0; i < this.alunosSegAno.length; i++) {
            console.log(this.alunosSegAno[i]);
        }
    }
    
}