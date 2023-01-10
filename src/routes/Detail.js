import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


// 세부사항

function Detail(){
  const { id } = useParams();
  // console.log(id);

  let [detail, setDetail] = useState([0]);
  console.log(detail);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    console.log(setDetail);
  };
  
  useEffect(() => {
    getMovie();
  },[]);

  return(   
    <div>
     <img src={detail.medium_cover_image}
           alt={detail.title}/>
      <h1>{detail.title_long}</h1>
      <h3>{detail.rating}</h3> 
      <p>{detail.genres}</p>
      <p>{detail.description_intro}</p>
    </div>
  );   
    
}

export default Detail;