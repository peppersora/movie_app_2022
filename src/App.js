import { useEffect, useState } from "react";

//무엇을 숨기고 보여줄 것인가?
function Hello(){

  function byFn(){
    console.log("bye :(");
  }

  function hiFn(){
    console.log("created :)");
    return byFn;
  }

  useEffect( hiFn,[]);
   
  return(
    <h1>Hello</h1>
  );
}

function App(){
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
   return(
    <div>
      {/* js사용시 중괄호 꼭 기억하기 
      위에서 만든 hello function을 app에서 실행시킬것임*/}
      {showing ? <Hello/> : null }
     <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
export default App;