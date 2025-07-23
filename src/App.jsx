import About from "./Components/About"
import Contact from "./Components/Contact"
import Dishes from "./Components/Dishes"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Hero from "./Components/Hero"


const App = () => {
  return (
   <div className=" overflow-x-hidden">
  <Header />
  <Hero />
  <Dishes/>
  <About />
  <Contact />
  <Footer />
</div>
  )
}

export default App