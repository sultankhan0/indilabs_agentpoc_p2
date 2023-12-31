import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {useEffect} from 'react'

const SequenceAttributes: React.FC = () => {


  return (
    <div id="chart" className="w-[55%] flex flex-col bg-white border-2 p-3 rounded-xl gap-3">
       <div className="flex items-center gap-10">
          <p className="w-[70px] text-[19px] font-['calibri' !important] font-[400]">Sequence</p>
          <div className="flex items-center gap-5">
             <button type="button" className="w-[70px] border-2 rounded-md text-[#7f7f7f] font-['calibri' !important]  pt-1 pb-1">01</button>
             <div className="flex items-center gap-2">
                <p className="text-[19px] font-['calibri' !important] font-[400]">Start Pos.</p>
                <button type="button" className="w-[70px] border-2 rounded-md text-[#7f7f7f] font-['calibri' !important]  pt-1 pb-1">1</button>
             </div>
             <div className="flex items-center gap-2">
                <p className="text-[19px] font-['calibri' !important] font-[400]">End Pos.</p>
                <button type="button" className="w-[70px] border-2 rounded-md text-[#7f7f7f] font-['calibri' !important]  pt-1 pb-1">6</button>
             </div>
          </div>
       </div>
       <div className="flex items-center gap-10">
          <p className="w-[70px] text-[19px] font-['calibri' !important] font-[400]">Attributes:</p>
          <div className="flex items-center gap-1">
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4 pt-1 pb-1">Cycle</button>
             <button type="button" className=" border-2 rounded-md bg-violet-300  text-white font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Risk tier</button>
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">MOB</button>
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Channels</button>
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Income</button>
          </div>
       </div>
       <div className="flex items-center gap-10">
          <p className="w-[70px] text-[19px] font-['calibri' !important] font-[400]">Action:</p>
          <div className="flex items-center gap-1">
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4 pt-1 pb-1">HOLD</button>
             <button type="button" className=" border-2 rounded-md bg-green-600  text-white font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">MESSAGE</button>
             <button type="button" className=" border-2 rounded-md bg-violet-800 text-white font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">CALL</button>
             <button type="button" className=" border-2 rounded-md bg-orange-500 text-white font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">AGENCY</button>
             <button type="button" className=" border-2 rounded-md bg-red-600 text-white font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">LEGAL</button>
          </div>
       </div>
       <div className="flex items-center gap-10">
          <p className="w-[70px] text-[19px] font-['calibri' !important] font-[400]">Intensity::</p>
          <div className="flex items-center gap-1">
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4 pt-1 pb-1">1x</button>
             <button type="button" className=" border-2 rounded-md bg-violet-300  text-white font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">2x</button>
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">3x</button>
             
          </div>
          
       </div>
       <div className="flex items-center gap-10">
          <p className="w-[70px] text-[19px] font-['calibri' !important] font-[400]">Tone:</p>
          <div className="flex items-center gap-1">
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4 pt-1 pb-1">Reminder</button>
             <button type="button" className=" border-2 rounded-md   text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Urgent</button>
             <button type="button" className=" border-2 rounded-md  text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Warning</button>
             <button type="button" className=" border-2 rounded-md  text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Offer</button>
            
          </div>
       </div>
       <div className="flex items-center gap-10">
          <p className="w-[70px] text-[19px] font-['calibri' !important] font-[400]">Offer:</p>
          <div className="flex items-center gap-1">
             <button type="button" className=" border-2 bg-violet-300 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4 pt-1 pb-1">IW</button>
             <button type="button" className=" border-2 bg-violet-300 rounded-md   text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">FW</button>
             <button type="button" className=" border-2 rounded-md  text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">RPP</button>
             <button type="button" className=" border-2 rounded-md  text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">PH</button>
             <button type="button" className=" border-2 bg-violet-300 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4 pt-1 pb-1">Consol</button>
             <button type="button" className=" border-2 rounded-md   text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Restr</button>
             <button type="button" className=" border-2 rounded-md  text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">PartSet</button>
             <button type="button" className=" border-2 bg-violet-300 rounded-md  text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">FFS</button>
             <button type="button" className=" border-2 rounded-md  text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Regl</button>
          </div>
       </div>
    </div>    
  );
};

export default SequenceAttributes;
