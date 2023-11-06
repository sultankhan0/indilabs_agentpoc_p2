import React from "react";
import TestPipeLine from "./TestPipeLine";
import Performance from "./performance";
import PLImpactChart from "./PLImpactChart";
import SegmentTable from "./SegmentTable";
import { useEffect, useState } from "react";




const ReviewPerformance: React.FC = () =>{ 

   const [activeBucket, setActiveBucket] = useState("b1");


   const BGroups = [
      { id: "b1", label: "B1" },
      { id: "b2", label: "B2" },
      { id: "b3", label: "B3" },
      { id: "b4", label: "B4" },
      { id: "b5", label: "B5" },
      { id: "b6", label: "B6" },
    ];
  

    const handleButtonClick = async (buttonId: string) => {
      setActiveBucket(buttonId);
    };

    return(
      <div className="flex flex-col gap-10">
      <div className="w-[95%] flex items-center justify-between ml-6">
      <div className=" flex justify-between  rounded-xl B1TabsContain">
              {BGroups.map((button, index) => (
                <div
                  key={button.id}
                  onClick={() => handleButtonClick(button.id)}
                  className={`text-center text-[18px] font-medium font-['Calibri' !important] h-10 w-[78px] border border-gray-400 flex align-center justify-center items-center cursor-pointer ${
                    activeBucket === button.id
                      ? " bg-violet-200 "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-md" : ""} ${
                    index === BGroups.length - 1 ? "rounded-r-md" : ""
                  }`}
                >
                  {button.label}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1">
                <button type="button" className="text-gray-500 border-2 pl-3 pr-3 rounded">HOLD</button>
                <button type="button" className="text-white bg-green-500 border-2 pl-3 pr-3 rounded">MESSAGE</button>
                <button type="button" className="text-white bg-violet-800 border-2 pl-3 pr-3 rounded">CALL</button>
                <button type="button" className="text-white bg-orange-500 border-2 pl-3 pr-3 rounded">AGENCY</button>
                <button type="button" className="text-white bg-red-600 border-2 pl-3 pr-3 rounded">LEGAL</button>

            </div>

      </div>
      <SegmentTable/>
     <div className=" flex gap-2 ml-4">
        <TestPipeLine/> 
        <Performance/>
        <PLImpactChart/>
     </div>
     </div>
    )
    };
    
    export default ReviewPerformance;
    