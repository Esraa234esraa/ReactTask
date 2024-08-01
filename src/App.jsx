import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import { Navbar } from './component/navbar/Navbar'
import { Home } from './component/Home/Home'
import About from './component/About/About'
import Parent from './component/Parent/Parent'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './component/layout/Layout'
import Notfound from './component/Notfound/Notfound'
import Gallary from './component/Gallary/Gallary'
import Mobile from './component/Mobile/Mobile'
import Labtop from './component/Labtop/Labtop'

let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'parent', element: <Parent /> },
      {
        path: 'gallary', element: <Gallary />
      },

      { path: '*', element: <Notfound /> }
    ]
  },

])

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <i className='fa fa-face-flushed '></i> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <Navbar /> */}
      {/* <Home /> */}
      <RouterProvider router={routers}></RouterProvider>
      {/* <About /> */}
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
