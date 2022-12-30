const root = document.getElementById("root");

function App () {
    const [counter, setCounter] = React.useState(0);
    // 왜 modifier가 필요한지
    const onclick = () => {
        setCounter(495060);

    }

    return(
        <div>
        <h3>Total clicks:{counter}</h3>
        <button onclick={onclick}>Click me</button>
        {/* onclick이벤트 리스너가 counterUp 이라는 함수를 이용해서 
        click 시 count 증가 */}
    </div>
    );
}
ReactDOM.render(<App/>,root);
// container를 rerendering 해줘야지 count가 증가하는데 지금 상황에서는
// 그렇지 못함







