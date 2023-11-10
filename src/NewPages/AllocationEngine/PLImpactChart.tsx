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
    pv: 6200,
    amt: 2181
  },
  {
    name: "Page F",
    uv: -2300,
    pv: 4090,
    amt: 2500
  },
];

const CustomBar = (props:any) => {
  const { x, y, width, height, fill, color } = props;

  const cornerRadius = color === "#00B050" && "#FF0000" ? 15 : 0;

  let path = `M${x},${y + height}`;
  path += `v${-height + cornerRadius}`;
  path += `a${cornerRadius},${cornerRadius} 0 0 1 ${cornerRadius},${-cornerRadius}`;
  path += `h${width - 2 * cornerRadius}`;
  path += `a${cornerRadius},${cornerRadius} 0 0 1 ${cornerRadius},${cornerRadius}`;
  path += `v${height - cornerRadius}`;

  return <path d={path} fill={fill} />;
};

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
    <Bar dataKey="pv" fill="#00B050" stackId="stack" shape={<CustomBar color="#00B050" />} />
    <Bar dataKey="uv" fill="#FF0000" stackId="stack" shape={<CustomBar color="#FF0000" />}  />
  </BarChart>
  </div>
)
};

export default PLImpactChart;
