import React from "react";
import { createBrowserRouter, ScrollRestoration, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./page/home/Home";
import ContactUs from "./page/contact/Contact";
import AboutPage from "./page/about/About-us";
import BlogPage from "./page/blog/Blog";
import BlogDetails from "./page/blog/Blogdetails";
import InsurancePage from "./page/insurance/Insurance";
import PrivacyPolicy from "./page/privacy-policy/Privacy-Policy";
import TermsConditions from "./page/term-condition/Terms-conditions";
import RefundCancellationPolicy from "./page/refund-cancellation-policy/RefundCancellationPolicy";
import UserAgreement from "./page/user-agreement/UserAgreement";
import MerchantTerms from "./page/merchant-terms/MerchantTerms";
import DeveloperTerms from "./page/developer-terms/DeveloperTerms";
import AcceptableUsePolicy from "./page/acceptable-use-policy/AcceptableUsePolicy";
import CookiePolicy from "./page/cookie-policy/CookiePolicy";
import Disclaimer from "./page/disclaimer/Disclaimer";
import GrievanceRedressalPolicy from "./page/grievance-redressal-policy/GrievanceRedressalPolicy";
// import Services from "./page/services/Services";
import Join from "./page/join-as-retailer/Join-as-retailer";
import Joins from "./page/join-as-distributor/Join-as-distributor";
import TechnologyPartner from "./page/join-as-technology-partner/TechnologyPartner";
import LoginPage from "./page/login/login-form";
import AccountDeletion from "./page/account-deletion/AccountDeletion";


import PaymentGateway from "./page/Products/PaymentGateway";
import SoundBox from "./page/Products/SoundBox";
import QRCode from "./page/Products/QRCode";
import PosMachine from "./page/Products/PosMachine";
// import PaymentLink from "./page/Products/PaymentLink";
import DigitalInvoice from "./page/Products/DigitalInvoice";
import MerchantApp from "./page/Products/MerchantApp";
import PaymentLinks from "./page/Products/PaymentLinks";
import ErrorPage from "./common/ErrorPage";

import PaymentGatewayAPI from "./page/API/PaymentGatewayAPI";
import BBPSAPI from "./page/API/BBPSAPI";
import PayoutAPI from "./page/API/PayoutAPI";
import QRAPI from "./page/API/QRAPI";
import RechargeAPI from "./page/API/RechargeAPI";
import WalletAPI from "./page/API/WalletAPI";
import AadhaarAPI from "./page/API/AadhaarAPI";

import Documentation from "./page/Developers/Documentation";
import SDK from "./page/Developers/SDK";
import Sandbox from "./page/Developers/Soundbox";
import Webhooks from "./page/Developers/Webhooks";
import Postman from "./page/Developers/Postman";
import ReleaseNotes from "./page/Developers/ReleaseNotes";
import Support from "./page/Developers/Support";

import Retailer from "./page/Partners/Retailer";
import Enterprise from "./page/Partners/Enterprise";
import Overview from "./page/Partners/Overview";
import Distributor from "./page/Partners/Distributor";
import WhiteLabel from "./page/Partners/WhiteLabel";


import OurStory from "./page/Company/our-story";
import LeadershipTeam from "./page/Company/LeadershipTeam";
import NewsUpdates from "./page/Company/News&updates";
import Careers from "./page/Company/Careers";
import MissionVision from "./page/Company/Mission&Vision";

const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
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
        path: "/insurance-solutions",
        element: <InsurancePage />,
      },
      {
        path: "/company/about-us",
        element: <AboutPage />,
      },
      {
        path: "/company/leadership-team",
        element: <LeadershipTeam />,
      },
      {
        path: "/company/careers",
        element: <Careers />,
      },
      {
        path: "/company/mission-vision",
        element: <MissionVision />,
      },
      {
        path: "/company/news-updates",
        element: <NewsUpdates />,
      },
      {
        path: "/company/blog",
        element: <BlogPage />,
      },
      {
        path: "/company/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/company/our-story",
        element: <OurStory />,
      },
      {
        path: "/join-as-retailer",
        element: <Join />,
      },
      {
        path: "/Retailer",
        element: <Retailer />,
      },
      {
        path: "/Enterprise",
        element: <Enterprise />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/WhiteLabel",
        element: <WhiteLabel />,
      },
      {
        path: "/join-as-distributor",
        element: <Joins />,
      },
      {
        path: "/Distributor",
        element: <Distributor />,
      },
      {
        path: "/join-as-technology-partner",
        element: <TechnologyPartner />,
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
      // {
      //   path: "/services",
      //   element: <Services />,
      // },
      // {
      //   path: "/services/:id",
      //   element: <Services />,
      // },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/term-condition",
        element: <TermsConditions />,
      },
      {
        path: "/refund-cancellation-policy",
        element: <RefundCancellationPolicy />,
      },
      {
        path: "/user-agreement",
        element: <UserAgreement />,
      },
      {
        path: "/merchant-terms",
        element: <MerchantTerms />,
      },
      {
        path: "/developer-terms",
        element: <DeveloperTerms />,
      },
      {
        path: "/acceptable-use-policy",
        element: <AcceptableUsePolicy />,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
      },
      {
        path: "/disclaimer",
        element: <Disclaimer />,
      },
      {
        path: "/grievance-redressal-policy",
        element: <GrievanceRedressalPolicy />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/account-delete",
        element: <AccountDeletion />,
      },
      {
        path: "/products/payment-gateway",
        element: <PaymentGateway />,
      },
      {
        path: "/products/payment-links",
        element: <PaymentLinks />,
      },
      {
        path: "/products/qr-code",
        element: <QRCode />,
      },
      {
        path: "/products/sound-box",
        element: <SoundBox />,
      },
      {
        path: "/products/pos-machine",
        element: <PosMachine />,
      },
      {
        path: "/products/merchant-app",
        element: <MerchantApp />,
      },
      {
        path: "/products/digital-invoice",
        element: <DigitalInvoice />,
      },
      {
        path: "/api/payment-gateway",
        element: <PaymentGatewayAPI />,
      },
      {
        path: "/api/bbps",
        element: <BBPSAPI />,
      },
      {
        path: "/api/payout",
        element: <PayoutAPI />,
      },
      {
        path: "/api/qr",
        element: <QRAPI />,
      },
      {
        path: "/api/recharge",
        element: <RechargeAPI />,
      },
      {
        path: "/api/wallet",
        element: <WalletAPI />,
      },
      {
        path: "/api/aadhaar",
        element: <AadhaarAPI />,
      },
      {
        path: "/developers/documentation",
        element: <Documentation />,
      },
      {
        path: "/developers/sdk",
        element: <SDK />,
      },
      {
        path: "/developers/soundbox",
        element: <Sandbox />,
      },
      {
        path: "/developers/webhooks",
        element: <Webhooks />,
      },
      {
        path: "/developers/postman",
        element: <Postman />,
      },
      {
        path: "/developers/release-notes",
        element: <ReleaseNotes />,
      },
      {
        path: "/developers/support",
        element: <Support />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
