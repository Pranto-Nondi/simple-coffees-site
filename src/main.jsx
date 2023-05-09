import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffees from './components/AddCoffees';
import UpdateCoffee from './components/UpdateCoffee';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: () => fetch(`http://localhost:5000/coffees`)


  },
  {
    path: "/addCoffees",
    element: <AddCoffees />,
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee />,
    loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
