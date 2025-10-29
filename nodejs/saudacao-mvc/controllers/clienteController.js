module.exports = {
    cliente: (req, res) => {
    res.sendFile('cliente.html', { root: './views' });
  },

  login: (req, res) => {
    res.sendFile('login.html', { root: './views' });
  }
}