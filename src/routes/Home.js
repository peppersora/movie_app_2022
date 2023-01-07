import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
  
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
    const json = await(
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
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
      />
    ))}
    </div> 
      )}
      </div>
  )
}

export default Home;