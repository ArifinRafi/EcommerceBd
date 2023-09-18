import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Main from './Layout/Main.jsx';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Login",
        element: <Login/>,
      }
    ],
  },
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='max-w-screen-2xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    
  </React.StrictMode>
);