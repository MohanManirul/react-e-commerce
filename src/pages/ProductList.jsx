
import Layout from "../layout/layout";
import { useEffect, useState } from "react";
import fetchProducts from "../utils/FetchProducts";
import Product from './../component/Product';

const ProductList = () => {

    const [products , setProduucts] = useState([]);
    const [error , setError ] = useState(null);
    
    useEffect(()=> {

        fetchProducts()
            .then((data) => setProduucts(data))
            .catch((err) => console.log(err));

    },[]) ;

    //decide what to render

    let output;

    if(error){
        output = <div>There was an error</div>
    }else if(products?.length > 0 ){
        output = products.map( (product , i) => ( <Product key={i} /> ));
    }else{
        <div>No product found</div>
    }

    return (
        <Layout>
            <h3>I'm from home page</h3>
         
           { output }
              
        </Layout>
    );
}; 

export default ProductList;