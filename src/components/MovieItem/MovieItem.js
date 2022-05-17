import React from 'react';
import './MovieItem.css';

const MovieItem =(props)=> {

        return (
            <>         
               <article className="movie-item">
                   <div className='box'>
                       <img title={props.movie.Title} className="movie-item__poster" src={props.movie.Poster} alt={props.movie.Title}/>
                       </div>
                
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{props.movie.Title}&nbsp;({props.movie.Year})</h3>
                    <button type="button" className="movie-item__add-button">Add list</button>
                </div>
            </article>
            </>
        );
    }

 
export default MovieItem;


