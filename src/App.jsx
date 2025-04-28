import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Nav from './components/NavBar/Nav'
// import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
// import Formulario from './components/Formulario/Formulario'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <>
      <Nav/>
      {/* <Home/>  */}
      {/* <Formulario/> */}
      <Cart/>
      <Footer/>
    </>
  )
}

export default App
