import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    // Sample movies
    { title: 'Inception', description: 'A mind-bending thriller', posterURL: '...', rating: 5 },
    { title: 'The Shawshank Redemption', description: 'Drama at its best', posterURL: '...', rating: 4 },
    // Add more movies as needed
  ]);

  // Remove the unused addMovie function
  // const addMovie = (newMovie) => {
  //   setMovies([...movies, newMovie]);
  // };

  const filterMovies = ({ title, rating }) => {
    // Filter movies based on title and/or rating
    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating.toString().includes(rating.toString())
    );
    setMovies(filteredMovies);
  };

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter onFilter={filterMovies} />
      <MovieList movies={movies} />
      {/* You can add a component for adding a new movie */}
    </div>
  );
};

export default App;
