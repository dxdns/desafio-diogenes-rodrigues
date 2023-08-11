class CaixaDaLanchonete {
    cardapio = {
        cafe: {
            descricao: "Café",
            valor: 3.00
        },
        chantily: {
            descricao: "Chantily (extra do Café)",
            valor: 1.50,
            extra: "cafe"
        },
        suco: {
            descricao: "Suco Natural",
            valor: 6.20,
        },
        sanduiche: {
            descricao: "Sanduíche",
            valor: 6.50
        },
        queijo: {
            descricao: "Queijo (extra do Sanduíche)",
            valor: 2.00,
            extra: "sanduiche"
        },
        salgado: {
            descricao: "Salgado",
            valor: 7.25
        },
        combo1: {
            descricao: "1 Suco e 1 Sanduíche",
            valor: 9.50
        },
        combo2: {
            descricao: "1 Café e 1 Sanduíche",
            valor: 7.50
        }
    }

    formasPagamento = {
        dinheiro: {
            pDesconto: 5,
            pAcrescimo: 0
        },
        debito: {
            pDesconto: 0,
            pAcrescimo: 0
        },
        credito: {
            pDesconto: 0,
            pAcrescimo: 3,
        }
    }

    // getPaymentMethod(method) {
    //     let mPayment = this.formasPagamento[method]
    //     return mPayment? mPayment : "Forma de pagamento inválida!";
    // }

    // getItem(items) {
    //     return items[0].split(",");
    // }
    
    calcularValorDaCompra(metodoDePagamento, itens) {
        if (itens.length == 0) {
            return "Não há itens no carrinho de compra!";
        }

        metodoDePagamento = this.formasPagamento[metodoDePagamento]

        if (metodoDePagamento === undefined) {
            return "Forma de pagamento inválida!";
        }

        // if(itens.length > 0 ) {
        //     itens = itens[0].split(",");
        // }
        // let test = []
        // itens.forEach(element => {
        //     console.log(element)
        //     // test = [...test, element]
        // });

        // console.log(itens)

        // itens = itens[0].split(",");
        let quantidade = itens[1];

        let desconto = metodoDePagamento.pDesconto;
        let acrescimo = metodoDePagamento.pAcrescimo;

        if (quantidade == 0) {
            return "Quantidade inválida!";
        }
        
        let descricao = this.cardapio[itens[0]].descricao;
        let valor = this.cardapio[itens[0]].valor;
        let extra = this.cardapio[itens[0]].extra;

        let valorDesconto = (Number((valor * desconto ) || 0) / 100);
        let valorAcrescimo = (Number((valor * acrescimo)  || 0) / 100);
        
        let total = ((valor * quantidade) - valorDesconto) + valorAcrescimo;
        
        return `R$ ${total.toFixed(2).replace(".", ",")}`;
    }

}

export { CaixaDaLanchonete };
