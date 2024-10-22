import './App.css'
import Routes from './Routes'
import Nav from './modules/Nav/Nav.jsx'
import Footer from './modules/Footer/Footer.jsx'
import { BrowserRouter} from "react-router-dom";
import WhatsApp from './modules/WhatsApp/Whatsapp.jsx';


function App() {


  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes/>
      <WhatsApp/>
      <Footer />
    </BrowserRouter>

    </>
  )
}

export default App
