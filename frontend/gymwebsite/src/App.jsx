import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router } from "React-router-dom"
import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import WorkoutSession from "./component/WorkoutSessions"
import Gallery from "./component/Gallery"
import Pricing from "./component/Pricing"
import Contact from "./component/Contact"
import BMICalculator from "./component/BMIcalculator"
import Footer from "./component/Footer"
function App() {
  return (
    <Router>
     <Navbar/>
     <Hero/>
     <WorkoutSession/>
     <Gallery/>
     <Pricing/>
     <Contact/>
     <BMICalculator/>
     <Footer/>
     <ToastContainer theme='dark' position='top-center'/>
    </Router>
  )
}
export default App
