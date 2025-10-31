module.exports = {
  cadastrar: (id, nome,  descricao , quantidade, preco) => {
  
    return ` o produto ${nome}, com ID: ${id}, ${descricao}- quantidade: ${quantidade}- Valor unitário: ${preco} <br> foi cadastrado com sucesso`;
  }
};
