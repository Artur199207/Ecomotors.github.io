import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Leoute from "./UseLeoute/Leoute"
import Car from './EcoCar/Car';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Car />} />
          <Route path="cars" element={<Leoute />} />
          <Route path="cars/:slug" element={<Leoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
