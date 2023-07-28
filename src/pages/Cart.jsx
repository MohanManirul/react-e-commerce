
import { useEffect, useState } from "react";
import CartItem from "../component/CartItem";
import Layout from "../layout/layout";
import fetchCart from "../utils/fetchCart";
import removeCart from "../utils/removeCarrt";
import convertPriceStringToNumber from "../utils/convertPriceStringToNumber";


const Cart = () => {
    const [items , setItems] = useState([]);

    useEffect(()=>{
        fetchCart()
        .then(data => {
            if(data?.msg === "success"){
                setItems(data?.data)
            }
        })
        .catch((err) => console.log("There was an error"))
    },[]);

    // remove cart item
    const handleRemoveCart = (productId) => {
        removeCart(productId)
        .then((data) => {
            if(data?.msg === "success"){
                const remainingItems = items.filter(item => item.product.id !== productId);
                setItems(remainingItems);
                alert('item removed from cart');
            }
        })
        .catch((err) => console.log('There was an error'));
    }

    // calculate total price
    const calculateTotalPrice = () =>{
        const totalPrice = items.reduce((total, currentValue) =>{
            const price = convertPriceStringToNumber(currentValue);
            return total + price;
        },0);
        return totalPrice.toLocaleString();
    }

    return (
        <Layout>
            <h2>Hi I'm from cart page</h2>
            
            <div className="row">
            {/* left side start */}
            {items.map(item => <CartItem key={item.id} product={item.product} remove={handleRemoveCart}/>)}            

             {/* left side end */}


            {/* right side start */}
            <div className="col-md-4 divRight">
                <dv className="row">
                    <div className="card cardPadding">
                        Total Item : {items.length} pcs <br />
                        Total Price : {calculateTotalPrice()} tk
                    </div>
                    <button className="btn btn-success">checkout</button>
                </dv>
                
            </div>
             {/* right side end */}
        </div>
           
        </Layout>
    );
}; 

export default Cart;