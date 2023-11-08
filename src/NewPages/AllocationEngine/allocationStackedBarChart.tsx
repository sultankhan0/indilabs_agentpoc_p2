import React from "react";
import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";

const AllocationStackedBarChart: React.FC = () => {
  const state = {
    series: [
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
      //   {
      //     name: 'Reborn Kid',
      //     data: [25, 12, 19, 32, 25],
      //   },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          // distributed: true,
          dataLabels: {
            enabled: false, // Disable data labels on bars
          },
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      title: {
        text: "",
      },
      xaxis: {
         categories: ["","","","",""],
      },
      tooltip: {
        y: {
          formatter: (val: number) => {
            return val + "K";
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
  }, []);

  return (
    <div id="chart" className="w-[60%] bg-white border-2 p-3 rounded-xl">
      <div className="flex justify-between items-center ml-3 mr-5">
        <h1 className="text-[18px] font-['calibri' !important] font-[400] ">
          Treatments
        </h1>
        <div className="flex items-center gap-1">
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
      {/* <ReactApexChart options={state.options} series={state.series} type="bar" height={350} /> */}
      <ReactApexChart
        options={state.options as any}
        series={state.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default AllocationStackedBarChart;
