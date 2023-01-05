import { useEffect, useState } from "react";


function App(){
  // 로딩을 위한 state 
  // loading의 기본값은 true로 설정
  const [loading, setLoading] = useState(true);
  // 코인리스트를 위한 state
  const [coins, setCoins] = useState([]);
  // 2. 코인 api 준비
  // useEffect를 사용해서 한번만 실행시킬것이므로 빈 배열을 준비
  // 3. money 준비
  const [money,setMoney] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false); 
    });
  },[]);
  
  const onchange = (event) =>{
    setMoney(event.target.value);
    
  };
  return(
   <div>
    <h1>The Coins!({coins.length})</h1>
    <input
    onChange={onchange}
    value={money}
    type="number"
    placeholder="How much you have?"
    />
   
    {loading ? <strong>Loading...</strong> :
    <select>
      {coins.map((coin) =>
      <option>{coin.name}({coin.symbol}) : 
      {money / coin.quotes.USD.price} {coin.symbol}
      </option>
      )}
      
      </select>}
   </div>
  );
}
export default App;