import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {useEffect} from 'react'

const AllocationStackedBarChart: React.FC = () => {

    

  const state = {
    series: [
      {
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22],
      },
      {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13],
      },
      {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15],
      },
      {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6],
      },
    //   {
    //     name: 'Reborn Kid',
    //     data: [25, 12, 19, 32, 25],
    //   },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            enabled: false, // Disable data labels on bars
          },
          

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
        categories: [2008, 2009, 2010, 2011, 2012],
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
    const menuIcon = document.querySelector(".apexcharts-menu-icon") as HTMLElement;
    if (menuIcon) {
      menuIcon.style.display = "none";
    }
  }, []);


  return (
    <div id="chart" className="w-[60%] bg-white border-2 p-3 rounded-xl">
        <div className="flex justify-between items-center ml-3 mr-5">
            <h1 className="text-[22px] font-[calibri] font-[500]">Treatments</h1>
            <div className="flex items-center gap-1">
                <button type="button" className="text-gray-500 border-2 pl-3 pr-3 rounded">HOLD</button>
                <button type="button" className="text-white bg-green-500 border-2 pl-3 pr-3 rounded">MESSAGE</button>
                <button type="button" className="text-white bg-violet-800 border-2 pl-3 pr-3 rounded">CALL</button>
                <button type="button" className="text-white bg-orange-500 border-2 pl-3 pr-3 rounded">AGENCY</button>
                <button type="button" className="text-white bg-red-600 border-2 pl-3 pr-3 rounded">LEGAL</button>

            </div>
        </div>
      {/* <ReactApexChart options={state.options} series={state.series} type="bar" height={350} /> */}
      <ReactApexChart options={state.options as any} series={state.series} type="bar" height={350} />
    </div>
  );
};

export default AllocationStackedBarChart;
