import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home  from './Pages/Home/Home'
import AllCategories from './Pages/Categories/AllCategories'
import Women from './Pages/Categories/Women'
import Men from './Pages/Categories/Men'
import Kids from './Pages/Categories/Kids'


const App = () => {
  return (
    <div>
     <NavBar/>
     <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<AllCategories/>}/>
        <Route path='women' element={<Women/>}/>
        <Route path='men' element={<Men/>}/>
        <Route path='kids' element={<Kids/>}/>
      
     </Routes>
     <Footer/>
    </div>
  )
}

export default App

