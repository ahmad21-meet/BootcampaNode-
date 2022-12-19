import uniqId from "uniqid";
import { writeFileSync, readFileSync } from "fs";

const addNewMovie = (movie) => {
  const movies = loadMovies();
  const newMovie = {
    id: uniqId(),
    ...movie,
  };
  movies.push(newMovie);
  saveMovies(movies);
  return newMovie;
};

const findMovie = (id) => {
  const movies = loadMovies();
  const findMovie = movies.find((m) => m.id === id);
  if (!findMovie) {
    throw new Error("The movie does not exist!");
  }
  return findMovie;
};

const updateMovie = (id, movie) => {
  const movies = loadMovies();
  const foundMovie = movies.find((m) => {
    return m.id === id;
  });

  console.log(foundMovie);

  if (!foundMovie) {
    throw new Error("The movie does not exist, cannot update!");
  }

  const updatedMovie = {
    ...foundMovie,
    ...movie,
    id: foundMovie.id,
    updatedAt: new Date().toISOString(),
  };

  const index = movies.findIndex((m) => m.id === id);
  movies[index] = updatedMovie;
  saveMovies(movies);
  return updatedMovie;
};
const deleteMovie = (id) => {
  const movies = loadMovies();
  const index = movies.findIndex((m) => m.id === id);
  if (index !== -1) {
    movies.splice(index, 1);
    saveMovies(movies);
    return movies;
  } else {
    throw new Error("The movie does not exist, cannot delete!");
  }
};

const saveMovies = (movies) => {
  const dataJSON = JSON.stringify(movies);
  writeFileSync("./db/movies.json", dataJSON);
};

const loadMovies = () => {
  try {
    const dataBuffer = readFileSync("./db/movies.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

export { loadMovies, addNewMovie, findMovie, updateMovie, deleteMovie };
