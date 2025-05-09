import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Formations from './pages/Formations';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import About from './pages/About';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/ressources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element= {<About/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;