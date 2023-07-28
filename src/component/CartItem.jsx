export default function CartItem({ product , remove}){
    const { title , image, price ,short_des ,id } = product || {} ;
    return(
        <div className="col-md-7">
              
                    <div className="card cardPadding">  
                        <div className="row">

                        <div className="col-md-3">
                            <figure><img className="imgWidth" src={image} alt={title}  /></figure>
                        </div> 

                        <div className="col-md-9">
                            <h6>{title}</h6>
                            <h3>Price : ${price}</h3>
                            <p>{short_des}</p>
                            <button className="btn btn-warning float-end" onClick={()=> remove(id)}>remove</button>
                        </div>                  
                        </div>                          
                        
                    </div>
               
            </div>
    )
}