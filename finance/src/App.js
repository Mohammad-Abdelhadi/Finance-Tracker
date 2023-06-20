import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Splash from "./Components/Splash/splash";
import Home from "./Components/Home/Home";
import Onboarding from "./Components/onboarding/onboarding";
import Signin from "./Components/sign_in/signin";
import Signup from "./Components/sign_up/signup";
import Statistic from "./Components/Statistic/Statistic";
import Wallet from "./Components/Wallet/Wallet";
import Expense from "./Components/expense/expense";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const location = useLocation();

  // Check if the current route is the Splash page
  const isSplashPage = location.pathname === "/";

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/HomePage" element={<Home />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/Wallet" element={<Wallet />} />
      </Routes>

      {/* Render the Navbar only if it's not the Splash page */}
      {!isSplashPage && <Navbar />}
    </div>
  );
}

export default App;