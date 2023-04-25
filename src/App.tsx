import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SingleProduct from './pages/product/SingleProduct';
import Products from './pages/Category/Products';
import Homepage from './pages/home/Homepage';
import Footer from './components/Footer/Footer';
import About from './pages/aboutPage/About';
import ContactPage from './pages/contactUs/ContactUs';
import AccountPage from './pages/accounts/AccountPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import NavbarComponent from './components/Navbar/Navbar';
import Logout from './components/logout/Logout';
import ForgotPassword from './pages/accounts/forgetReset/ForgetPassword';


const Layout = ()=>{
  return <div className="overflow-x-hidden">
    <NavbarComponent />
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
      {
        path: "/about-page",
        element: <About />,
      },
      {
        path: "/contact-page",
        element: <ContactPage />,
      },
    ]
  },
  {
    path: "/login",
    element: <AccountPage />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/reset-password",
    element: <ForgotPassword />,
  },
]);

function App() {
  return (
    <div className="App overflow-x-hidden">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
