import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
