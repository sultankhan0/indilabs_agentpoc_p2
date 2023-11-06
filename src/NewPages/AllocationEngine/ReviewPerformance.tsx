import React from "react";
import TestPipeLine from "./TestPipeLine";
import Performance from "./performance";
import PLImpactChart from "./PLImpactChart";


const ReviewPerformance: React.FC = () =>{ 


    return(
     <div className=" flex gap-2 bg-gray-100 ml-4">
        <TestPipeLine/> 
        <Performance/>
        <PLImpactChart/>
     </div>
    )
    };
    
    export default ReviewPerformance;
    