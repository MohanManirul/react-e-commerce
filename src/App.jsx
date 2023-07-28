import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './pages/Cart';
import ProductDetails from "./component/ProductDetails";
import Otp from "./pages/Otp";
import ProductList from "./pages/ProductList";
import LoginPage from "./pages/LoginPage";


const App = () => {
  return ( 
    <div>
        <BrowserRouter>
          <Routes>
              <Route path="/"  element={<ProductList />}/>
              <Route path="/cart"  element={<Cart />}/>
              <Route path="/product-details"  element={<ProductDetails />}/>
              <Route path="/login"  element={<LoginPage />}/>
              <Route path="/otp"  element={<Otp />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;