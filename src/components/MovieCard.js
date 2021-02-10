import React from 'react';
import './MovieCard.css'

const MovieCard = (props) => {
    return (
        <div className="movie-card">
            <div className="bg-img" style={{backgroundImage: `url(${props.thumbnail})`
            }}>
                <a href="#" className="movie-title">{props.title}</a>
                <p className="date">Дата выхода: {props.date}</p>
            </div>
        </div>
    );
};



export default MovieCard;