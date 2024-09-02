import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutusPage from "./Components/AboutusPage";
import ProductPage from "./Components/ProductPage";
import ServicePage from "./Components/ServicePage";
import ProfilePage from "./Components/ProfilePage";
import ContactusPage from "./Components/ContactusPage";
import ProductPageHover from "./Components/ProductPageHover";
import ScrollToTop from "./Components/ScrollToTop";
import { useEffect } from "react";
import Aos from "aos";
import PageNotFound from "./Components/PageNotFound";

function App() {
  useEffect(() => {
    Aos.init({
      once: true, 
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/aboutus' element={<AboutusPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/Service' element={<ServicePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/contactus' element={<ContactusPage />} />
          <Route path="/ProductPageHover/:productId" element={<ProductPageHover />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
