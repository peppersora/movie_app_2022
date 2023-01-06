import propTypes, { string } from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id,
                coverImg,
                title,
                summary,
                genres,
}) {
    return(   
         <div>
           <img src={coverImg}
           alt={title}/>
           <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
           <ul>
             {genres.map((g) =>(
               <li key={g}>{g}</li>
             ))}
           </ul>
           </div>
           );    
     };

     Movie.prototype = {
        id : propTypes.number.isRequired,
        coverImg: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        summary: propTypes.string.isRequired,
        genres: propTypes.arrayOf(string.isRequired),
     };



export default Movie;