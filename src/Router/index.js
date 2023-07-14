import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../Component/NavBar'
import Signin from '../Component/Signin'
import About from '../Component/About'
import Contact from '../Component/Contact'
import Services from '../Component/Services'
import AlbumDetail from '../Component/AlbumDetail'
import Signindetail from '../Component/Signindetail'
import Home from '../Component/Home'
import Signup from '../Component/Signup'
import Login from '../Component/Login'

const Index = () => {

  return (
    <>
    
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Signin' element={<Signin />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Contact' element={<Contact />}></Route>
      <Route path='/Services' element={<Services />}></Route>
      <Route path='/Signindetail' element={<Signindetail />}></Route>
      <Route path="/albumDetail/:albumId" element={<AlbumDetail />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
     
     </Routes>
     </BrowserRouter>

    </>
    
    
  )
}

export default Index