import movies from "../models/movieSchema";

const home = (req, res) => {
  res.status(200).send({
    statusCode: 200,
    message: "Welcome to Teraflix!",
  });
};

// DEMANDA: retornar todos os filmes

// DEMANDA: cadastrar novo filme

// DEMANDA: deletar um filme

// DEMANDA: atualizar o gênero do filme

export default {
  home,
};
