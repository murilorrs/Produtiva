import './App.css'
import Routes from './Routes'
import Nav from './modules/Nav.jsx'
import Footer from './modules/Footer.jsx'
import { BrowserRouter} from "react-router-dom";


function App() {


  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes/>
      <Footer />
    </BrowserRouter>

    </>
  )
}

export default App
