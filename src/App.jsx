// import Alert from './components/alert';
// import Carrousel from "./components/Carrousel"
// import Footer from "./components/Footer"
// import Nav from "./components/Nav"
// import Card from "./components/Card"
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import login from "./components/Login"
import Home from './pages/Home';
import Test from './pages/test'
import LoginPage from './pages/LoginPage';
import "./index.css";


function App() {
  return (
    <>

<Router>
    <Routes>
         <Route exact path="/" Component={Home}/>
         <Route path="/Login" Component={LoginPage}/>
         <Route path="/test" Component={Test}/>
       </Routes>
    </Router>  
    {/* <Nav />
    <Carrousel />
    <Card />
    <Footer /> */}
    </>
  )
}

export default App
