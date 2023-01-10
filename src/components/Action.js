import React from "react";
import { useEffect, useState } from "react";
import Movie from "./Movie";

function Action() {
    const [action, setAction] = useState([]);

const getAction = async() => {
    const json = await(
    await fetch(
       
            'https://yts.mx/api/v2/list_movies.json?genre=action'
        )
    ).json();
    
    setAction(json.data.movies);
}

  useEffect(() => {
      
    getAction();
  },[]);
  // console.log(movies);
  return(
   
      
      <div>
        {action.map((movie) =>(

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


}
export default Action;