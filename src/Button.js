
function App () {
    const [amount, setAmount] = React.useState();
    const [flipped, setFlipped ] = React.useState(false);
    const onChange = (event) => {
        setAmount(event.target.value);
    };
    const reset = setAmount(0);
    const onFlip = () => {
        reset();
        setFlipped((current) => !current)
    };

    return(
        <div>
            <div>
        <h1 className="hi">Super Converter</h1>
        <label htmlfor="minutes">Minutes</label>
        <input 
        value={flipped ? amount*60 : amount }
        placeholder="Minutes" 
        type="number"
        onChange={onChange}
        disabled={flipped}
        />
            </div>
        <div>
        <label htmlfor="hours">Hours</label>
        <input 
        value={flipped ? amount : amount/60}
        id="hours" 
        placeholder="Hours" 
        type="number"
        disabled={!flipped}
        onChange={onChange}
        />
        </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>Flip</button>
    </div>
    );
}
const root = document.getElementById("root");
ReactDOM.render(<App/>,root);






