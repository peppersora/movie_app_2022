// component = function
// component는 jsx를 return하는 함수
function Btn({potato, changeValue}){
   
    return <button 
    onclick={changeValue}
    style={{
        // button에 style속성부여
        backgroundColor:"orange",
        color: "black",
        padding: "10px 20px",
        border: 0 ,
        borderRadius:10,

    }}
    >{potato}</button>;
}

// root div 가 됨
function App () {
    // onclick 이벤트를 이용할것이라 state사용
    // rerender 할때 continue btn을 우리가 통제할수있다.
    const MemorizedBtn = React.memo(Btn);
    const [value, setValue] = React.useState("Save changes");
    const changeValue = () => setValue("Revert Changes")
    return(
        <div>
            {/* 여기서 onclick은 실제 이벤트리스너가 아니고
            Btn함수에 쓰이는 props이다.
         */}
            <MemorizedBtn text={value} changeValue={changeValue}/>
            
            <MemorizedBtn text="Continue" />
    </div>
    );
}
const root = document.getElementById("root");
ReactDOM.render(<App/>,root);






