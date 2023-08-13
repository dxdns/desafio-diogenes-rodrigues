import { cardapio, formasPagamento } from "./data.js";

class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    // Verifica se há itens no carrinho.
    if (itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    // Obtém as informações do método de pagamento.
    const mPagamento = formasPagamento[metodoDePagamento];

    // Verifica se o método de pagamento é válido.
    if (!mPagamento) {
      return "Forma de pagamento inválida!";
    }

    // Extrai os valores de desconto e acréscimo do método de pagamento.
    const { pDesconto, pAcrescimo } = mPagamento;

    let valorTotalPedido = 0;
    let valorTotalItens = 0;
    let produtos = [];

    const extras = [];

    // Loop através dos itens no carrinho.
    for (const item of itens) {
      // Divide a string do item em produto e quantidade.
      const [produto, quantidade] = item.split(",");

      // Obtém as informações do produto a partir do cardápio.
      const cardapioProduto = cardapio[produto];

      // Verifica se o produto é válido.
      if (!cardapioProduto) {
        return "Item inválido!";
      }

      // Obtém o valor do produto.
      const valorProduto = cardapioProduto.valor;

      // Verifica se a quantidade é um número válido ou se é menor ou igual a zero.
      if (isNaN(quantidade) || quantidade <= 0) {
        return "Quantidade inválida!";
      }

      // Adiciona o nome dos produtos no array.
      produtos.push(produto);

      // Calcula o valor total dos itens.
      valorTotalItens += valorProduto * quantidade;

      // Verifica se o produto é um item extra e o adiciona ao array de extras.
      if (cardapioProduto.extra) {
        extras.push(cardapioProduto.extra);
      }
    }

    // Verifica se pelo menos um item no carrinho possui um item principal correspondente.
    if (!produtos.some((item) => this.temItemPrincipal(item, produtos))) {
      return "Item extra não pode ser pedido sem o principal";
    }

    // Filtra os extras que não possuem um item principal correspondente.
    const itensPrincipaisAusentes = extras.filter(
      (extra) => !produtos.includes(extra)
    );

    // Verifica se há extras sem um item principal correspondente.
    if (itensPrincipaisAusentes.length > 0) {
      return "Item extra não pode ser pedido sem o principal";
    }

    // Calcula o valor do desconto e acréscimo.
    const valorDesconto = (valorTotalItens * pDesconto) / 100;
    const valorAcrescimo = (valorTotalItens * pAcrescimo) / 100;

    // Calcula o valor total do pedido.
    valorTotalPedido = valorTotalItens - valorDesconto + valorAcrescimo;

    return this.formatarValor(valorTotalPedido);
  }

  /**
   * Verifica se um item extra é pedido junto com o item principal correspondente.
   * @param {string} item - Nome do item que está sendo verificado.
   * @param {string[]} produtos - Array apenas com o nome dos produtos.
   * @returns {boolean} True se o item extra for pedido com o item principal correspondente, caso contrário, False.
   */
  temItemPrincipal(item, produtos) {
    const produto = cardapio[item];
    return !produto.extra || produtos.includes(produto.extra);
  }

  /**
   * Formata o valor total do pedido como uma string no estilo monetário, com duas casas decimais.
   * @param {number} valorTotalPedido - O valor total do pedido a ser formatado.
   * @returns {string} Uma string formatada no estilo monetário, por exemplo: "R$ 123,45".
   */
  formatarValor(valorTotalPedido) {
    return `R$ ${valorTotalPedido.toFixed(2).replace(".", ",")}`;
  }
}

export { CaixaDaLanchonete };
