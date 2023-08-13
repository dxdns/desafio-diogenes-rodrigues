const cardapio = {
  cafe: {
    descricao: "Café",
    valor: 3.0,
  },
  chantily: {
    descricao: "Chantily (extra do Café)",
    valor: 1.5,
    extra: "cafe",
  },
  suco: {
    descricao: "Suco Natural",
    valor: 6.2,
  },
  sanduiche: {
    descricao: "Sanduíche",
    valor: 6.5,
  },
  queijo: {
    descricao: "Queijo (extra do Sanduíche)",
    valor: 2.0,
    extra: "sanduiche",
  },
  salgado: {
    descricao: "Salgado",
    valor: 7.25,
  },
  combo1: {
    descricao: "1 Suco e 1 Sanduíche",
    valor: 9.5,
  },
  combo2: {
    descricao: "1 Café e 1 Sanduíche",
    valor: 7.5,
  },
};

const formasPagamento = {
  dinheiro: {
    pDesconto: 5,
    pAcrescimo: 0,
  },
  debito: {
    pDesconto: 0,
    pAcrescimo: 0,
  },
  credito: {
    pDesconto: 0,
    pAcrescimo: 3,
  },
};

export { cardapio, formasPagamento };
