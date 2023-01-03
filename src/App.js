import { useEffect, useState } from "react";

function App(){
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev+1);
  const onchange = (event) => {
    setKeyword(event.target.value);
  }
  console.log("I run all the time");
  
  useEffect(() =>{
    console.log("CALL THE API...");
  },[]);
  useEffect(() => {
    if(keyword !== "" && keyword.length >5) {
      console.log("SEARCH FOR", keyword)
    }
  },[keyword]);

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