import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home  from './Pages/Home/Home'
import AllCategories from './Pages/Categories/AllCategories'
// import Women from './Pages/Categories/Women'
// import Men from './Pages/Categories/Men'
// import Kids from './Pages/Categories/Kids'
import Contact from './Pages/Contact/Contact'
import SignUp from './Pages/SignUp/SignUp'

const App = () => {
  return (
    <div>
     <NavBar/>
     <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<AllCategories/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      
     </Routes>
     <Footer/>
    </div>
  )
}

export default App

