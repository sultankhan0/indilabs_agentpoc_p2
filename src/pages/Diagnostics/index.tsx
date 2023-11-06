import React, { useState } from "react";
import Sidebar from "../../components/common/Sidebar";
import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
import HotspotExpanded from "../../components/Diagnostics/HotspotExpanded";
import DiagnosticsCard from "../../components/Diagnostics/DiagnosticsDetails";
import TacticalActionPlanCard from "../../components/Diagnostics/TacticalActionPlanCard";
import Button from "../../components/Button";

const reviewHotspots = () => {};

const Diagnostics: React.FC = () => {
  const [IsDiagnostics, setIsDignostic] = useState(false);
  return (
    <>
      <div className="px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb]">
        <DashboardHeader />
      </div>
      <div className="flex   items-start  justify-center gap-7 p-[6px] lg:p-[59px] bg-[#fafafb]">
        <div className="w-full  md:flex items-start justify-start gap-10 flex-wrap">
          <div className="md:w-[50%] sm:mb-5 md:mb-0">
            <HotspotExpanded setDignostic={setIsDignostic} />
          </div>
          <div className="md:w-[30%]  flex flex-col gap-4">
            {IsDiagnostics ? (
              <>
                <DiagnosticsCard />
                <TacticalActionPlanCard />
              </>
            ) : (
              <div className="w-full h-[319px] p-4 bg-white rounded-xl shadow flex flex-col justify-start items-start gap-4">
                <h2 className="text-black text-base font-medium font-['DM Sans']">
                  Diagnostics
                </h2>
                <div className="w-[70%] h-full flex items-center justify-center self-center">
                  <p className=" text-center text-black text-sm font-normal font-['DM Sans']">
                    Select any hotspot to know detailed analysis and action plan
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-[97%] flex items-center justify-end gap-5 mt-8 mb-5">
        <button className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium ">
          Back
        </button>
        <Button
          onClick={reviewHotspots}
          width="170px"
          height="40px"
          fontSize="14px"
          padding="5px"
          borderRadius="30px"
        >
          Review Trends
        </Button>
        <Button
          onClick={reviewHotspots}
          width="190px"
          height="40px"
          fontSize="14px"
          padding="5px"
          borderRadius="30px"
        >
          Optimize Strategy
        </Button>
      </div>
    </>
  );
};

export default Diagnostics;
