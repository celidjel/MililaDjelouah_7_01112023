import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Logement from './pages/logement/Logement'
import Error from './pages/error/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
