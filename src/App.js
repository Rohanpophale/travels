import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Destination from './Components/Destination';
import Payment from './Components/Payment';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/destination" element={<Destination />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/payment" element={<Payment />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
