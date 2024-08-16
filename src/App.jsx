import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import '../src/scripts/portfolio.js'
import './../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import Layout from './component/layout/Layout'
import { Home } from './component/Home/Home'
import About from './component/About/About'
import Gallary from './component/Gallary/Gallary'
import Notfound from './component/Notfound/Notfound'
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact.jsx';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Notfound /> }
    ]
  },
], {
  basename: '/ReactComponents'
});


function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
