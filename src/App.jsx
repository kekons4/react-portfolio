import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './navbar/navbar';
import Spacer from './spaceElm/spacer';
import About from './about/about';
import Skills from './skills/skills';
import Experience from './experience/experience';
import Projects from './projects/projects';
import Contact from './contact/contact';
import Footer from './footer/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Spacer/>
      <About props={"about"} />
      <Skills props={"skills"} />
      <Experience props={"experience"} />
      <Projects props={"projects"} />
      <Contact props={"contact"} />
      <Footer props={"footer"} />
    </div>
  )
}

export default App
