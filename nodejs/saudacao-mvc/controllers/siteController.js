const saudacaoModel = require('../models/saudacaoModel');

module.exports = {
  index: (req, res) => {
    res.sendFile('index.html', { root: './views' });
  },

  users: (req, res) => {
    res.sendFile('users.html', { root: './views' });
  },

  seila: (req, res) => {
    res.sendFile('seila.html', { root: './views' });
  },

  formulario: (req, res) => {
    res.sendFile('formulario.html', { root: './views' });
  },

  saudacao: (req, res) => {
    const { nome, idade , gender} = req.body;
    const mensagem = saudacaoModel.gerarMensagemPersonalizada(nome, idade, gender);
    res.send(`<h1>${mensagem}</h1>`);
  }
};
