var nota1 = Number(prompt("Digite a nota do 1° bimestre: "));
var nota2 = Number(prompt("Digite a nota do 2° bimestre: "));

if (nota1 < 6 && nota2 < 6) {
    var nota_rs1 = Number(prompt("Você não alcançou a média!\nDigite a nota da recuperação: "));
    
    if (nota1 < nota2) {
        nota1 = nota_rs1
    } else {
        nota2 = nota_rs1
    }

} else if (nota1 < 6 || nota2 < 6) {
    if (nota1 < 6) {
        nota_rs1 = Number(prompt("A media do 1° bimestre não foi alcançada!\nDigite a nota da recuperação: "));
        nota1 = nota_rs1
    } else {
        nota_rs1 = Number(prompt("A media do 2° bimestre não foi alcançada!\nDigite a nota da recuperação: "));
        nota2 = nota_rs1
    }

}

var nota3 = Number(prompt("Digite a nota do 3° bimestre: "));
var nota4 = Number(prompt("Digite a nota do 4° bimestre: "));

    if (nota3 < 6 && nota4 < 6) {
        var nota_rs2 = Number(prompt("Você não alcançou a média!\nDigite a nota da recuperação: "));
        
        if (nota3 < nota4) {
            nota3 = nota_rs2
        } else {
            nota4 = nota_rs2
        }

    } else if (nota3 < 6 || nota4 < 6) {
        if (nota3 < 6) {
            nota_rs2 = Number(prompt("A media do 3° bimestre não foi alcançada!\nDigite a nota da recuperação: "));
            nota3 = nota_rs2
        } else {
            nota_rs2 = Number(prompt("A media do 4° bimestre não foi alcançada!\nDigite a nota da recuperação: "));
            nota4 = nota_rs2
        }
    }

var soma = nota1 + nota2 + nota3 + nota4;
var mediaAnual = (soma / 4);

if (mediaAnual >= 6) {

    alert('Nota total: ' + mediaAnual + '\nSituação: Aprovado');

} else if (mediaAnual < 6 && mediaAnual >= 4) {
    var frequencia = Number(prompt("Digite o número de faltas: "));
    if (frequencia > 25) {
        alert('Nota total: ' + mediaAnual + '\nSituação: Reprovado');
    } else {

        var provaFinal = Number(prompt("Você foi para a prova final!\nDigite a sua nota: "));
        var mediaFinal = ((mediaAnual * 4) + (provaFinal * 6)) / 10

        if (mediaFinal >= 6) {
            alert('Nota total: ' + mediaFinal + '\nSituação: Aprovado');
        } else {
            alert('Nota total: ' + mediaFinal + '\nSituação: Reprovado');
        }
    }
} else {
    alert('Nota total: ' + mediaAnual + '\nSituação: Reprovado');
}

