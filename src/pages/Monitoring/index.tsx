import React from "react";
// import Sidebar from "../../components/common/Sidebar";
import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
import RiskMonitoringExpanded from "../../components/Monitoring/RiskMoniteringExpanded";
import Button from "../../components/Button";
import ImpactAssessment from "../../components/Monitoring/ImpactAssessment";

const downloadReports = () => {};

const runDiagnostics = () => {};

const Monitoring: React.FC = () => {
  return (
    <div className="CommonBodyWrap">
      <div className="px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb]">
        <DashboardHeader />
      </div>
      <div className="flex flex-wrap  items-start  justify-center  px-[6px] lg:px-[59px]  bg-[#fafafb]" >
        <div className=" w-full flex items-start gap-4 justify-start flex-wrap">
          <RiskMonitoringExpanded />
          <ImpactAssessment />
        </div>
        <div className="w-full flex items-center justify-end gap-3 mt-8 mb-8">
          <button className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium ">
            Back
          </button>
          <Button
            onClick={downloadReports}
            width="200px"
            height="40px"
            fontSize="14px"
            padding="5px"
            borderRadius="30px"
          >
            Download Reports
          </Button>
          <Button
            onClick={runDiagnostics}
            width="200px"
            height="40px"
            fontSize="14px"
            padding="5px"
            borderRadius="30px"
          >
            Run Diagnostics
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
