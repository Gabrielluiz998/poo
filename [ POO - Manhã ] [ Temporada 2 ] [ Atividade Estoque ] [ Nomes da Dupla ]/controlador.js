var descricao = document.getElementById("iptDescricao");
var precoUnitario = document.getElementById("iptPrecoUnitario");
var btnAdicionarNoEstoque = document.getElementById("btnAdicionarNoEstoque");
var container = document.getElementsByClassName("container");

var estoque = new Estoque();

btnAdicionarNoEstoque.addEventListener("click", quandoClicarNoBotaoCadastrar());
function quandoClicarNoBotaoCadastrar() {
    let produtoTemp = new Produto(descricao, precoUnitario);
    estoque.adicionarProduto(produtoTemp);

    desenharCards(container, estoque)
}
