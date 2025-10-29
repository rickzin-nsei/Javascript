const loginModel = require('../models/loginModel');


module.exports = {
    cliente: (req, res) => {
    res.sendFile('cliente.html', { root: './views' });
  },

  login: (req, res) => {
    res.sendFile('login.html', { root: './views' });
  },

  logininfo: (req, res) => {
      const { nome, idade , email, senha, gender} = req.body;
      const mensagem1 = loginModel.gerarMensagem(nome, idade, email, senha , gender);
      res.send(`<h1>${mensagem1}</h1>`);
    }
}