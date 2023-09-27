function desenharCards(container, estoque) {
    container.innerHTML = "";

    for (let i = 0; i < estoque.listaDeProdutos.length; i++){
        container.innerHTML += `
            <div class="card">
                <p class="descricao">${estoque.listaDeProdutos[i].descricao}</p>
                <p class="preco">R$: ${estoque.listaDeProdutos[i].precoUnitario}</p>
            </div>
        `;
    };
};