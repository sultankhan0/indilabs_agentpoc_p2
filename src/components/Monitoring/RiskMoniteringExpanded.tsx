import React from "react";
import GraphIcon from "../../assets/icons/Harvey Graph Balls.svg";
import FrameIcon from "../../assets/icons/Frame 214.svg";

type Props = {};

function RiskMonitoringExpanded({ }: Props) {
  return (
    <>
      <div className="w-[100%] mt-10  h-[548px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex gap-2 xl:w-[50%]">
            <div className="w-full flex items-center h-7 justify-between  gap-2.5 ">
              <h1 className="text-black text-lg font-semibold font-['DM Sans']">
                Risk Monitoring
              </h1>
            </div>
            <div className="w-full flex items-center  p-0 pt-1 bg-stone-50 border-t border-b border-gray-100 justify-between lg:p-5  ">
              <p className="w-[25%] text-[#514482]  text-sm font-medium leading-[18px] font-['DM Sans'] ">
                Categories
              </p>
              <p className="w-[25%] text-center text-[#514482] text-sm font-medium leading-[18px] font-['DM Sans'] ">
                KPIs scanned
              </p>
              <p className="w-[25%] text-end text-[#514482] text-sm font-medium leading-[18px] font-['DM Sans']">
                Outside tolerance
              </p>
              <p className="w-[25%] text-end text-[#514482] text-sm font-medium leading-[18px] font-['DM Sans']">
                Risk Score
              </p>
            </div>

            <div className="w-full flex items-center  p-0  bg-white border-b border-gray-100 justify-between lg:p-3  ">
              <p className="w-[25%] text-gray-900 text-base font-medium leading-[21px] ml-1 sm:w-[83px]">
                Portfolio
              </p>
              <p className="w-[25%] text-center text-gray-900 text-base font-medium leading-[21px] sm:w-[83px]">
                12
              </p>
              <p className="w-[25%] text-center text-gray-900 text-base font-medium leading-[21px] sm:w-[83px]">
                02
              </p>

              <img src={GraphIcon} alt="" className="mr-5 mb-3 sm:mb-0" />
            </div>
            <div className="w-full flex items-center  p-0 bg-white border-b border-gray-100 justify-between lg:p-3 ">
              <p className="w-[25%] text-gray-900 text-base font-medium leading-[21px] ml-1 sm:w-[83px]">
                Bucket
              </p>
              <p className="w-[25%] text-center text-gray-900 text-base font-medium leading-[21px] sm:w-[83px]">
                12
              </p>
              <p className="w-[25%] text-center text-gray-900 text-base font-medium leading-[21px] sm:w-[83px]">
                02
              </p>

              <img src={GraphIcon} alt="" className="mr-5 mb-3 sm:mb-0" />
            </div>
            <div className="w-full flex items-center  p-0 bg-white border-b border-gray-100 justify-between lg:p-3 ">
              <p className="w-[25%] text-gray-900 text-base font-medium leading-[21px] ml-1 sm:w-[83px]">
                Location
              </p>
              <p className="w-[25%] text-center text-gray-900 text-base font-medium leading-[21px] sm:w-[83px]">
                12
              </p>
              <p className="w-[25%] text-center text-gray-900 text-base font-medium leading-[21px] sm:w-[83px]">
                02
              </p>

              <img src={GraphIcon} alt="" className="mr-5 mb-3 sm:mb-0" />
            </div>
            <div className="w-full flex items-center  p-0 bg-white border-b border-gray-100 justify-between lg:p-3 ">
              <p className="w-[25%] text-gray-900 text-base font-medium leading-[21px] ml-1 sm:w-[83px]">
                Write Offs
              </p>
              <p className="w-[25%] text-center text-gray-900 text-base font-medium leading-[21px] sm:w-[83px]">
                12
              </p>
              <p className="w-[25%] text-center text-gray-900 text-base font-medium leading-[21px] sm:w-[83px]">
                02
              </p>

              <img src={GraphIcon} alt="" className="mr-5 mb-3 sm:mb-0" />
            </div>
            <div className="w-full flex items-center  p-0 bg-white  border-gray-100 justify-between lg:p-3 ">
              <p className="w-[25%] text-gray-900 text-base font-medium leading-[21px] ml-1 sm:w-[83px]">
                Placements
              </p>
              <p className="w-[25%] text-center text-gray-900 text-base font-medium leading-[21px] sm:w-[83px]">
                12
              </p>
              <p className="w-[25%] text-center text-gray-900 text-base font-medium leading-[21px] sm:w-[83px]">
                02
              </p>

              <img src={GraphIcon} alt="" className="mr-5 mb-3 sm:mb-0" />
            </div>
            <div className="w-full flex items-center  p-0 bg-white  border-gray-100 justify-between lg:p-3 ">
              <p className="w-[25%] text-gray-900 text-base font-medium leading-[21px] ml-1 sm:w-[83px]">
                Watchlist
              </p>
              <p className="w-[25%] text-center text-gray-900 text-base font-medium leading-[21px] sm:w-[83px]">
                12
              </p>
              <p className="w-[25%] text-center text-gray-900 text-base font-medium leading-[21px] sm:w-[83px]">
                02
              </p>

              <img src={GraphIcon} alt="" className="mr-5 mb-3 sm:mb-0" />
            </div>
      </div>
    </>
  );
}

export default RiskMonitoringExpanded;
