import Layout from "../layout/layout";


const Otp = () => {
    return (
        <Layout>
            <h3 className="text-center">OTP</h3>
            <div className="float-sm-start margin">

                <div className="row">
                    <div className=" float-center">   
                    <span>Otp : </span>             
                    <input type="text" />
                        <button className="btn btn-success">Next</button>
                    </div>    
                </div>
            </div>
        </Layout>
    );
};

export default Otp;