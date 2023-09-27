import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Graphs from './components/Graphs';

function App() {
  return (
    <div>
      <Header />      
      <BrowserRouter>
        <div className='container p-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/graphs" element={<Graphs />} />            
          </Routes>
        </div>

      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
