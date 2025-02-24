var produtos = [
    { img: "imagens/Baton-removebg-preview.png", titulo: "Baton", descricao: "Chocolate ao leite com 30 unidades", preco: 62.89 },
    { img: "imagens/caixa_prestigio-removebg-preview.png", titulo: "Caixa de prestigio", descricao: "Chocolate com recheio de coco com 30 unidades", preco: 51.40 },
    { img: "imagens/Caixa_Tortuguita-removebg-preview.png", titulo: "Caixa de tortuguita", descricao: "Tortuguita de baunilha com 24 unidades", preco: 53.45 },
    { img: "imagens/Ferrero_Rocher-removebg-preview.png", titulo: "Ferrero Rocher", descricao: "Bombom de avelã com 8 unidades", preco: 55.86 },
    { img: "imagens/Snickers-removebg-preview.png", titulo: "Snickers", descricao: "Barra de chocolate com 20 unidades", preco: 34.50 },
    { img: "imagens/Treno_Leite-removebg-preview.png", titulo: "Treno de leite", descricao: "Chocolate ao leite caixa com 16 unidades", preco: 45.80 },
    { img: "imagens/Treno_Massino-removebg-preview.png", titulo: "Treno de massino", descricao: "Chocolate ao leite caixa com 15 unidades", preco: 44.40 },
    { img: "imagens/Treno_Morango-removebg-preview.png", titulo: "Treno de morango", descricao: "Chocolate sabor morango caixa com 16 unidades", preco: 43.60 },
    { img: "imagens/Milkaoreo-removebg-preview.png", titulo: "Milkaoreo", descricao: "Chocolate ao leite com pedaços da bolacha Oreo", preco: 12.92 }
];

var listaCarrinho = []; // Armazena os itens adicionados ao carrinho

// Função para criar e exibir os cards de produtos de forma organizada em 3 colunas e 3 linhas
function criarCards() {
    var cardContainer = document.getElementById("divprodutos");
    cardContainer.innerHTML = ""; // Limpa os cards antes de gerar novos

    // Adiciona classe para exibição correta em grid
    cardContainer.classList.add("grid-container");

    produtos.forEach((produto, index) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${produto.titulo}</h3>
            <img class="cardimg" src="${produto.img}" alt="Imagem de ${produto.titulo}">
            <p>${produto.descricao}</p>
            <h3>R$ ${produto.preco.toFixed(2)}</h3>
            <button class="botoescards" onclick="adicionarAoCarrinho(${index})">Adicionar no carrinho</button>
        `;
        cardContainer.appendChild(card);
    });
}
// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(index) {
    listaCarrinho.push(produtos[index]); // Adiciona o produto ao carrinho
    exibirCarrinho(); // Atualiza o carrinho
}

// Função para remover um item do carrinho pelo índice
function removerDoCarrinho(posicao) {
    listaCarrinho.splice(posicao, 1); // Remove item da lista
    exibirCarrinho(); // Atualiza o carrinho após remoção
}

// Função para exibir os itens no carrinho e calcular o total da compra
function exibirCarrinho() {
    var ulCarrinho = document.getElementById("listaCarrinho");
    var total = 0;
    ulCarrinho.innerHTML = "";

    listaCarrinho.forEach((item, index) => {
        total += item.preco;
        ulCarrinho.innerHTML += `
            <li>
                <p>${item.titulo} - R$ ${item.preco.toFixed(2)}</p>
                <button onclick="removerDoCarrinho(${index})">Remover</button>
            </li>
        `;
    });

    document.getElementById("totalCompra").innerText = `Total: R$ ${total.toFixed(2)}`