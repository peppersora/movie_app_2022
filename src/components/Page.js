// rating에대해
import React from "react";
import { useEffect, useState } from "react";
import Movie from "./Movie";

function Page() {  
  
    const [movies, setMovies] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    console.log(currentPage,postsPerPage);
    
    const getRating = async() => {
        const json = await(
          await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8`
            )
        ).json();
            // console.log(json);
            setMovies(json.data.movies);
        
      };
    
      useEffect(() => {
      
        getRating();
      },[]);
      // console.log(movies);

    return(
        <div>
          
            {movies.map((movie) =>(

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



export default Page;