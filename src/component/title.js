import React from "react";
import purna from "../assets/purnasai.jpg";

function Title() {
    return(
        <div className="container">
        <div className="row text-center align-items-center my-5 py-5">
            <div className="col-12 col-md-6 "> 
                <img
                 className="img-fluid rounded-circle w-75" 
                 src={purna}
                 alt="purna"
                   />
                </div>
             <div className="col-12 col-md-6 pt-5">
                <div className="font-weight-light" style={{fontSize: "50px"}}>
                    Hi,iam <span className="text-info ">Purna Yerra</span>
                </div>
                <h4 className="font-weight-light"> Iam a student</h4> 
             </div>
             
        </div>
    </div>
    );
}
export default Title;