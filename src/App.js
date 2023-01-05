import { useEffect, useState } from "react";


function App(){
  // 로딩을 위한 state 
  // loading의 기본값은 true로 설정
  const [loading, setLoading] = useState(true);
  // 코인리스트를 위한 state
  const [coins, setCoins] = useState([]);
  // 2. 코인 api 준비
  // useEffect를 사용해서 한번만 실행시킬것이므로 빈 배열을 준비
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false); 
    });
  },[]);
  
  return(
   <div>
    <h1>The Coins!({coins.length})</h1>
    {loading ? <strong>Loading...</strong> : null}
    <ul>
      {/* map(value,index)을 이용할건데 id가 있기때문에 index는 사용하지 
      않을 것임
       */}
      {coins.map((coin) =>
       <li>
        {coin.name} ({coin.symbol})
      : ${coin.quotes.USD.price} USD 
      </li>
      )}
    </ul>
   </div>
  );
}
export default App;