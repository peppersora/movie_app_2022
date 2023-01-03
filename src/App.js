import { useEffect, useState } from "react";

//무엇을 숨기고 보여줄 것인가?
function Hello(){
  useEffect(() => {
    console.log("created :)");
    // 우리가 할것은 component가 destory될때 실행될 
    // function만들기 => clean up function
    // 아래 코드한줄을 이용해 언제 만들어졌고 언제 destroy됐는지 알수있다
    return () => console.log("destroyed :(")
  },[]);

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