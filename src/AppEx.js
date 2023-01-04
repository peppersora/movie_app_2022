//todolist만들기

import { useState } from "react";

// input, 저장과 관련된 enter btn => form
function AppEx() {
    // data의 변화를 저장하는 state를 만들어야함
    const [todo, setToDo] = useState("");
    // btn을 클릭하면 그 값이 저장이되고 input은 빈칸이되야함
    // array로 저장
    const [todos, setToDos] = useState([]);
    const onchange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        // form의 기본 제출기능을 막아야함
        event.preventDefault();
        // 저장된 데이터들을 array로 표현해야함
        /*처음에 만든 객체인 todo가 event.target.value라는
        것을 알았다. */
        // 그래서 todo의 값이 공백이 된다면?
        if(todo === ""){
            return;
        }else{
            setToDos((currentArray) => [todo,...currentArray]);
            setToDo("");
        }
    }

    return(
        // html과 관련된 jsx에 관한 내용
        <div>
            <h1>Today My ToDoList({todos.length})</h1>
            <form onSubmit={onSubmit}>
            <input
            onchange={onchange}
            value={todo}
            type="text"
            placeholder="Please Write you Todo"/>          
        <button>Add your list</button>
        </form >
        {/* 리스트 저장된것을 꺼내서 보여주기 */}
        <ul>
           {todos.map((item,index)=><li key={index}>{item}</li>)}
        </ul>
        </div>
    );

}