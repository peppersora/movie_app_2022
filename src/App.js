// 이 페이지가 url 그 자체이다. 
// url 다음에 home인지 detail인지에 따라 다르게 보여줄것임
// react-router-dom은 아주 쿨한 컴포넌트의 모음집
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Detail from "./routes/Detail";
import Home from "./routes/Home";


function App(){
  return <Router>
    {/* switch의 역할은 route를 찾는다
      다시말해, 한번에 하나의 route만 렌더링하기위해서
    */}
    <Switch>
    {/* id를 사용하면 movie/1,movie/2,movie/3다 가능...! */}
    <Route path="/movie/:id" component={Detail}>
      <Detail/>
    </Route>

    <Route path="/">
      <Home/>
    </Route>
    </Switch>
  </Router>;
}
export default App;