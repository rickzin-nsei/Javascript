module.exports = {
    cliente: (req, res) => {
    res.sendFile('cliente.html', { root: './views' });
  }
}