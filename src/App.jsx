import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'

import Root from './Route/Root'
import ErrorPages from './Pages/ErrorPages'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'


const router=createBrowserRouter([
      {
        path:'/',
        element:<Root />,
        errorElement: <ErrorPages />,
        children:[
          {
            path:'/',
            element:<Home />
          },
          {
            path:'/about',
            element:<About />
          },
          {
            path:'/login',
            element:<Login />
          }
        ]
      }
])

function App() {

  return <RouterProvider router={router} />
 
  
}

export default App
