import { Header, Contact, Footer } from "../../components"
import Hero from "./Hero/Hero"
import Numbers from "./Numbers/Numbers"
import Gallery from "./Gallery/Gallery"
import Inspiration from "./Inspiration/Inspiration"
import About from "./About/About"
import Advantages from "./Advantages/Advantages"

export default function Main() {
  return <>
    <Header />
    <Hero />
    <Numbers />
    <Gallery />
    <Inspiration />
    <About />
    <Advantages />
    <Contact />
    <Footer />
  </>
}