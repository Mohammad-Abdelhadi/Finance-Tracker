import "./App.css";
// bootstrap imports
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import Splash from "./Components/Splash/splash";

import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        {/* <Route path='Signup' element={<Signup/>} /> */}
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </div>
  );
}

export default App;
