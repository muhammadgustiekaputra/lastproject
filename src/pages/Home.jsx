import Carrousel from "../components/Carrousel"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import Card from "../components/Card"
import 'bootstrap/dist/css/bootstrap.min.css'
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import login from "./components/login"

function Home() {
  return (
    <>
  
    <Nav />
    <Carrousel />
    <Card />
    <Footer />
    </>
  )
}

export default Home
