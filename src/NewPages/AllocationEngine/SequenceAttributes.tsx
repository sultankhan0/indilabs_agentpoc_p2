import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {useEffect} from 'react'

const SequenceAttributes: React.FC = () => {


  return (
   <div className="flex flex-col">
    <div id="chart" className=" flex flex-col bg-white border-2 p-3 rounded-xl gap-3">
       <div className="flex items-center gap-10">
          <p className="w-[70px] text-[19px] font-['calibri' !important] text-[#000000] font-[400]">Sequence</p>
          <div className="flex items-center gap-5">
             <input type="text" className="w-[70px] border rounded-md text-[#7f7f7f] font-['calibri' !important] border-[#7f7f7f]  pt-1 pb-1 text-center" placeholder='01'/>
             <div className="flex items-center gap-2">
                <p className="text-[19px] font-['calibri' !important] font-[400] text-[#000000] ">Start Pos.</p>
                <input type="text" className="w-[70px] border rounded-md text-[#7f7f7f] border-[#7f7f7f] font-['calibri' !important]  pt-1 pb-1 text-center" placeholder='1'/>
             </div>
             <div className="flex items-center gap-2">
                <p className="text-[19px] font-['calibri' !important] font-[400] text-[#000000] ">End Pos.</p>
                <input type="text" className="w-[70px] border rounded-md text-[#7f7f7f] border-[#7f7f7f] font-['calibri' !important]  pt-1 pb-1 text-center" placeholder='1'/>
             </div>
          </div>
       </div>
       <div className="flex items-center gap-10">
          <p className="w-[70px] text-[19px] font-['calibri' !important] font-[400] text-[#000000] ">Attributes:</p>
          <div className="flex items-center gap-1">
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4 pt-1 pb-1">Cycle</button>
             <button type="button" className=" border-2 rounded-md bg-[#A090D5]  text-white font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Risk tier</button>
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">MOB</button>
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Channels</button>
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Income</button>
          </div>
       </div>
       <div className="flex items-center gap-10">
          <p className="w-[70px] text-[19px] font-['calibri' !important] font-[400] text-[#000000] ">Action:</p>
          <div className="flex items-center gap-1">
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4 pt-1 pb-1">HOLD</button>
             <button type="button" className=" border-2 rounded-md bg-[#00B050]  text-white font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">MESSAGE</button>
             <button type="button" className=" border-2 rounded-md bg-[#7030A0] text-white font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">CALL</button>
             <button type="button" className=" border-2 rounded-md bg-[#ED7D31] text-white font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">AGENCY</button>
             <button type="button" className=" border-2 rounded-md bg-[#FF0000] text-white font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">LEGAL</button>
          </div>
       </div>
       <div className="flex items-center gap-10">
          <p className="w-[70px] text-[19px] font-['calibri' !important] font-[400] text-[#000000] ">Intensity::</p>
          <div className="flex items-center gap-1">
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4 pt-1 pb-1">1x</button>
             <button type="button" className=" border-2 rounded-md bg-[#A090D5]  text-white font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">2x</button>
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">3x</button>
             
          </div>
          
       </div>
       <div className="flex items-center gap-10">
          <p className="w-[70px] text-[19px] font-['calibri' !important] font-[400] text-[#000000] ">Tone:</p>
          <div className="flex items-center gap-1">
             <button type="button" className=" border-2 rounded-md text-black font-['calibri' !important] font-[400] pl-4 pr-4 pt-1 pb-1">Reminder</button>
             <button type="button" className=" border-2 rounded-md   text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Urgent</button>
             <button type="button" className=" border-2 rounded-md  text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Warning</button>
             <button type="button" className=" border-2 rounded-md  text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Offer</button>
            
          </div>
       </div>
       <div className="flex items-center gap-10">
          <p className="w-[70px] text-[19px] font-['calibri' !important] font-[400] text-[#000000] ">Offer:</p>
          <div className="flex items-center gap-1">
             <button type="button" className=" border-2 bg-[#A090D5] rounded-md text-white font-['calibri' !important] font-[400] pl-4 pr-4 pt-1 pb-1">IW</button>
             <button type="button" className=" border-2 bg-[#A090D5] rounded-md   text-white font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">FW</button>
             <button type="button" className=" border-2 rounded-md  text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">RPP</button>
             <button type="button" className=" border-2 rounded-md  text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">PH</button>
             <button type="button" className=" border-2 bg-[#A090D5] rounded-md text-white font-['calibri' !important] font-[400] pl-4 pr-4 pt-1 pb-1">Consol</button>
             <button type="button" className=" border-2 rounded-md   text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Restr</button>
             <button type="button" className=" border-2 rounded-md  text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">PartSet</button>
             <button type="button" className=" border-2 bg-[#A090D5] rounded-md  text-white font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">FFS</button>
             <button type="button" className=" border-2 rounded-md  text-black font-['calibri' !important] font-[400] pl-4 pr-4  pt-1 pb-1">Regl</button>
          </div>
       </div>
    </div> 
    <button type="button" className="w-[90px] rounded-md font-[500] pt-1 pb-1 bg-violet-300 border text-[13px] font-['calibri' !important] self-end mt-1">Apply</button>
    </div>   
  );
};

export default SequenceAttributes;
