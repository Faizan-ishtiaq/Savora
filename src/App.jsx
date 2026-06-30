import "./App.css"                                                                                                                                                   
import About from "./components/About"
import Chatbot from "./components/Chatbot"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Reservation from "./components/Reservation"
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Menu/>
       <Chatbot/>
      <Gallery/>
      <Reservation/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}

export default App