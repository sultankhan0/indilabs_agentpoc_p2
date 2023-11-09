import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from "recharts";

const data = [
  {
    name: "Page E",
    uv: -1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: -3800,
    amt: 2500
  },
];

const PLImpactChart: React.FC = () =>{ 


return(
 <div className="min-w-[280px] w-[100%] md:w-[47%] xl:w-[27%] flex flex-col items-start gap-10 p-2 bg-white border-2 rounded-xl overflow-x-auto">
    <h1 className="ml-5 text-[19px] font-['calibri' !important] text-[#000000] font-[400]">P&L Impact (Incremental)</h1>
  <BarChart
    width={350}
    height={300}
    data={data}
    stackOffset="sign"
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
    
  >
    <CartesianGrid strokeDasharray="1 1" />
    {/* <XAxis dataKey="name" /> */}
    <YAxis />
    <Tooltip />
    {/* <Legend /> */}
    <ReferenceLine y={0} stroke="#000" />
    <Bar dataKey="pv" fill="green" stackId="stack" />
    <Bar dataKey="uv" fill="red" stackId="stack" />
  </BarChart>
  </div>
)
};

export default PLImpactChart;
