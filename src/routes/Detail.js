import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();
    console.log(id);
    const [movies, setMovies] = useState([]);
    console.log(movies);
    const getMovie = async() =>{
        const json = await (
        await 
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    };
    useEffect(() =>{
        getMovie();
       
    },[]);
    return (
        <div>
          
           
           </div>
           );    
    
 
}

export default Detail;