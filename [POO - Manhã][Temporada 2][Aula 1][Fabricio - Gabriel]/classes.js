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
        return(dataAtual - this.dataDeNascimento.year)
    }
}