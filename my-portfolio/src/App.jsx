
import FirstItem from './Components/First-item'
import { Navbar } from './Components/Navbar'
import { About } from './Components/About'
import { Projects } from './Components/Projects'
import { Skills } from './Components/Skills'
import { Contact } from './Components/Contact'
import Footer from './Components/Footer'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
    useEffect(()=>{
      AOS.init({duration:700,once:true})
    },[]);

  return (
    <>
      
      <Navbar/>
      <FirstItem/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
