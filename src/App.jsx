import React from 'react'
import Navbar from './comp/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './comp/Footer'
import Title from './comp/Title'
import NewArrival from "./comp/NewArrival.jsx";
import CategoryPage from './pages/CategoryPage.jsx'
import CartPage from './pages/CartPage.jsx'
import Category from './comp/Category.jsx'
import About from './pages/AboutPage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import ContactUs from './comp/ContactUs.jsx'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className='pt-10 min-h-[70vh]'>
        <Routes>

          <Route path='/' element={<Home></Home>}> </Route>
          <Route path='/trendingPage' element={<NewArrival/>}> </Route>

          <Route path='/category' element={<Category/>}> </Route>
          <Route path='/category/:category' element={<CategoryPage/>}> </Route>
          <Route path='/cart' element={<CartPage></CartPage>}> </Route>
          <Route path='/aboutPage' element={<About></About>}> </Route>
          <Route path='/TeamPage' element={<TeamPage></TeamPage>}> </Route>
          <Route path='/contact' element={<ContactUs></ContactUs>}> </Route>

        </Routes>
      </div>
      
      <Footer></Footer>
    </div>
  )
}

export default App
