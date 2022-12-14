import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Destinations from './Components/Destinations';
import Payment from './Components/Payment';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Logout from './Components/Logout';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
        <Routes>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/destinations" element={<Destinations />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/payment" element={<Payment />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
