module.exports = {
  gerarMensagemPersonalizada: (nome, idade, gender) => {
    let faixaEtaria;

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else if (idade < 60) {
      faixaEtaria = "adulto";
    } else {
      faixaEtaria = "idoso";
    }

    if (gender = "male") {
      gender = "masculino";
    } else if (gender = "female") {
      gender = "feminino";
    } else if (gender = "other") {
      gender = "outro";
    }

    return `Olá, ${nome}! Você é um(a) ${faixaEtaria}, do gênero ${gender}.`;
  }
};
