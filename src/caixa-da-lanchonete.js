import { cardapio, formasPagamento } from "./data.js";

class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    if (itens.length == 0) {
      return "Não há itens no carrinho de compra!";
    }

    let mPagamento = formasPagamento[metodoDePagamento];

    if (mPagamento === undefined) {
      return "Forma de pagamento inválida!";
    }

    let { pDesconto, pAcrescimo } = mPagamento;

    let valorTotal = 0;

    let quantidadeProdutos = 0;
    let somaValorItens = 0;
    let apenasItens = [];
    let extra;

    itens.map((v, i) => {
      let [produto, quantidade] = v.split(",");
      apenasItens = [...apenasItens, produto];
      let cardapioProduto = cardapio[produto];
      
      quantidadeProdutos += quantidade;

      let valorProduto = cardapioProduto.valor;
      extra = cardapioProduto.extra;

      somaValorItens += valorProduto * quantidade;

      let valorDesconto = (somaValorItens * pDesconto) / 100;
      let valorAcrescimo = (somaValorItens * pAcrescimo) / 100;

      valorTotal = somaValorItens - valorDesconto + valorAcrescimo;

      // console.log(produto, quantidade, quantidade == 0);
      // console.log(`${produto}, ${metodoDePagamento}, valor: ${valorProduto}, desconto: ${pDesconto}, acrescimo: ${pAcrescimo}`);
      // console.log(`produto: ${produto} valor: ${valorProduto}`)
      // console.log(`itens: ${itens}, somaValorItens: ${somaValorItens}`)
      // console.log(`desconto: ${valorDesconto}, acrescimo: ${valorAcrescimo} total: ${valorTotal}`);

      console.log("-----------------------------------------------------");
    });

    if (quantidadeProdutos == 0) {
      return "Quantidade inválida!";
    }

    console.log(extra);
    console.log(apenasItens);

    // if (!apenasItens.includes(extra)) {
    //   return "Item extra não pode ser pedido sem o principal";
    // }

    // if (extra !== undefined) {
    //   // console.log(extra);
    //   // console.log(apenasItens);
    //   // console.log(!apenasItens.includes(extra));
    //   // console.log("Item extra não pode ser pedido sem o principal");

    //   if (!apenasItens.includes(extra)) {
    //     return "Item extra não pode ser pedido sem o principal";
    //   }
    // }

    return `R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
  }
}

export { CaixaDaLanchonete };
