// component = function
// component는 jsx를 return하는 함수

function Btn(text,fontSize){
   
    return (
    <button 
    style={{
        // button에 style속성부여
        backgroundColor:"orange",
        color: "black",
        padding: "10px 20px",
        border: 0 ,
        borderRadius:10,
        fontSize,
    }}
    >

    </button>
);
}

// root div 가 됨
function App () {
   
    return(
        <div>
       <Btn text="Save Changes" fontSize={18}></Btn>
       <Btn text="Save Changes" fontSize={18}></Btn>
    </div>
    );
}
const root = document.getElementById("root");
ReactDOM.render(<App/>,root);




