import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Splash from "./Components/Splash/splash";
import Onboarding from './Components/onboarding/onboarding'
import { Routes, Route } from "react-router-dom";
import Expense from "./Components/expense/expense";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        {/* <Route path='Signup' element={<Signup/>} /> */}
        <Route path="/expense" element={<Expense />} />
        <Route path="/Onboarding" element={<Onboarding/>}/>
      </Routes>
    </div>
  );
}

export default App;
