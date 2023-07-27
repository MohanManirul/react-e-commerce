import Layout from "../layout/layout";


const Login = () => {
    return (
        <Layout>
            <h3 className="text-center">Login page</h3>
            <div className="float-sm-start margin">

                <div className="row">
                    <div className=" float-center">   
                    <span>E-mail : </span>             
                    <input type="text" />
                        <button className="btn btn-success">Next</button>
                    </div>    
                </div>
            </div>
        </Layout>
    );
};

export default Login;