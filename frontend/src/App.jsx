import './App.css'
import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import MyWorks from "./Pages/MyWorks";
import ProjectDetails from "./Pages/ProjectDetails";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className='app m-0 p-0 box-border bg-zinc-300 font-main text-lime-950'>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/my-works' element={<MyWorks/>} />
        <Route path='/projects/:id' element={<ProjectDetails/>} />
      </Routes>
      <Footer/> 
    </div>
  )
}

export default App
