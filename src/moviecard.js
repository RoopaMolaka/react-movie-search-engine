import React from 'react'

function MovieCard(props) {
    return(<div className='movie-card'>
    <img className='movie-thumbnail'
    src={`https:/image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster}`}
    />
    <p><b>Title:</b>${props.title}</p>
    <p><b>Rating:</b>${props.rating}/10</p>
    <p><b>Release Date:</b>${props.releaseDate}</p>
    {/* <button id='wishlist-button'>Add to wishlist</button> */}
     </div> )

}

export default MovieCard