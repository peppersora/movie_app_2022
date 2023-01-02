// component = function
// component는 jsx를 return하는 함수
function Btn({potato}){
    console.log(props);
    return <button style={{
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
    
    return(
        <div>
            <Btn potato="Save changes"/>
            <Btn potato="Continue"/>
    </div>
    );
}
const root = document.getElementById("root");
ReactDOM.render(<App/>,root);






