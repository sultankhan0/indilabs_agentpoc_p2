
import React from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  {
    subject: 'Entry $',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Liquidation Rate',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: '$Collected',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Residual Risk',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Cost',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  
];

export default function Performance() {
  return (
    <div className="w-[35%] bg-white rounded-xl border-2">
        <div className="flex items-center justify-between p-4">
        <h1 className="text-[20px] font-[500] font-[calibri] ">Performance</h1>
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
            <div className="w-[25px] h-[10px] bg-[#8EB5F5] border rounded-xl"></div>
            <div className="text-[13px] font-[calibri]">Champion</div>
            </div>
            <div className="flex items-center gap-2">
            <div className="w-[25px] h-[10px] bg-[#A090D5] border rounded-xl"></div>
            <div className="text-[13px] font-[calibri]">Challenger</div>
            </div>
        </div>
        </div>
        
    <RadarChart cx={300} cy={250} outerRadius={100} width={500} height={400} data={data} className="-mt-[100px] -ml-[90px]">
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" tick={{ fontSize: 14, fill: '#000',fontFamily:'calibri' }} />
      {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}
      <Radar name="Mike" dataKey="A" stroke="#8FC1F5" fill="#8FC1F5" fillOpacity={0.6} dot={true} />
      <Radar name="Lily" dataKey="B" stroke="#826CD6" fill="#826CD6" fillOpacity={0.4} dot={true} />
      {/* <Legend /> */}
    </RadarChart>
    </div>
  );
}
