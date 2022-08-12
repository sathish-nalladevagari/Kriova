import Home from './components/home'
import Register from './components/register';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/nav';
import Login from './components/login';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      
      
    </div>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/register' exact element={<Register /> } />
      <Route path='/login' exact element={<Login /> } />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
