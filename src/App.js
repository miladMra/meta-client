import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import FromCity from './component/fromCity/FromCity';
import Weather from './component/weather/Weather';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<FromCity />} />
          <Route path='/weather'  element={<Weather />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
