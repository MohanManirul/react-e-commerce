import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Cart from './pages/Cart';
import ProductDetails from "./component/ProductDetails";
import Login from "./pages/Login";
import Otp from "./pages/Otp";


const App = () => {
  return ( 
    <div>
        <BrowserRouter>
          <Routes>
              <Route path="/"  element={<Product />}/>
              <Route path="/cart"  element={<Cart />}/>
              <Route path="/product-details"  element={<ProductDetails />}/>
              <Route path="/login"  element={<Login />}/>
              <Route path="/otp"  element={<Otp />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;