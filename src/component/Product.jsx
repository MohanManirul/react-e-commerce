import { Link } from "react-router-dom";
import createCart from "../utils/createCart";


const Product = ({product ={}}) => {

    const handleAddToCart = ()=>{
        createCart(product.id)
        .then(data => {
            if(data?.msg === 'success'){
                alert('product was added to cart')
            }
        })
        .catch((err) => console.log("There was an error"))
    }

    return (
        <div className="row">
        
            <div className="col-md-4 productDiv">
                        
                    <figure><img className="imgWidth" src={product.image} alt={product.title} /></figure>
                    <div className="card-body">
                        <h6 className="card-title">{product.title}</h6>
                        <p>{product.short_des}</p>
                        <h3>Price : $ {product.price}</h3>
                        <button onClick={handleAddToCart} className="btn btn-warning">+ Add To Cart</button>
                    </div>
            </div>
           
        </div>
    );
};

export default Product;