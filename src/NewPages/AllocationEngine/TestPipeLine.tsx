import React from "react";
// import Sidebar from "../../components/common/Sidebar";


const TestPipeLine: React.FC = () => {
  return (
    <div className="w-[30%] bg-white rounded-xl p-3 ml-2 border-2">
        <h1 className="text-[16px] font-[500]">Test Pipeline</h1>
       <table className="-ml-3" cellPadding={15}>
      <thead >
        <tr >
            <th className="text-[16px] font-[500] text-start">Test ID</th>
            <th className="text-[16px] font-[500] text-start">Start</th>
            <th className="text-[16px] font-[500] text-start">Volume</th>
            <th className="text-[16px] font-[500] text-start">KPI 1</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td className="text-[16px] font-[500] text-start">Champion</td>
            <td className="text-[16px] font-[500] text-start">01 Apr 22</td>
            <td className="text-[16px] font-[500] text-start">52,000</td>
            <td className="text-[16px] font-[500] text-start">20%</td>
        </tr>
        <tr>
            <td className="text-[16px] font-[500] text-start">Challenger 1</td>
            <td className="text-[16px] font-[500] text-start">24 AUG 23</td>
            <td className="text-[16px] font-[500] text-start">6,500</td>
            <td className="text-[16px] font-[500] text-start">18%</td>
        </tr>
        <tr>
            <td className="text-[16px] font-[500] text-start">Challenger 2</td>
            <td className="text-[16px] font-[500] text-start">20 SEP 22</td>
            <td className="text-[16px] font-[500] text-start">6,5000</td>
            <td className="text-[16px] font-[500] text-start">23%</td>
        </tr>
      </tbody>
      </table>
    </div>
  );
};

export default TestPipeLine;

