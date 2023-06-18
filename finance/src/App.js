import './App.css';
// bootstrap imports
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import Splash from './Components/Splash/splash';

import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <p> App page </p>
      <Routes>
        <Route path="/" element={<Splash />}/>
        {/* <Route path='Signup' element={<Signup/>} /> */}
     
      </Routes>
    </div>
  );
}

export default App;
