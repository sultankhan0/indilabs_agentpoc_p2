import React from "react";
import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";

type Props = {
  selectedSegment: string;
  
};
const AllocationStackedBarChart: React.FC<Props> = (props) => {
  const state: any = {
    series: {
      VHR: [
        {
          name: "Bucket Slope",
          data: [0, 0, 0, 6, 0],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [0, 0, 8, 14, 4],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [7, 13, 12, 10, 11],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [15, 14, 7, 0, 10],
          color: "#ED7D31",
        },
        {
          name: "Bucket Slope",
          data: [8, 3, 3, 0, 5],
          color: "#FF0000",
        },
        
      ],
      HR: [
        {
          name: "Bucket Slope",
          data: [0, 0, 0, 0, 0],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [53, 32, 33, 52, 13],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [9, 7, 5, 8, 6],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [12, 17, 11, 9, 15],
          color: "#ED7D31",
        },
        {
          name: "Bucket Slope",
          data: [44, 55, 41, 37, 22],
          color: "#FF0000",
        },
      ],
      MR: [
        {
          name: "Bucket Slope",
          data: [0, 0, 0, 0, 0],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [8, 12, 0, 0, 0],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [11, 7, 19, 0, 0],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [8, 8, 8, 0, 0],
          color: "#ED7D31",
        },
        {
          name: "Bucket Slope",
          data: [3, 3, 3, 0, 0],
          color: "#FF0000",
        },
      ],
      // [
      //   {
      //     name: "Marine Sprite",
      //     data: [44, 55, 41, 37, 22],
      //     color: "#00B050",
      //   },
      //   {
      //     name: "Striking Calf",
      //     data: [53, 32, 33, 52, 13],
      //     color: "#7030A0",
      //   },
      //   {
      //     name: "Tank Picture",
      //     data: [44, 55, 41, 37, 22],
      //     color: "#ED7D31",
      //   },
      //   {
      //     name: "Bucket Slope",
      //     data: [9, 7, 5, 8, 6],
      //     color: "#FF0000",
      //   },
      // ],
      LR: [
        {
          name: "Bucket Slope",
          data: [0, 0, 0, 0, 0],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [12, 17, 11, 9, 15],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [44, 55, 41, 37, 22],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [12, 17, 11, 9, 15],
          color: "#ED7D31",
        },
        {
          name: "Bucket Slope",
          data: [9, 7, 5, 8, 6],
          color: "#FF0000",
        },
      ],
      "H Bal": [
        {
          name: "Bucket Slope",
          data: [0, 0, 0, 0, 0],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [44, 55, 41, 37, 22],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [53, 32, 33, 52, 13],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [12, 17, 11, 9, 15],
          color: "#ED7D31",
        },
        {
          name: "Bucket Slope",
          data: [9, 7, 5, 8, 6],
          color: "#FF0000",
        },
      ],
    },
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "90%",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '55%',
          // distributed: true,
          // dataLabels: {
          //   enabled: true, // Disable data labels on bars
          //   style:{
          //     colors: ['#000000'],
          //     fontSize: "30px",
          //   }
          // },
        },
      },
      dataLabels: {
        enabled: false
      },

      stroke: {
        width: 1,
        colors: ["#7f7f7f"],
      },
      title: {
        text: "",
      },
      xaxis: {
        type: 'numeric',
        categories: [0, 5, 10, 15, 20, 25],
        labels: {
          formatter: (val: number) => (Math.round(val).toString()),
        },
        tickAmount: 6, // Adjust the number of ticks as needed
        min: 0, // Set the minimum value
        max: 30, // Set the maximum value
      },
      tooltip: {
        y: {
          formatter: (val: number) => {
            return val + "K";
          },
        },
      },
      yaxis: {
        show: false,
        formatter: (val: number) => {
          return val + 5;
        }, // Hide the vertical axis
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
    // colors: ['#00B050', '#7030A0', '#ED7D31', '#FF0000']
  };

  (state.options.chart as any).type = "bar";

  useEffect(() => {
    // Hide the menu icon after the chart is rendered
    const menuIcon = document.querySelector(
      ".apexcharts-menu-icon"
    ) as HTMLElement;
    if (menuIcon) {
      menuIcon.style.display = "none";
    }
  });

  return (
    <div id="chart" className="min-w-[300px] w-[100%]  xl:w-[53%] 2xl:w-[60%] bg-white border-2 p-3 rounded-xl overflow-x-auto">
      <div className="flex justify-between items-start ml-3 mr-5">
        <h1 className="text-[18px] font-['calibri' !important] font-[400] mr-2 ">
          Treatments {props.selectedSegment==='MR' && <span className="border-2 bg-violet-300 rounded-md ml-2 pl-2 pr-2">MR</span>}
        </h1>
        <div className="flex items-center gap-1 flex-wrap">
          <button
            type="button"
            className="text-[#7F7F7F] font-['calibri' !important] border-[#D9D9D9]  border-2 pl-3 pr-3 rounded"
          >
            HOLD
          </button>
          <button
            type="button"
            className="text-[#FFFFFF] bg-[#00B050] border-[#D9D9D9]   font-['calibri' !important] border-2 pl-3 pr-3 rounded"
          >
            MESSAGE
          </button>
          <button
            type="button"
            className="text-[#FFFFFF] bg-[#7030A0] border-[#D9D9D9]   font-['calibri' !important] border-2 pl-3 pr-3 rounded"
          >
            CALL
          </button>
          <button
            type="button"
            className="text-[#FFFFFF] bg-[#ED7D31] border-[#D9D9D9]   font-['calibri' !important] border-2 pl-3 pr-3 rounded"
          >
            AGENCY
          </button>
          <button
            type="button"
            className="text-[#FFFFFF] bg-[#FF0000] border-[#D9D9D9]   font-['calibri' !important] border-2 pl-3 pr-3 rounded"
          >
            LEGAL
          </button>
        </div>
      </div>
      <div className="w-[100%] flex flex-col sm:flex-row items-start justify-start">
        {props.selectedSegment === 'MR' && <table cellPadding={13} className="w-[90%] sm:w-[30%] mt-9">
           <tbody>
            <tr className="h-[54px] border-b-2 font-['calibri' !important] font-[400] text-[18px]">
              <td>Champion</td>
              <td>80%</td>
            </tr>
            <tr className="h-[66px] border-b-2 font-['calibri' !important] font-[400] text-[18px]">
              <td>Challenger 1</td>
              <td>10%</td>
            </tr>
            <tr className="h-[68px] border-b-2 font-['calibri' !important] font-[400] text-[18px]">
              <td>Challenger 2</td>
              <td>10%</td>
            </tr>
           </tbody>
        </table>}
        <div className={`-ml-0 -mt-3 ${props.selectedSegment==='MR'? 'w-[100%] sm:w-[70%] -ml-4':"w-[100%]"} `}>
      <ReactApexChart
        options={state.options as any}
        series={state.series[props.selectedSegment]}
        type="bar"
        height={401}
        
      />
      </div>
      </div>
    </div>
  );
};

export default AllocationStackedBarChart;
