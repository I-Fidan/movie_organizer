import React, {  useEffect, useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import SearchBox from '../SearchBox/SearchBox';
import './Movies.css';

const Movies =(props)=>{
    const [movies,setMovies]=useState([])
    const getmovieRequest=async()=>{
        const url=`http://www.omdbapi.com/?s=one&apikey=a3ae0397`
        const response=await fetch(url)
        const responseJson=await response.json()
        console.log(responseJson)
        setMovies(responseJson.Search)
    }
    useEffect(()=>{
        getmovieRequest()
    })
    console.log(movies)
    return ( 
        <ul className="movies">
            {movies.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem movie={movie} />
                </li>
            ))}
        </ul>
    );
    }
export default Movies;


