import "./App.css";
// bootstrap imports
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import Splash from "./Components/Splash/splash";

import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Onboarding from "./Components/onboarding/onboarding";
import Signin from "./Components/sign_in/signin";
import Signup from "./Components/sign_up/signup";
import Statistic from "./Components/Statistic/Statistic";
import Wallet from "./Components/Wallet/Wallet";
import Expense from "./Components/expense/expense";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/HomePage" element={<Home />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/statistic" element={<Statistic/>} />
        <Route path="/Wallet" element={<Wallet />} />
        {/* <Route path='Signup' element={<Signup/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
