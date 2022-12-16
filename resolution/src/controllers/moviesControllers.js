import movies from "../models/movies.json";
import axios from "axios";

// criar funções que controlam as informações, recebendo as requisições e enviando as respostas

// configurar uma rota padrão de apresentação da API (opcional)
const home = (req, res) => {
  res.status(200).send({
    message: "Olá pessoa, seja bem vinda ao Teraflix!",
  });
};

// retornar todos os filmes
const getAll = (req, res) => {
  res.status(200).send(movies);
};

// retornar filmes de uma api terceira

const getAllGhlibiMovies = async (req, res) => {
  const response = await axios.get("https://ghibliapi.herokuapp.com/films");
  const data = await response.data;

  res.status(200).send(data);
};

// cadastrar novo filme
const createMoovie = (req, res) => {
  // acessar os dados enviados na requisição
  let requestedTitle = req.body.title;
  let requestedGenre = req.body.genre;

  if (requestedTitle && requestedGenre) {
    let newMovie = {
      id: Math.random().toString(32).substring(2, 6),
      addedAt: new Date(),
      title: requestedTitle,
      genre: requestedGenre,
    };

    movies.push(newMovie);

    // enviar uma resposta
    res.status(201).send({
      mensagem: "Filme adicionado com sucesso",
      newMovie,
    });
  } else {
    res.status(404).send({
      message:
        "Não foi possível cadastrar um novo filme. Por favor, insira todas as informações necessárias",
    });
  }
};

// deletar um filme
const deleteMoovieById = (req, res) => {
  const requestedId = req.params.id;
  const filteredMovie = movies.find((movie) => movie.id == requestedId);

  const index = movies.indexOf(filteredMovie);

  movies.splice(index, 1);

  res.status(200).json([
    {
      mensagem: "Filme deletado com sucesso",
      movies,
    },
  ]);
};

// atualizar o gênero do filme
const updateMoovieById = (req, res) => {
  // pegar os dados da requisição
  let requestedId = req.params.id;
  let newTitle = req.body.title;

  // achar o item da lista que tem o mesmo id
  let filteredMovie = movies.find((movie) => movie.id == requestedId);

  // o título do post filtrado seja igual ao título que vem da requisição
  filteredMovie.title = newTitle;

  res.status(200).send({
    mensagem: "Título atualizado com sucesso",
    filteredMovie,
  });
};

export default {
  home,
  getAll,
  getAllGhlibiMovies,
  createMoovie,
  deleteMoovieById,
  updateMoovieById,
};
