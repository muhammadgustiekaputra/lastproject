// import Alert from './components/alert';
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
import Intro from "./components/Intro";
import Register from "./components/Register";
import React from "react";
import ReactDOM from "react-dom";
import Popup from "reactjs-popup";

import "./index.css";

function App() {
  return (
    <>

<Router>
    <Routes>
         <Route exact path="/" Component={Home}/>
         <Route path="/Login" Component={LoginPage}/>
         <Route path="/test" Component={Test}/>
         <Route path="/Intro" Component={Intro}/>
         <Route path="/register" Component={Register}/>
         <Route path="/src/components/ModalCard.jsx" Component={Register}/>
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
