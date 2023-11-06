import React from "react";
import { useEffect, useState } from "react";
// import Sidebar from "../../components/common/Sidebar";


const SegVolumeBadTable: React.FC = () => {

  const [activeData, setActiveData] = useState(1);

  const tableData = [
    {
      segment: 'VHR',
      volume: '5,000',
      Bad: '16%',
      id:1
    },
    {
      segment: 'HR',
      volume: '11,000',
      Bad: '9%',
      id:2
    },
    {
      segment: 'MR',
      volume: '65,000',
      Bad: '4%',
      id:3
    },
    {
      segment: 'LR',
      volume: '90,000',
      Bad: '1.2%',
      id:4
    },
    {
      segment: 'H Bal',
      volume: '1,700',
      Bad: '3.5%',
      id:5
    },  
    
  ];





  return (
    <div className="w-[24.5%] bg-white rounded-xl border-2 ml-10">
      <table cellPadding={20}>
      <thead>
        <tr>
            <th className="font-[calibri] font-[500] text-[20px]">Segment</th>
            <th className="font-[calibri] font-[500] text-[20px]">Volume</th>
            <th className="font-[calibri] font-[500] text-[20px]">Bad%</th>
        </tr>
      </thead>
      <tbody className="w-full">
        {tableData.map(each=>(
          <tr onClick={()=>{setActiveData(each.id)}}
          // className="text-center font-[calibri] font-[500] text-[19px] border-b-2"
          className={` text-center font-[calibri] font-[500] text-[19px] border-b-2  ${
            each.id === activeData &&
            ` bg-violet-200`
          } cursor-pointer `}
          >
            <td>{each.segment}</td>
            <td>{each.volume}</td>
            <td>{each.Bad}</td>
          </tr>
        ))}
            
          </tbody>
      </table>
    </div>
  );
};

export default SegVolumeBadTable;

