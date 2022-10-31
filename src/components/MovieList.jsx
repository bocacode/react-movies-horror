import movies from '../movies'
import MovieComponent from './MovieComponent';

function MovieList() {
  return (
    <section id="movie-list-container">
      {movies.map(movieInfo => (
       <MovieComponent movieProp={movieInfo} />
      ))}
    </section>
  )
}

export default MovieList;
