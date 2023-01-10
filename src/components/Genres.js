import React from "react";
import { useEffect, useState } from "react";
import Movie from "./Movie";

function Genre() {

    const [romance, setRomance] = useState([]);

let getRomance  = async() => {
    const json = await(
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=romance`
        )
    ).json();
        // console.log(json);
        setRomance(json.data.movies);
    
  };

  useEffect(() => {
      
    getRomance();
  },[]);
  // console.log(movies);
  return(
    
        <div>
          {romance.map((movie) =>(
  
              <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            rating={movie.rating}
            />
         ))}
      </div>
    
   
);
// return 문끝
}
export default Genre;