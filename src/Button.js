function MinutesToHours() {
    const [amount, setAmount] = React.useState();
    const [inverted, setInverted ] = React.useState(false);
    const onChange = (event) => {
        setAmount(event.target.value);
    };
    const reset = setAmount(0);
    const onFlip = () => {
        reset();
        setInverted((current) => !current)
    };
    
    return(
        <div>
            <div>
        <label htmlfor="minutes">Minutes</label>
        <input 
        value={inverted ? amount*60 : amount }
        placeholder="Minutes" 
        type="number"
        onChange={onChange}
        disabled={inverted}
        />
            </div>
        <div>
        <label htmlfor="hours">Hours</label>
        <input 
        value={inverted ? amount : amount/60}
        id="hours" 
        placeholder="Hours" 
        type="number"
        disabled={!inverted}
        onChange={onChange}
        />
        </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>{inverted ? "Turn back" : "Invert"}</button>
    </div>
    ); 
}
function KmToMiles() {
    // 총양
    const [amount, setAmount] = React.useState();
    // 변환기
    const [inverted, setInverted] = React.useState();
    // functions
    const onChange = (event) => {
        setAmount(event.target.value);
    };
   
    const reset = () => setAmount(0);
    
    const onFlip = () =>{
        reset();
        setInverted((current) => (!current))
    };

    return(
        <><div>
        {/* km */}
            <div>
                <label htmlfor="Km">Km</label>
                <input
                    value={inverted ? amount / 0.621371 : amount}
                    placeholder="km"
                    type="number"
                    onChange={onChange}
                    disabled={inverted} />
            </div>
        {/* miles */}
            <div>
                <label htmlfor="Miles">Miles</label>
                <input
                    value={inverted ? amount * 0.621371 : amount}
                    placeholder="Miles"
                    type="number"
                    onChange={onChange}
                    disabled={!inverted} />
            </div>
        </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>{inverted ? "Turn back" : "Invert"}</button></>
    );
}
// root div 가 됨
function App () {
    // 첫번째 item은 index가 되고 두번째 item은 (setIndex)그 데이터를 수정하는 함수
    const [index, setIndex] = React.useState("-1");
    const onSelect = (event) =>{
        setIndex(event.target.value);
    }
    return(
        <div>
        <h1>Super Converter</h1>  
        <select value={index} onChange={onSelect}>
            <option value="-1">Select your units</option>
            <option value="0">Minutes & Hours</option>
            <option value="1">Km & Miles</option>
        </select>
        {/* component안에 js식을 사용할때는 중괄호 */}
        {index === "-1" ? "Please Select your units" : null}
     { index === "0" ? <MinutesToHours/> : null}
    { index === "1" ? <KmToMiles/> : null}
    </div>
    );
}
const root = document.getElementById("root");
ReactDOM.render(<App/>,root);






