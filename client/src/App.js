import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import WordDetails from './pages/WordDetails';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:word' element={<WordDetails />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
