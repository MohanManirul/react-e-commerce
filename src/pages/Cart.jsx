
import { useEffect, useState } from "react";
import CartItem from "../component/CartItem";
import Layout from "../layout/layout";
import fetchCart from "../utils/fetchCart";


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

    return (
        <Layout>
            <h2>Hi I'm from cart page</h2>
            
            <div className="row">
            {/* left side start */}
            {items.map(item => <CartItem key={item.id} product={item.product} />)}            

             {/* left side end */}


            {/* right side start */}
            <div className="col-md-4 divRight">
                <dv className="row">
                    <div className="card cardPadding">
                        Total Item : 10 pcs <br />
                        Total Price : 1000 tk
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