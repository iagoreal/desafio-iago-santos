class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        const cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };
        let valorTotal = 0;

        // verificando se carro está vazio
        if (itens.length === 0) {
            console.log('Não há itens no carrinho de compra!')

        }

        // verificando se a forma de pagamento é válida.
        if (metodoDePagamento !== "débito" && metodoDePagamento !== "crédito" && metodoDePagamento !== "dinheiro") {
            console.log('Forma de pagamento inválida!');
        }

        // iterando sobre o cardapio
        for (let item of itens) {
            const [codigo, quantidade] = item.split(',');

            // valor total da compra
            valorTotal += cardapio[codigo] * quantidade;

            // verificando se a quantidade é válida
            if (quantidade <= 0) {
                console.log('Quantidade inválida!');
            };

            // verificando se o código é válido.
            if (!cardapio.hasOwnProperty(codigo)) {
                console.log('Item inválido!')
            }

            // verificando caso tenha item extra sem principal
            if (codigo === 'chantily' && !itens.includes('cafe,1')) {
                console.log('Item extra não pode ser pedido sem o principal');
                break;
            }
            if (codigo === 'queijo' && !itens.includes('sanduiche,1')) {
                console.log('Item extra não pode ser pedido sem o principal');
                break;
            } else {
                return console.log(`R$ ${valorTotal.toFixed(2).replace('.', ',')}`);
            }

        }
        // calculando valor total e taxas
        if (metodoDePagamento === 'dinheiro') {
            valorTotal *= 0.95;
        } else if (metodoDePagamento === 'credito') {
            valorTotal *= 1.03;
        }
    }
}
export { CaixaDaLanchonete };