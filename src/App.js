import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./css/App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/movie/:id"><Detail/></Route>
          <Route path="/"><Home/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
