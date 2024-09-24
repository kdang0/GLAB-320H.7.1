import React from 'react'


interface MovieDisplay{
    movie: movie | null;
}

type movie = {
    Title: string,
    Genre: string,
    Poster: string,
    Year: string
}
export default function MovieDisplay({movie} : MovieDisplay) {
  return (
    <>
        {
            movie ?
            <div>
            <h1>{movie.Title}</h1>
            <h2>{movie.Genre}</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Year}</h2>
            </div> : 
            <h1>No Movie to Display</h1>
        }
    
    
    </>
  )
}
