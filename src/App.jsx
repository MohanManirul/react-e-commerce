import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './pages/Cart';
import ProductDetails from "./component/ProductDetails";
import ProductList from "./pages/ProductList";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";


const App = () => {
  return ( 
    <div>
        <BrowserRouter>
          <Routes>
              <Route path="/"  element={<ProductList />}/>
              <Route path="/cart"  element={<Cart />}/>
              <Route path="/product-details"  element={<ProductDetails />}/>
              <Route path="/login"  element={<LoginPage />}/>
              <Route path="/otp"  element={<OtpPage />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;