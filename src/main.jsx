import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffees from './components/AddCoffees';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader:()=>fetch(`http://localhost:5000/coffees`)

   
  },
  {
    path: "/addCoffees",
    element: <AddCoffees />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
