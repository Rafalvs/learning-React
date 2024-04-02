import React from "react";
import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom"; // 1st method
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // 2nd method
import Header from "./Header";
import Footer from "./Footer";
import Colors from "./body/Colors";
import Options from "./pages/Options";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact"
import ProductDetails from "./pages/ProductDetails";

export default function Router() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet /> {/* Outlet to render nested routes */}
        <Footer />
      </>
    );
  };

  //1st method
  
  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Colors />} />
            <Route path="options" element={<Options />} />
            <Route path="profile" element={<Profile />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product/" element={<ProductDetails />} />
            <Route path="product/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
  
  //2nd method

  /*
  const BrowserRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Colors />
        },
        {
          path: "/options",
          element: <Options />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/product/:id",
          element: <ProductDetails />
        }
      ]
    }
  ])
*/

  return (
    <BrowserRoutes />
  );
}