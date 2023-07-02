import Carregar from "../components/Carregar"
import Galeria from "../components/Galeria"
import Navbar from "../components/Navbar"


const Home = () => {

  return (
  <div className='max-w-4xl mx-auto'>
    <Navbar />
    <Carregar />
    <Galeria /> 
  </div>
  )
}

export default Home