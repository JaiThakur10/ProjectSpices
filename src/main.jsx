import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Blend from './Components/Blend/Blend.jsx'
import Blog from './Components/Blog/Blog.jsx'
import B2B from './Components/B2B/B2B.jsx'
import Basic from './Components/Basic/Basic.jsx'
import Mixed from './Components/MIxed/Mixed.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='blend' element={<Blend/>} />
      <Route path='blog' element={<Blog/>} />
      <Route path='B2B' element={<B2B/>} />
      <Route path='Basic' element={<Basic/>} />
      <Route path='Mixed' element={<Mixed/>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
