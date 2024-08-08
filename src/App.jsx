
import './App.css'
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Slidebar/Sidebar';
import About from './pages/About/About';
import { Routes, Route } from "react-router-dom";
import Error from './pages/Error/Error';


function App() {


  return (
    <>
      <div className="pageContainer">
        <Navbar />
        <div className="mainContainer">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
