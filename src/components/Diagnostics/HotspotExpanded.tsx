import React from "react";

import { IoIosArrowForward, IoMdArrowDropup } from "react-icons/io";

type Props = {
  setDignostic?:any
};

const HotspotExpanded = ({setDignostic}:Props) => {
  return (
    <div className="w-full  p-3 bg-white rounded-xl shadow flex-col justify-start items-start inline-flex">
      <div className="self-stretch grow shrink basis-0 bg-white rounded-xl flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-black text-base font-semibold font-['DM Sans']">Hotspots</div>
          <div className="px-3 py-1 rounded-[100px] justify-center items-center gap-1 flex">
            <div className="px-1 justify-center items-center flex">
              {/* <div className="text-center text-slate-500 text-xs font-medium leading-tight tracking-tight">
                Review
              </div> */}
            </div>
            <div className="w-[18px] h-[18px] relative" />
          </div>
        </div>
        <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start gap-0.5 flex">
          <div className="w-[100%] self-stretch px-3 py-5 rounded-lg justify-between items-center gap-10 flex" onClick={()=>setDignostic(true) }>
            <div className="text-black text-base font-medium font-['DM Sans']">Entry %</div>
            <div className="w-[70%] flex-col justify-center items-start inline-flex">
              <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                <div className="justify-start items-start gap-9 flex">
                  <div className="text-black text-sm font-medium font-['DM Sans']">6%</div>
                  <div className="text-black text-sm font-medium relative font-['DM Sans']">4.2%
                  <IoMdArrowDropup
                      className="text text-xs absolute -bottom-6.5  left-1/2 transform -translate-x-1/2"
                      style={{
                        width: "20px",
                        height: "25px",
                      }}
                    />
                  </div>
                  
                </div>
                <div className="text-black text-sm font-medium font-['DM Sans']">3%</div>
              </div>
              <div className="w-full h-[18px] relative">
                <div className="w-[100%] h-2 left-[-0.50px] top-0 absolute  bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />
              </div>
            </div>
          </div>
          <hr className="w-[100%]"/>
          <div className="w-[100%] self-stretch px-3 py-5 rounded-lg  justify-between items-center gap-10 flex" onClick={()=>setDignostic(true) }>
            <div className=" text-black text-base font-medium font-['DM Sans']">2+ %</div>
            <div className="w-[70%] flex-col justify-center items-start inline-flex">
              <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                <div className="justify-start items-start gap-3.5 flex">
                  <div className="text-black text-sm font-medium font-['DM Sans']">7%</div>
                  <div className="text-black text-sm font-medium font-['DM Sans']">5.3% <IoMdArrowDropup
                      className="text text-xs absolute -bottom-6.5  left-1/3s transform -translate-x-1/2"
                      style={{
                        width: "20px",
                        height: "25px",
                      }}
                    />
                     
                  </div>
                </div>
                <div className="text-black text-sm font-medium font-['DM Sans']">3%</div>
              </div>
              <div className="w-full h-[18px] relative">
                <div className="w-full h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />
              </div>
            </div>
          </div>
          <hr className="w-[100%]"/>

          <div className="w-[100%] self-stretch px-3 py-5 rounded-lg  justify-between items-center gap-10 flex" onClick={()=>setDignostic(true) }>
            <div className=" text-black text-base font-medium font-['DM Sans']">1-2%</div>
            <div className="w-[70%] flex-col justify-center items-start inline-flex">
              <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                <div className="justify-start items-start gap-3.5 flex">
                  <div className="text-black text-sm font-medium font-['DM Sans']">42%</div>
                  <div className="text-black text-sm font-medium font-['DM Sans']">38%
                  <IoMdArrowDropup
                      className="text text-xs absolute -bottom-6.5  left-1/3 transform -translate-x-1/2"
                      style={{
                        width: "20px",
                        height: "25px",
                      }}
                    />
                  </div>
                </div>
                <div className="text-black text-sm font-medium font-['DM Sans']">20%</div>
              </div>
              <div className="w-full h-[18px] relative">
                <div className="w-full h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />
              </div>
            </div>
          </div>
          <hr className="w-[100%]"/>
          <div className="w-[100%] self-stretch px-3 py-5 rounded-lg  justify-between items-center gap-10 flex" onClick={()=>setDignostic(true) }>
            <div className=" text-black text-base font-medium font-['DM Sans']">Bkt3</div>
            <div className="w-[70%] flex-col justify-center items-start inline-flex">
              <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                <div className="justify-start items-start gap-[47px] flex">
                  <div className="text-black text-sm font-medium font-['DM Sans']">350</div>
                  <div className="text-black text-sm font-medium font-['DM Sans']">310
                  <IoMdArrowDropup
                      className="text text-xs absolute -bottom-6.5  left-75% transform -translate-x-1/2"
                      style={{
                        width: "20px",
                        height: "25px",
                      }}
                    />
                  </div>
                </div>
                <div className="text-black text-sm font-medium font-['DM Sans']">250</div>
              </div>
              <div className="w-full h-[18px] relative">
                <div className="w-full h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />
              </div>
            </div>
          </div>
          <hr className="w-[100%]"/>
          <div className="w-[100%] self-stretch px-3 py-5 rounded-lg  justify-between items-center gap-10 flex" onClick={()=>setDignostic(true) }>
            <div className=" text-black text-base font-medium font-['DM Sans']">RPC %</div>
            <div className="w-[70%] flex-col justify-center items-start inline-flex">
              <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                <div className="justify-start items-start gap-[30px] flex">
                  <div className="text-black text-sm font-medium font-['DM Sans']">8%</div>
                  <div className="text-black text-sm font-medium font-['DM Sans']">10%
                  <IoMdArrowDropup
                      className="text text-xs absolute -bottom-6.5  left-1/3 transform -translate-x-1/2"
                      style={{
                        width: "20px",
                        height: "25px",
                      }}
                    />
                  </div>
                </div>
                <div className="text-black text-sm font-medium font-['DM Sans']">15%</div>
              </div>
              <div className="w-full h-[18px] relative">
                <div className="w-full h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotspotExpanded;
