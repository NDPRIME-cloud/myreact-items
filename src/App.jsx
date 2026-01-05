

import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import ColorBox from './components/ColorBox'
import Footer from './components/Footer'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import RandomNumber from './components/RandomNumber'
import Form from './components/form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Button from './components/Button'
import NotFound from './pages/NotFound'
import OtpGenerator from './components/OtpGenerator'
import { useState } from 'react'
import StyledForm from './components/StyledForm'
function App() {
  const [btn, setBtn ] = useState(false)
 

  return (
<>
   {/* <div><ColorBox/></div>  */}
     {/* <Greeting/>  */}
     {/* <RandomNumber/> */}
   {/* <Router>
    
    <Routes>
      <Route path='about' element={<About/>} />
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>} />
      

      <Route path='*' element={<NotFound/>} />
    </Routes>
    
    <Footer/>
    
  </Router>
  <Button text={'submit'}  isStyle={!btn} /> */}
  {/* <OtpGenerator/>
   */}

   {/* <Form/> */}
   <StyledForm/>
 
 

  </>
  )
}

export default App
