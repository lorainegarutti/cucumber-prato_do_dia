module.exports = {
  menu: function pratoDoDia(dia) {
    switch (dia) {
      case "segunda-feira":
        return "Virado a paulista!";
      case "terça-feira":
        return "Dobradinha!";
      case "quarta-feira":
        return "Feijoada!";
      case "quinta-feira":
        return "Macarrão!";
      case "sexta-feira":
        return "Filé de peixe!";
      case "sábado":
        return "Bife a cavalo!";
    }
  }
};