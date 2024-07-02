import './App.css'
import Routes from './Routes'
import Nav from './modules/Nav/Nav.jsx'
import Footer from './modules/Footer/Footer.jsx'
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
