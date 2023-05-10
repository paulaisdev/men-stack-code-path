import MovieSchema from "../models/movieSchema.js";
import axios from "axios";

const home = (req, res) => {
  res.status(200).send({
    message: "Olá pessoa, seja bem vinda ao Teraflix!",
  });
};

const getAll = (req, res) => {
  MovieSchema.find(function (err, movies) {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(200).send(movies);
  });
};

const createMovie = async (req, res) => {
  try {
    const newMovie = new MovieSchema(req.body);

    const savedMovie = await newMovie.save();

    res.status(200).json({
      message: "Filme adicionado com sucesso!",
      savedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

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
  home,
  getAll,
  createMovie,
  deleteMovieById,
  updateMovieById,
};
