import { Route, Routes } from "react-router-dom";
import Dish from "./pages/Dish/Dish";
import Home from "./pages/Home/Home";
import OrderConfirmed from "./pages/Order/OrderConfirmed";
import Gallery from "./pages/Gallery/Gallery";
import AboutUs from "./pages/Aboutus/AboutUs";
import BlogPage from "./pages/Blog/BlogPage";
import ContactUs from "./pages/Contact/ContactUs";

function App() {
  return (
    <div className="App">

    <Routes>

      <Route path='/' element={<Home/>}/>
       <Route path="/menu/:tableId" element={<Dish/>}/>
       <Route path="/order/:orderId" element={<OrderConfirmed/>}/>
       <Route path='/gallery' element={<Gallery/>}/>
       <Route path="/AboutUs" element={<AboutUs/>}/>
       <Route path="/Blog" element={<BlogPage/>}/>
       <Route path="/contactus" element={<ContactUs/>}/>


    </Routes>  

    </div>
  );
}

export default App;
