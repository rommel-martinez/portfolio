import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import './App.css';

function App() {
  return (
    <>      
      <BrowserRouter>      
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/About' exact element={<About />}></Route>
            <Route path='/Portfolio' exact element={<Portfolio />}></Route>       
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
