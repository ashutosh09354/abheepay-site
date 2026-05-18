import React from "react";
import { createBrowserRouter, ScrollRestoration, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./page/home/Home";
import ContactUs from "./page/contact/Contact";
import AboutPage from "./page/about/About-us";
import BlogPage from "./page/blog/Blog";
import BlogDetails from "./page/blog/Blogdetails";
import EnquiryPopup from "./components/Enquiryform";
import InsurancePage from "./page/insurance/Insurance";
import PrivacyPolicy from "./page/privacy-policy/Privacy-Policy";
import TermsConditions from "./page/term-condition/Terms-conditions";
import Services from "./page/services/Services";
import ServicesDetail from "./page/services/Servicesdetails";
import Join from "./page/join-as-retailer/Join-as-retailer";
import Joins from "./page/join-as-distributor/Join-as-distributor";
import LoginPage from "./page/login/login-form";
import AccountDeletion from "./page/account-deletion/AccountDeletion";



const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
      {/* Optional: Enquiry Popup globally */}
      <EnquiryPopup />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/insurance",
        element: <InsurancePage />,
      },
      {
        path: "/join-as-retailer",
        element: <Join />,
      },
      {
        path: "/join-as-distributor",
        element: <Joins />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServicesDetail />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/term-condition",
        element: <TermsConditions />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/account-delete",
        element: <AccountDeletion />,
      },
      
    ],

  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;