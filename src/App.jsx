import { useRef, useState } from 'react'
import Register from './pages/Register/Register'
import Header from './components/header/Header'
import Login from './pages/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './pages/Home/Home'

function App() {


  return (
    <div className='w-full flex flex-col h-auto bg-gray-800 gap-10'>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  )
}

export default App
