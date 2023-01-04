import { useEffect, useState } from "react";


function App(){
  const [todo, setToDo] = useState("");
  // 여러개의 todo를 만들것임
  const [todos, setToDos] = useState([]);
  const onchange = (event) => setToDo(event.target.value);
  // console.log(todo); 
  const onsubmit = (event) => {
    event.preventDefault()
    /* todos의 array를 수정하고 싶다면 수정하는 함수 즉, setToDos를
    수정해야한다. todos자체를 수정해서는 안됨*/
    if(todo === ""){
      return;
    }
    setToDos((currentArray) => [todo, ...currentArray]);
    setToDo("");
  };
    
    return(
    <div>
      <h1>My To Dos({todos.length})</h1>
      <form onSubmit={onsubmit}>
      <input 
      value={todo}
      onChange={onchange}
      type="text" placeholder="Write your to do..."/>
      <button>Add To Do</button>
    </form>
    <hr/>
    <ul>
    {todos.map((item,index) => 
    <li key={index}>{item}</li>
    )}
    </ul>
    </div>
  );
}
export default App;