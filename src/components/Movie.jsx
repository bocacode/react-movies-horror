function Movie() {
return (
    <div className='movie-card' key={movie.id}>
    <img className='movie-poster'
      src={movie.posterURL}
      alt={movie.title} />
    <h3 className='movie-title'>
      {movie.title}
    </h3>
  </div>

)



}





export default Movie