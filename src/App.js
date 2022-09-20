import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/" element={<Destination />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/" element={<Payment />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
