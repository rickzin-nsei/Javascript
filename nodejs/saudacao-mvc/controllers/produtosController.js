const produtosModel = require('../models/produtosModel');
module.exports = {
    produtos: (req, res) => {
    res.sendFile('produtos.html', { root: './views' });
  },

  camisetas: (req, res) => {
    res.sendFile('camisetas.html', { root: './views' });
  },

  formcadastrar: (req, res) => {
    res.sendFile('formcada.html', { root: './views' });
  },

  cadastrar: (req, res) => {
      const { id, nome, descricao , quantidade, preco } = req.body;
      const mensagemcadastro = produtosModel.cadastrar(id, nome, descricao , quantidade, preco);
      res.send(`<h1>${mensagemcadastro}</h1>`);
    }
};