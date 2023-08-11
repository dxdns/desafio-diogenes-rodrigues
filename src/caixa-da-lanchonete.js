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
            pDesconto: 5
        },
        credito: {
            pAcrescimo: 3
        }
    }
    
    calcularValorDaCompra(metodoDePagamento, itens) {
        if (itens.length == 0) {
            return "Não há itens no carrinho de compra!";
        }
        
        itens = itens[0].split(",")
        let quantidade = itens[1]
        let desconto = this.formasPagamento[metodoDePagamento].pDesconto;
        let acrescimo = this.formasPagamento[metodoDePagamento].pAcrescimo;

        if (quantidade == 0) {
            return "Quantidade inválida!";
        }
        
        let descricao = this.cardapio[itens[0]].descricao
        let valor = this.cardapio[itens[0]].valor
        let extra = this.cardapio[itens[0]].extra
        
        let valorDesconto = (valor * desconto ) / 100
        let valorAcrescimo = (valor * acrescimo) / 100
        
        let total = (valor - Number(valorDesconto) || 0) + Number(valorAcrescimo) || 0

        console.log(desconto, acrescimo)
        return `R$ ${total.toFixed(2).replace(".", ",")}`;
    }

}

export { CaixaDaLanchonete };
