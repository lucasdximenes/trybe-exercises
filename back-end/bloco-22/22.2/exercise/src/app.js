const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviesJsonPath = path.resolve(__dirname, './movies.json');
const getMoviesData = async () => {
  try {
    const data = await fs.readFile(moviesJsonPath);
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Couldn't read the file");
  }
};

app.get('/movies/search', async (req, res) => {
  try {
    const movies = await getMoviesData();
    const { q } = req.query;
    const filteredMovies = movies.filter(({ movie }) =>
      movie.toLowerCase().includes(q.toLowerCase())
    );
    if (!filteredMovies.length) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }
    return res.status(200).json(filteredMovies);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno ao buscar filme' });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await getMoviesData();
    const requestedMovieId = Number(req.params.id);
    const requestedMovie = movies.find(({ id }) => id === requestedMovieId);
    if (!requestedMovie) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }
    return res.status(200).json(requestedMovie);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno ao buscar filme' });
  }
});

app.get('/movies', async (_, res) => {
  try {
    const movies = await getMoviesData();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno ao buscar filmes' });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const movies = await getMoviesData();
    const newMovie = req.body;
    if (!newMovie.movie || !newMovie.price) {
      return res.status(400).json({ message: 'Dados inválidos' });
    }
    movies.push({ id: movies.length + 1, ...newMovie });
    await fs.writeFile(moviesJsonPath, JSON.stringify(movies));
    return res.status(201).json(newMovie);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno ao adicionar filme' });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const movies = await getMoviesData();
    const requestedMovieId = Number(req.params.id);
    const requestedMovie = movies.findIndex(
      ({ id }) => id === requestedMovieId
    );
    const updatedMovie = req.body;
    if (!updatedMovie.movie || !updatedMovie.price) {
      return res.status(400).json({ message: 'Dados inválidos' });
    }
    if (requestedMovie === -1) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }
    movies[requestedMovie] = { id: requestedMovieId, ...updatedMovie };
    await fs.writeFile(moviesJsonPath, JSON.stringify(movies));
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno ao atualizar filme' });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const movies = await getMoviesData();
    const requestedMovieId = Number(req.params.id);
    const requestedMovie = movies.findIndex(
      ({ id }) => id === requestedMovieId
    );
    if (requestedMovie === -1) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }
    movies.splice(requestedMovie, 1);
    const updatedMovies = movies.map((movie, index) => ({
      ...movie,
      id: index + 1,
    }));
    await fs.writeFile(moviesJsonPath, JSON.stringify(updatedMovies));
    return res.status(200).json({ message: 'Filme excluído com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno ao excluir filme' });
  }
});

module.exports = app;
