import { useEffect, useState } from "react";

function App(){
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev+1);
  const onchange = (event) => {
    setKeyword(event.target.value);
  }
  useEffect(() => {
    console.log("I run only once");

  },[]);
  
  useEffect(() =>{
    console.log("I run when 'keyword' changes.")
  },[keyword]);

  useEffect(() => {
   console.log("I run when 'Counter' changes.");
  },[counter]);

  useEffect(() => {
    console.log("I run when keyword & counter changes.");
   },[keyword,counter]);
 

   return(
    <div>
      <input 
      value={keyword}
      onchange={onchange} 
      type="text" 
      placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
export default App;