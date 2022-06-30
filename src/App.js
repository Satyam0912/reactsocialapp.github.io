import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './Components/NavbarComponent';
import Posts from './Components/Photos/Posts';
import About from './Components/About/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent className="navbar" />
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;