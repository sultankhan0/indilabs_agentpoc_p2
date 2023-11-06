
import React from 'react';
import { useEffect, useState } from "react";
import { AiOutlineDown } from 'react-icons/ai'
import { HiPlus } from 'react-icons/hi'
import AllocationStackedBarChart from './allocationStackedBarChart';
import ReactApexChart from 'react-apexcharts';


type Props = {};

function SegmentTable({}: Props) {

  const [activeData, setActiveData] = useState(1);

  const tableData = [
    {
      segment: 'Champion',
      volume: '80%',
      Bad: '16%',
      id:1
    },
    {
      segment: 'Challenger 1',
      volume: '10%',
      Bad: '9%',
      id:2
    },
    {
      segment: 'Challenger 2',
      volume: '10%',
      Bad: '4%',
      id:3
    }, 
  ];


  const state = {
    series: [
      {
        name: 'Treatments',
        data: [
          {
            x: 'HOLD',
            y: [44, 55, 41, 37, 22],
            fillColor: '#E57373', // Color for HOLD
          },
          // {
          //   x: 'Striking Calf',
          //   y: [53, 32, 33, 52, 13],
          //   fillColor:'red'
          // },
        ],
      },
    ],
    options: {
      chart: {
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            enabled: false, // Disable data labels on bars
          },
          barHeight: 20,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      title: {
        text: '',
      },
      xaxis: {
        categories: ['Treatments'],
        
      },
      tooltip: {
        y: {
          formatter: (val: number) => {
            return val + 'K';
          },
        },
      },
      fill: {
        opacity: 1,
        pattern: {
          style: ['solid'],
        },
      },
      legend: {
        show: false,
      },
      menu: {
        show: false,
      },
    },
  };

  (state.options.chart as any).type = 'bar';

  useEffect(() => {
    // Hide the menu icon after the chart is rendered
    const menuIcon = document.querySelector('.apexcharts-menu-icon') as HTMLElement;
    if (menuIcon) {
      menuIcon.style.display = 'none';
    }
  }, []);

  const tableNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]




  return (
    // <div>
    //   <table className="w-300 table-auto">
    //     <thead>
    //       <tr>
    //         <th className="px-4 py-2">Segment</th>
    //         <th className="px-4 py-2">Volume</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td className="px-4 py-2">Champion</td>
    //         <td className="px-4 py-2">
    //           <div className="flex items-center">
                
    //             <span className="ml-1">80%</span>
    //           </div>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td className="px-4 py-2">Challenger1</td>
    //         <td className="px-4 py-2">
    //           <div className="flex items-center">
               
    //             <span className="ml-1">20%</span>
    //           </div>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td className="px-4 py-2">Challenger1</td>
    //         <td className="px-4 py-2">
    //           <div className="flex items-center">
               
    //             <span className="ml-1">20%</span>
    //           </div>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
    <div className="w-[95%] bg-white rounded ml-6">
      <table className='w-[100%] border' cellPadding={10}>
      <thead>
        <tr>
            <th className="w-[10%] font-[calibri] font-[500] text-[20px] border">Segment</th>
            <th className="w-[10%] font-[calibri] font-[500] text-[20px] border">Volume</th>
            <th className="font-[calibri] font-[500] text-[20px] border flex items-center gap-3">
              <p>Treatments</p>
              <button className=" w-[100px] border-2 rounded bg-violet-300 flex items-center justify-center gap-2">MR <span><AiOutlineDown/></span></button>
              </th>
        </tr>
      </thead>
      <tbody className="w-full">
        {tableData.map(each=>(
          <tr
          // className="text-center font-[calibri] font-[500] text-[19px] border-b-2"
          className='text-center font-[calibri] font-[500] text-[19px] border-2'   
          >
            <td className="border">{each.segment}</td>
            <td className="border">{each.volume}</td>
            {/* <td><ReactApexChart options={state.options as any} series={state.series} type="bar" height={350} /></td> */}
          </tr>
        ))}
            
          </tbody>
      </table>
      {/* <div className="w-[100%] flex items-center">
         <div className="w-[20%] flex items-center gap-1 border-2 ">
           <HiPlus className="text-violet-800" size={35}/>
           <button type='button' className="w-[90%] p-1 border-2 rounded font-['calibri' !important] font-[400] text-gray-500">Add/Edit</button>
         </div>
         <table className="w-[80%]" cellPadding={5}>
           <tbody>
             <tr className="border-2">
              {tableNumber.map(each=>(
                <td className="border-2 text-center font-['calibri' !1important] font-[500s]">{each}</td>
              ))}
             </tr>
             
           </tbody>
         </table>
      </div> */}
      
    </div>
  );
}

export default SegmentTable;
