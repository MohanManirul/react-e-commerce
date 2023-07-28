import { useState } from "react";
import Layout from "../layout/layout";
import verifyLogin from "../utils/verifyLogin";
import { useNavigate, useSearchParams } from "react-router-dom";


const OtpPage = () => {
    const [pin , setPin] =useState('');
    const navigate = useNavigate();
    const [searchParam] = useSearchParams();
    const email = searchParam.get('email');

    const handleVerifyLogin = () =>{
        verifyLogin(email, pin)
        .then(data => {
            if(data?.msg === "success"){
                localStorage.setItem("token", data.data);
                console.log(data)
                navigate('/');
            }
        })
        .catch((err) => console.log('there was an error'));
    }
    return (
        <Layout>
            <h3 className="text-center">OTP</h3>
            <div className="float-sm-start margin">

                <div className="row">
                    <div className=" float-center">   
                    <span>Otp : </span>             
                    <input type="text" value={pin} onChange={(e)=>setPin(e.target.value)}/>
                        <button className="btn btn-success" onClick={handleVerifyLogin}>Next</button>
                    </div>    
                </div>
            </div>
        </Layout>
    );
};

export default OtpPage;