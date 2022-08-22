
import { BrowserRouter as Router, Routes, Route ,Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import News from "./pages/News";
import Teams from "./pages/Teams";

function App() {
  return (
    <div className="App">
     
      <Router>
           <div className="App">
           <Navbar title="React Application"></Navbar>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/blogs' element={< Blogs />}></Route>
                 <Route exact path='/about-us' element={< About />}></Route>
                 <Route exact path='/news' element={< News />}></Route>
                 <Route exact path='/contact-us' element={< ContactUs />}></Route>
                 <Route exact path='/teams' element={< Teams />}></Route>
          </Routes>
          <Footer></Footer>
          </div>
       </Router>
    </div>
  );
}

export default App;
