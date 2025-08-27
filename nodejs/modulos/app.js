const modulo = require('./meuModulo'); // Importando o módulo
const calc = require('./calculadora_idade'); // Importando o módulo

const mensagem = modulo.saudacao('Henrique'); // Executando a função
const mensagemIdade = calc.idade('Henrique', 2008); // Executando a função
console.log(mensagem);
console.log(mensagemIdade);