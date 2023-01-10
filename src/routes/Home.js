// MAIN

import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { Link } from "react-router-dom";
function Home(){
// console.log(props);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
console.log(movies);
  const getMovies = async() => {
    const json = await(
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?`
        )
    ).json();
        // console.log(json);
        setMovies(json.data.movies);
        setLoading(false);
  };

  useEffect(() => {
  
    getMovies();
  },[]);
  // console.log(movies);
  return(
   <div>
     {loading ? (
        <h1>Loading...</h1>
      ) : ( 
    <div>
      <nav>
          <h3>
            <Link to={`/page/minimum_rating`}>
            High Rating
            </Link>
            </h3>
          <h3>
            <Link to={`/page/genre=romance`}>
            Romance
            </Link>
            </h3>
          <h3>
            <Link to={`/page/genre=Action`}>
              Action              
            </Link>
          </h3>
      </nav>
      
      {movies.map((movie) =>(
        // prop부분은 마음대로 이름을 지어도 되지만
        // 중괄호안에는 movie api에서 받아온 그대로 넣어야함
        /* 그리고 항상 key값으로 id를 받아와야한다
        key는 react.js에서만, map안에서 component들을 render할때 사용
          */
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
      )}
      </div>
  )
}

export default Home;