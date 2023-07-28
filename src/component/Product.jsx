import { Link } from "react-router-dom";


const Product = ({product ={}}) => {
    return (
        <div className="row">
        
            <div className="col-md-4">
                    <Link to={'/details'} className="card cardPadding">
                        
                        <figure><img className="imgWidth" src={product.image} alt={product.title} /></figure>
                        <div className="card-body">
                            <h6 className="card-title">{product.title}</h6>
                            <p>{product.short_des}</p>
                            <h3>Price : $ {product.price}</h3>
                            <button className="btn btn-warning">+ Add To Cart</button>
                        </div>
                       
                    </Link>
            </div>
           
        </div>
    );
};

export default Product;