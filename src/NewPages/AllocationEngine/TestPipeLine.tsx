import React from "react";
// import Sidebar from "../../components/common/Sidebar";


const TestPipeLine: React.FC = () => {
  return (
    <div className="w-[33%] bg-white rounded-xl p-3 ml-2 border-2">
        <h1 className="text-[16px] font-['calibri' !important] text-[#000000] font-[500]">Test Pipeline</h1>
       <table className="-ml-3" cellPadding={15}>
      <thead >
        <tr >
            <th className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] ">Test ID</th>
            <th className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] text-center ">Start</th>
            <th className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] ">Volume</th>
            <th className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] ">KPI 1</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] ">Champion</td>
            <td className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] ">01 Apr 22</td>
            <td className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] ">52,000</td>
            <td className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] ">20%</td>
        </tr>
        <tr>
            <td className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] ">Challenger 1</td>
            <td className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] ">24 AUG 23</td>
            <td className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] ">6,500</td>
            <td className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] ">18%</td>
        </tr>
        <tr>
            <td className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] ">Challenger 2</td>
            <td className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] ">20 SEP 22</td>
            <td className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] ">6,5000</td>
            <td className="text-[16px] font-[500] text-start font-['calibri' !important] text-[#000000] ">23%</td>
        </tr>
      </tbody>
      </table>
    </div>
  );
};

export default TestPipeLine;

