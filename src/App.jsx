
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Login></Login>,
      children: [
        {
          path: '/navbar',
          element: <Navbar></Navbar>,
        },
        {
          path: '/home',
          element: <Home></Home>,
        }
      ]
    }
  ]) 
  

  return (
    <>
    <div className='max-w-4xl mx-auto'>
       <RouterProvider router={router}>
       </RouterProvider>
    </div>
    </>
  )
}

export default App
