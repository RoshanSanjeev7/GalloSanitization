import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './styles/global.css';
import Home from './pages/Home/Home.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
