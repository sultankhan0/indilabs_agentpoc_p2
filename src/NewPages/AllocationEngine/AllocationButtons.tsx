import React,{ useState } from "react";
// import Sidebar from "../../components/common/Sidebar";


const AllocationButtons: React.FC = () => {

    const [activeButton, setActiveButton] = useState("bt1");


    const Buttons = [
        { id: "bt1", label: "All" },
        { id: "bt2", label: "Cards" },
        { id: "bt3", label: "Loans" },
        { id: "bt4", label: "Auto" },
        { id: "bt5", label: "BNPL" },
        
      ];

      const handleButtonClick = async (buttonId: string) => {
        setActiveButton(buttonId);
      };


  return (
    <div className="ml-5 flex flex-col gap-11">
       {Buttons.map((button, index) => (
                <button
                  key={button.id}
                  onClick={() => handleButtonClick(button.id)}
                  className={`w-[120px] font-medium text-[21px] text-[#7f7f7f] font-['calibri' !important] border-2 border-[#BFBFBF] rounded-md pt-2 pb-2 cursor-pointer ${
                    activeButton === button.id
                      ? " bg-[#DED6FF] text-[#404040] "
                      : "bg-transparent"  
                  }`}
                >
                  {button.label}
                </button>
              ))}
     </div>
  );
};

export default AllocationButtons;

