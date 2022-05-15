import './App.css';
import { BrowserRouter, BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Home from './PortfolioContainer/Home/Index'
import About from './PortfolioContainer/AboutMe/Index'
import Resume from './PortfolioContainer/Resume/Index'
import Porfolio from './PortfolioContainer/Portfolio/Index'
import Footer from './PortfolioContainer/Footer/Index'
function App() {
  return (
    // <BrowserRouter>   
    // <div className="App">   
    // <Routes>
    //   <Route path='/' element={<Home/>} />          
    // </Routes>    
    // <Routes>
    // <Route path='/about' element={<About/>}/>
      
    // </Routes>
    // <Routes>
    // <Route path='/resume' element={<Resume/>} />  
    // </Routes>
            
    // </div>
    // </BrowserRouter>
    <div className="App">
      <Home/>
      <About/>
      <Resume/>
      <Porfolio/>
      <Footer />
    </div>
  );
}

export default App;
