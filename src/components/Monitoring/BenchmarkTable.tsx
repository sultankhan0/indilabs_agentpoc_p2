import React from "react";
import GraphIcon from "../../assets/icons/Harvey Graph Balls.svg";
import FrameIcon from "../../assets/icons/Frame 214.svg";
import upgreenarrow from "../../assets/images/upgreenarrow.svg";
import DownRedArrow from '../../assets/icons/red-down-shift.png'
import RightYellowArrow from '../../assets/icons/yellow-right-shift.png'

type Props = {};

function BenchmarkTable({}: Props) {
  return (
    <>
      <div className="w-full mt-0  p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex BenchmarkTableMainTable">
        <div className="w-full flex items-center py-5 p-3 bg-white-50 border-b border-gray-100 justify-between  ">
          <p className=" text-[#514482] text-xs font-normal leading-[18px]  w-[83px]"></p>

          <p className=" w-[103px] text-center text-gray-400 text-xs font-normal leading-[18px]">
            July
          </p>
          <p className="w-[103px] text-center text-gray-400 text-xs font-normal leading-[18px]">
            June
          </p>
          <p className="w-[103px] text-center text-gray-400 text-xs font-normal leading-[18px]">
            3 Month Average
          </p>
          <p className="w-[103px] text-center text-gray-400 text-xs font-normal leading-[18px]">
            Benchmark
          </p>
        </div>

        <div className="w-full flex items-center py-5  p-3  bg-white border-b border-t border-gray-100 justify-between  ">
          <p className="w-[83px]  text-gray-900 text-sm font-normal leading-[21px]">
            Book
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={upgreenarrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={upgreenarrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={RightYellowArrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={DownRedArrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
        </div>
        <div className="w-full flex items-center py-5  p-3 bg-white border-b border-gray-100 justify-between ">
          <p className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
            1+
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={upgreenarrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={upgreenarrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={RightYellowArrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={DownRedArrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
        </div>
        <div className="w-full flex items-center py-5   p-3 bg-white border-b border-gray-100 justify-between ">
          <p className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
            1+%
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={upgreenarrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={upgreenarrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={upgreenarrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={DownRedArrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
        </div>
        <div className="w-full flex items-center py-5  p-3 bg-white border-b border-gray-100 justify-between ">
          <p className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
            2+
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={upgreenarrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={upgreenarrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={RightYellowArrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={DownRedArrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
        </div>
        <div className="w-full flex items-center py-5  p-3 bg-white border-b border-gray-100 justify-between ">
          <p className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
            2+%
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={upgreenarrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={upgreenarrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={RightYellowArrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
          <p className="w-[83px] flex items-center text-gray-900 text-sm font-normal leading-[21px]">
            <img src={DownRedArrow} alt="" className="mr-1" />
            <span className="">251,440</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default BenchmarkTable;
