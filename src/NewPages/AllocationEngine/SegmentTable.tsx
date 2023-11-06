
import React from 'react';
import { useEffect, useState } from "react";
import { AiOutlineDown } from 'react-icons/ai'
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
    </div>
  );
}

export default SegmentTable;
