import React from "react";
import TestPipeLine from "./TestPipeLine";
import Performance from "./performance";
import PLImpactChart from "./PLImpactChart";
import SegmentTable from "./SegmentTable";
import { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import TestId from "./TestId";
import Treatment from "./Treatments";
import SequenceAttributes from "./SequenceAttributes";

// let seg: any = ''

const ReviewPerformance: React.FC = () => {
  const [activeBucket, setActiveBucket] = useState("b1");
  const [showTestIdComp, setShowTestIdComp] = useState(false);
  const [showSequenceCond, setShowSequenceCond] = useState(false);

  const BGroups = [
    { id: "b1", label: "B1" },
    { id: "b2", label: "B2" },
    { id: "b3", label: "B3" },
    { id: "b4", label: "B4" },
    { id: "b5", label: "B5" },
    { id: "b6", label: "B6" },
  ];

  const tableNumber = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const showSequence = () => {
    setShowSequenceCond(true);
  };

  const handleButtonClick = async (buttonId: string) => {
    setActiveBucket(buttonId);
  };

  const showTestIdComponent = () =>{
    setShowTestIdComp(true)
  }

  // useEffect(()=>{
  //    seg = localStorage.getItem('segment')
  // })

  return (
    <div className="flex flex-col gap-5 bg-gray-100 pl-2 pt-5 m-4 rounded-xl">
      <div className="w-[95%] flex items-center justify-between ml-6">
        <div className=" flex justify-between  rounded-xl B1TabsContain">
          {BGroups.map((button, index) => (
            <div
              key={button.id}
              onClick={() => handleButtonClick(button.id)}
              className={`text-center text-[18px] font-medium font-['Calibri' !important] h-10 w-[78px] border border-gray-400 flex align-center justify-center items-center cursor-pointer ${
                activeBucket === button.id ? " bg-violet-200 " : "bg-[#fafafb]"
              } ${index === 0 ? "rounded-l-md" : ""} ${
                index === BGroups.length - 1 ? "rounded-r-md" : ""
              }`}
            >
              {button.label}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="text-gray-500 border-2 pl-3 pr-3 rounded"
          >
            HOLD
          </button>
          <button
            type="button"
            className="text-white bg-[#00B050] border-2 pl-3 pr-3 rounded"
          >
            MESSAGE
          </button>
          <button
            type="button"
            className="text-white bg-[#7030A0] border-2 pl-3 pr-3 rounded"
          >
            CALL
          </button>
          <button
            type="button"
            className="text-white bg-[#ED7D31] border-2 pl-3 pr-3 rounded"
          >
            AGENCY
          </button>
          <button
            type="button"
            className="text-white bg-[#FF0000] border-2 pl-3 pr-3 rounded"
          >
            LEGAL
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <SegmentTable showTestIdComponent={showTestIdComponent} showTestIdCompo={showTestIdComp} />
        {/* <div className="w-[95%] flex items-center ml-6">
          <div className="w-[20%] flex items-center gap-1 border-2 ">
            <HiPlus className="text-violet-800" size={35} />
            <button
              onClick={() => setShowTestIdComp(true)}
              type="button"
              className={`w-[90%] p-1 border-2 rounded-md font-['calibri' !important] font-[400] text-gray-500 ${
                showTestIdComp && "bg-violet-300 text-gray-800 font-[500]"
              }`}
            >
              Add/Edit
            </button>
          </div>

          <table className="w-[80%]" cellPadding={5}>
            <tbody>
              <tr className="border-2">
                {tableNumber.map((each) => (
                  <td className="border-2 text-center font-['calibri' !1important] font-[500s]">
                    {each}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
      {!showTestIdComp && (
        <div className=" flex gap-2 ml-4">
          <TestPipeLine />
          <Performance />
          <PLImpactChart />
        </div>
      )}
      {showTestIdComp && (
        <div className="flex gap-6 ml-5">
          <div className="flex flex-col gap-2">
            <TestId showSequence={showSequence} />
            {showSequenceCond && <SequenceAttributes />}
          </div>
          <Treatment />
        </div>
      )}
    </div>
  );
};

export default ReviewPerformance;
