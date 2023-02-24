import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SingleProduct from './pages/product/SingleProduct';
import Products from './pages/Category/Products';
import Homepage from './pages/home/Homepage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const Layout = ()=>{
  return <div className="app">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
