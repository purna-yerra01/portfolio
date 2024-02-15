import React from "react";
import RecommendationCard from "./recommendationcard";
import {v4 as uuid} from"uuid";
function Recommendationsection() {
    const recommendations=[
        {
            id:1,
            name:"Random guy",
            company:"ABC Company",
            designation:"CEO",
            message:"He is a good engineer",
        },
        {
            id:2,
            name:"Random guy",
            company:"ABC Company",
            designation:"Developer",
            message:"He is a good coomunicator",
        },
        {
            id:3,
            name:"Random guy",
            company:"ABC Company",
            designation:"Collegue",
            message:"He is very much good at coding",
        },
        {
            id:4,
            name:"Random guy",
            company:"ABC Company",
            designation:"manager",
            message:"He is a good engineer",
        },
    ];
    return(
        <div className="container-fluid my-5">
        <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
           {recommendations.map((recommendation)=>(
            <RecommendationCard key={uuid()} recommendation={recommendation}/>
           )
           
           )}
               
    </div>
    </div>
    );
}
export default Recommendationsection;