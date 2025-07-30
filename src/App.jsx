import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'

import Root from './Route/Root'
import ErrorPages from './Pages/ErrorPages'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ApliedJob from './Pages/ApliedJob'
import Blog from './Pages/Blog'
import Details from './Pages/Details'


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
            path:'/future-details/:id',
            element:<Details />

          },
          {
            path:'/appliedjobs',
            element:<ApliedJob />
          },
          {
            path:'/blog',
            element:<Blog />
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
