import React from "react";
import { movies } from "../data";

function Movies() {

  // <ul>{movie.genre.map(item => (
  //   <li>{item.genre}</li>
  // ))}</ul>
  const genres =   movies.map(movie => (
    <div key={movie.title}>Movie Title: {movie.title} | Movie Time: {movie.time} 
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
  
    </div>
   
  ))

  return (
    <div>
      <h1>Movies Page</h1>
    {genres}
    </div>
  )
}

export default Movies;
