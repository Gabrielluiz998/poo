class Aluno {
    constructor(turma, email, primeiroNome, ultimoNome, foto, matricula, dataDeNascimento){
        this.turma = turma;
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.foto = foto;
        this.matricula = matricula;
        this.email = email;
        this.dataDeNascimento = dataDeNascimento;
    }

    
    getNome(){
        return (`${this.ultimoNome}, ${this.primeiroNome}`);
    }

    getIdade (){
        if(hoje.getDate() === this.dataDeNascimento.getDate() && hoje.getMonth() === this.dataDeNascimento.getMonth()) {
            let hoje = new Date()
            return (hoje.getFullYear() - this.dataDeNascimento.getFullYear())
        }   
        else {
            return ((hoje.getFullYear() - this.dataDeNascimento.getFullYear()) - 1)
        }
    }
}