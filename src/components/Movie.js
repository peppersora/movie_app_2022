import propTypes, { string } from "prop-types";
function Movie({coverImg,
                title,
                summary,
                genres,
}) {
    return(   
         <div>
           <img src={coverImg}
           alt={title}/>
           <h2>{title}</h2>
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
        coverImg: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        summary: propTypes.string.isRequired,
        genres: propTypes.arrayOf(string.isRequired),
     };



export default Movie;