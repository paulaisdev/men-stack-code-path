import MovieSchema from "../models/movieSchema";
import axios from "axios";

// criar funções que controlam as informações, recebendo as requisições e enviando as respostas

// retornar todos os filmes
const getAll = (req, res) => {
  MovieSchema.find(function (err, movies) {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(200).send(movies);
  });
};

// retornar filmes de uma api terceira
const getAllGhlibiMovies = async (req, res) => {
  const response = await axios.get("https://ghibliapi.herokuapp.com/films");
  const data = await response.data;

  res.status(200).send(data);
};

// cadastrar novo filme
const createMovie = async (req, res) => {
  try {
    const newMovie = new MovieSchema(req.body);

    const savedMovie = await newMovie.save();

    res.status(200).json({
      message: "Filme adicionado com sucesso!",
      savedMovie,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// atualizar o gênero do filme
const updateMovieById = async (req, res) => {
  try {
    const movie = await MovieSchema.findByIdAndUpdate(req.params.id);

    if (!movie) {
      res.status(404).send({
        status: 404,
        message: "Não foi possível encontrar o filme",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Filme atualizado com sucesso!",
      movie,
    });
  } catch (error) {
    console.error(error);
  }
};

// deletar um filme
const deleteMovieById = (req, res) => {
  const filteredMovie = movies.findByIdAndDelete(req.params.id);

  if (filteredMovie) {
    res.status(500).send({
      status: 500,
      message: "Não foi possível deletar o filme",
    });
  }

  res.status(200).json([
    {
      status: 200,
      message: "Filme deletado com sucesso",
      movies,
    },
  ]);
};

export default {
  getAll,
  getAllGhlibiMovies,
  createMovie,
  deleteMovieById,
  updateMovieById,
};
