import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id,
                coverImg,
                title,
                summary,
                genres,
                rating,
}) {
    return(   
      <div>
         <img src={coverImg}
           alt={title}/>
           <h2>
            <Link
           to={`/movie/${id}`}>{title}{rating}
           </Link>
           </h2>
            <p>{summary}</p>
           <ul>
             {genres.map((g) =>(
               <li key={g}>{g}</li>
             ))}
           </ul>
      </div>
    );   
     };

     Movie.propTypes  = {
        id: propTypes.number.isRequired,
        coverImg: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        summary: propTypes.string.isRequired,
        genres: propTypes.arrayOf(propTypes.string.isRequired),
        rating: propTypes.number.isRequired,
     };

export default Movie;