import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import HeadTail from './pages/HeadTail';
import Header from './components/Header'
function App() {
  return (
    <Router>
      <div>
         <Header></Header>
        <Routes>
           <Route path="/about" element={ <About />}>
       
          </Route>
          <Route path="/head-tail" element={  <HeadTail />}>
           
          </Route>
          <Route path="/" element={ <Home />}>
           
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
