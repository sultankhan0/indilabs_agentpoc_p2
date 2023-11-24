import React, { useEffect, useState } from "react";
import shiftGreen from "../../assets/icons/shift-green.svg";
import shiftOrange from "../../assets/icons/shift-orange.svg";
import shiftRed from "../../assets/icons/shift-red.svg";
import doallar from "../../assets/icons/attach_money.svg";
import database from "../../assets/icons/database.svg";
import { Link } from "react-router-dom";
import RedDownArrow from "../../assets/icons/red-down-shift.png";
import { useSelector } from "react-redux";
import {
  Collections,
  IDashboardState,
  PreDeliquency,
  Recovery,
} from "../../redux/model/dashboard.model";
import { UseSelector } from "react-redux/es/hooks/useSelector";

type Props = {};

const Cards = (props: Props) => {
  const [collection, setCollection] = useState<Collections>();
  const [preDeliquency, setPreDeliquency] = useState<PreDeliquency>();
  const [recovery, setRecovery] = useState<Recovery>();
  const DashboardState: IDashboardState = useSelector(
    (state: any) => state?.dashboard.data
  );
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const { collections } = DashboardState ?? {};
  console.log(collections);
  useEffect(() => {
    if (DashboardState !== null) {
      setCollection(DashboardState.collections);
      setPreDeliquency(DashboardState.pre_deliquency);
      setRecovery(DashboardState.recovery);
    }
  }, [DashboardState]);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  return (
    <>
      {DashboardState !== null && (
        <div className=" flex flex-wrap   mt-16 justify-between">
          <div
            className="mb-5 w-full md:w-1/2 xl:w-1/3 responsivePADDING "
            style={{
              borderRadius: "12px",
              backgroundColor: "transparent",
              paddingRight: "18px",
            }}
          >
            <div className=" w-full p-4 bg-zinc-200 bg-opacity-20 rounded-xl shadow flex-col justify-start items-center gap-4 inline-flex h-full">
              <div className="flex-col justify-start items-center gap-1 flex">
                <div className="px-8 py-1 bg-white rounded  border-slate-400 justify-center items-center gap-1 inline-flex">
                  <div className="text-[#000] text-base text-[16px] font-[400]  font-['DM Sans'] leading-normal">
                    Inhouse
                  </div>
                </div>
                <div>
                  <span
                    className="text-[12px] font-[500]  leading-[18px]"
                    style={{ color: "#5C4E8E" }}
                  >
                    Accounts being worked
                  </span>
                  <span className="text-[#ED0E00] text-[12px] font-[700]   leading-[18px] ml-1">
                    Inhouse
                  </span>
                </div>
              </div>
              <div className=" w-full mb-2  p-3 bg-white rounded-xl shadow  flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center gap-9 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="justify-start items-center gap-1.5 flex">
                      <div className="w-5 h-5 relative">
                        <span>
                          <img src={doallar} alt="dollar" />
                        </span>
                      </div>
                      <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                        <p>Balances:</p>
                      </div>
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[400]  leading-[18px] tracking-[0.28px]">
                      ${preDeliquency?.tile1.Balance.value}M
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex">
                    <div className="w-3.5 h-3.5 relative">
                      <span>
                        <img
                          src={
                            preDeliquency?.tile1.Balance.color === "O"
                              ? shiftOrange
                              : preDeliquency?.tile1.Balance.color === "R"
                              ? RedDownArrow
                              : shiftGreen
                          }
                          alt="dollar"
                        />{" "}
                      </span>
                    </div>
                    <div className="text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px]  mt-0.5">
                      {preDeliquency?.tile1.Balance.growth} MOM
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-between items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="justify-start items-center gap-1.5 flex">
                      <div className="w-5 h-5 relative">
                        <span>
                          <img src={database} alt="dollar" />
                        </span>
                      </div>
                      <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                        Units:
                      </div>
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[400]  leading-[18px] tracking-[0.28px]">
                      {preDeliquency?.tile1.Units.value}
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex mr-0.5">
                    <div className="w-3.5 h-3.5 relative">
                      <span className="">
                        <img
                          src={
                            preDeliquency?.tile1.Units.color === "O"
                              ? shiftOrange
                              : preDeliquency?.tile1.Units.color === "R"
                              ? RedDownArrow
                              : shiftGreen
                          }
                          alt="dollar"
                        />
                      </span>
                    </div>
                    <div className="text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px] mt-0.5">
                      {preDeliquency?.tile1.Units.growth} MOM
                    </div>
                  </div>
                </div>
              </div>
              <div
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
                className="relative  w-full p-3 bg-white rounded-xl shadow  flex-col justify-start items-start  flex"
              >
                <div className="flex justify-between w-full py-2 border-b">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="w-1.5 h-1.5 bg-violet-200 rounded-full" />
                    <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                      Hotspots:
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[700] leading-[18px] tracking-[0.28px]">
                      {preDeliquency?.tile2.Hotspots.value}
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex mr-0.5">
                    <div className="w-3.5 h-3.5 relative">
                      <span>
                        <img
                          src={
                            preDeliquency?.tile2.Hotspots.color === "O"
                              ? shiftOrange
                              : preDeliquency?.tile2.Hotspots.color === "R"
                              ? RedDownArrow
                              : shiftGreen
                          }
                          alt="dollar"
                        />{" "}
                      </span>
                    </div>
                    <div className="min-w-[54px] text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px]">
                      {preDeliquency?.tile2.Hotspots.growth} MOM
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-full py-2 border-b">
                  <div className="justify-center items-center gap-1 flex">
                    <div className="w-1.5 h-1.5 bg-orange-100 rounded-full" />
                    <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                      RoI:
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[700] leading-[18px] tracking-[0.28px]">
                      {preDeliquency?.tile2.ROI.value}%
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex">
                    <div className="w-3.5 h-3.5 relative">
                      <span>
                        <img
                          src={
                            preDeliquency?.tile2.ROI.color === "O"
                              ? shiftOrange
                              : preDeliquency?.tile2.ROI.color === "R"
                              ? RedDownArrow
                              : shiftGreen
                          }
                          alt="dollar"
                        />{" "}
                      </span>{" "}
                    </div>
                    <div className="min-w-[54px] text-right text-[#000] text-[10px] font-[400] font-[DM Sans] tracking-wide">
                      {preDeliquency?.tile2.ROI.growth} MOM
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-full py-2 ">
                  <div className="justify-center items-center gap-1 flex">
                    <div className="w-1.5 h-1.5 bg-emerald-100 rounded-full" />
                    <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                      STP:
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[700] leading-[18px] tracking-[0.28px]">
                      {preDeliquency?.tile2.STP.value}%
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex mr-0.5">
                    <div className="w-3.5 h-3.5 relative">
                      <span>
                        <img
                          src={
                            preDeliquency?.tile2.STP.color === "O"
                              ? shiftOrange
                              : preDeliquency?.tile2.STP.color === "R"
                              ? RedDownArrow
                              : shiftGreen
                          }
                          alt="dollar"
                        />{" "}
                      </span>{" "}
                    </div>
                    <div className="min-w-[54px] text-right text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px]">
                      {preDeliquency?.tile2.STP.growth} MOM
                    </div>
                  </div>
                </div>
                {isHovered1 && (
                  <div className="absolute top-8 -right-8 text-[12px] pt-1 pb-1 pl-6 pr-6 bg-gray-100 text-[#6750A4]  rounded-md">
                    Accounts being worked{" "}
                    <span className="text-[red]">Inhouse</span>
                  </div>
                )}
              </div>
              {/* {isHovered&&(<h1 className="absolute top-10 right-0">you are at inhouse </h1>)} */}
              <div
                className="px-4 py-2.5 bg-slate-500 rounded-[100px] justify-center items-center inline-flex"
                style={{ background: "#6750A4" }}
              >
                <div className="px-2 justify-center items-center flex">
                  <div className="text-center text-[#ffffff] text-[14px] font-[500] leading-[20px] tracking-[0.1px]">
                    View Dashboard
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mb-5 w-full md:w-1/2 xl:w-1/3 responsivePADDING"
            style={{
              borderRadius: "12px",
              backgroundColor: "transparent",
              paddingRight: "18px",
            }}
          >
            <div className=" w-full p-4 bg-zinc-200 bg-opacity-20 rounded-xl shadow flex-col justify-start items-center gap-4 inline-flex h-full">
              <div className="flex-col justify-start items-center gap-1 flex">
                <div className="px-8 py-1 bg-white rounded  border-slate-400 justify-center items-center gap-1 inline-flex">
                  <div className="text-[#000] text-base text-[16px] font-[400]  font-['DM Sans'] leading-normal">Agency</div>
                </div>
                <div>
                  <span
                    className="text-[12px] font-[500]  leading-[18px]"
                    style={{ color: "#5C4E8E" }}
                  >
                    Accounts being worked by
                  </span>
                  <span className="text-[#ED0E00] text-[12px] font-[700] leading-[18px] ml-1 mr-1">
                    Agencies
                  </span>
                  {/* <span
                    className="text-slate-500 text-xs  leading-[18px]"
                    style={{ color: "#6750A4" }}
                  >
                    past due
                  </span> */}
                </div>
              </div>
              <div className=" w-full mb-2  p-3 bg-white rounded-xl shadow flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center gap-9 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="justify-start items-center gap-1.5 flex">
                      <div className="w-5 h-5 relative">
                        <span>
                          <img src={doallar} alt="dollar" />
                        </span>
                      </div>
                      <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                        <p>Balances:</p>
                      </div>
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[400]  leading-[18px] tracking-[0.28px]">
                      ${collection?.tile1.Balance.value}M
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex">
                    <div className="w-3.5 h-3.5 relative">
                      <span>
                        <img
                          src={
                            collection?.tile1.Balance.color === "O"
                              ? shiftOrange
                              : collection?.tile1.Balance.color === "R"
                              ? RedDownArrow
                              : shiftGreen
                          }
                          alt="dollar"
                        />
                      </span>
                    </div>
                    <div className="text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px] mt-0.5">
                      {collection?.tile1.Balance.growth} MOM
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-between items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="justify-start items-center gap-1.5 flex">
                      <div className="w-5 h-5 relative">
                        <span>
                          <img src={database} alt="dollar" />
                        </span>
                      </div>
                      <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                        Units:
                      </div>
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[400]  leading-[18px] tracking-[0.28px]">
                      {collection?.tile1.Units.value}
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex mr-[3px]">
                    <div className="w-3.5 h-3.5 relative">
                      <span>
                        <img
                          src={
                            collection?.tile1.Balance.color === "O"
                              ? shiftOrange
                              : collection?.tile1.Balance.color === "R"
                              ? RedDownArrow
                              : shiftGreen
                          }
                          alt="dollar"
                        />
                      </span>
                    </div>
                    <div className="text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px] mt-0.5">
                      {collection?.tile1.Units.growth} MOM
                    </div>
                  </div>
                </div>
              </div>
              <div
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                className="relative w-full p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex"
              >
                <div className="border-b  border-violet-100 py-2 self-stretch justify-between items-center gap-9 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="w-1.5 h-1.5 bg-violet-200 rounded-full" />
                    <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                      Hotspots:
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[700] leading-[18px] tracking-[0.28px]">
                      {collection?.tile2.Hotspots.value}
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex mr-[2px]">
                    <div className="w-3.5 h-3.5 relative">
                      <span>
                        <img
                          src={
                            collection?.tile2.Hotspots.color === "O"
                              ? shiftOrange
                              : collection?.tile2.Hotspots.color === "R"
                              ? RedDownArrow
                              : shiftGreen
                          }
                          alt="dollar"
                        />
                      </span>
                    </div>
                    <div className="min-w-[54px] text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px]">
                      {collection?.tile2.Hotspots.growth} MOM
                    </div>
                  </div>
                </div>
                <div className="py-2 border-violet-100 border-b self-stretch justify-between items-center gap-2 inline-flex">
                  <div className=" justify-center items-center gap-2 flex">
                    <div className="w-1.5 h-1.5 bg-orange-100 rounded-full" />
                    <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                      RoI:
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[700] leading-[18px] tracking-[0.28px]">
                      {collection?.tile2.ROI.value}
                    </div>
                  </div>
                  <div className=" justify-start items-center gap-1 flex">
                    <div className="origin-top-left -rotate-180 w-3.5 h-3.5 relative">
                      <div className="w-3.5 h-3.5 left-0 top-0 absolute origin-top-left -rotate-180 ">
                        <span>
                          <img
                            src={
                              collection?.tile2.ROI.color === "O"
                                ? shiftOrange
                                : collection?.tile2.ROI.color === "R"
                                ? RedDownArrow
                                : shiftGreen
                            }
                            alt="dollar"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="min-w-[54px] text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px]">
                      {collection?.tile2.ROI.growth} MOM
                    </div>
                  </div>
                </div>
                <div className=" py-2 self-stretch justify-between items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="w-1.5 h-1.5 bg-emerald-100 rounded-full" />
                    <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                      STP:
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[700] leading-[18px] tracking-[0.28px]">
                      {collection?.tile2.STP.value}%
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex mr-[2px]">
                    <div className="w-3.5 h-3.5 relative">
                      <span>
                        <img
                          src={
                            collection?.tile2.STP.color === "O"
                              ? shiftOrange
                              : collection?.tile2.STP.color === "R"
                              ? RedDownArrow
                              : shiftGreen
                          }
                          alt="dollar"
                        />
                      </span>
                    </div>
                    <div className="min-w-[54px] text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px]">
                      {collection?.tile2.STP.growth} MOM
                    </div>
                  </div>
                </div>
                {isHovered2 && (
                  <div className="absolute top-8 -right-8 text-[12px] pt-1 pb-1 pl-6 pr-6 bg-gray-100 text-[#6750A4]  rounded-md">
                    Accounts being worked{" "}
                    <span className="text-[red]">by Agencies</span>
                  </div>
                )}
              </div>
              <Link to="/monitoring">
                <div
                  className="px-4 py-2.5 bg-slate-500 rounded-[100px] justify-center items-center inline-flex"
                  style={{ background: "#6750A4" }}
                >
                  <div className="px-2 justify-center items-center flex">
                    <div className="text-center text-white text-sm font-medium leading-tight tracking-tight">
                      View Dashboard
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="mb-5 w-full  md:w-1/2 xl:w-1/3 "
            style={{
              borderRadius: "12px",
              backgroundColor: "transparent",
            }}
          >
            <div className=" w-full  p-4 bg-zinc-200 bg-opacity-20 rounded-xl shadow flex-col justify-start items-center gap-4 inline-flex h-full">
              <div className="flex-col justify-start items-center gap-1 flex">
                <div className="px-8 py-1 bg-white rounded  border-slate-400 justify-center items-center gap-1 inline-flex">
                  <div className="text-[#000] text-base text-[16px] font-[400]  font-['DM Sans'] leading-normal">
                    Sale
                  </div>
                </div>
                <div>
                  <span
                    className="text-[12px] font-[500]  leading-[18px]"
                    style={{ color: "#5C4E8E" }}
                  >
                    Accounts marked for
                  </span>
                  <span className="text-[#ED0E00] text-[12px] font-[700] leading-[18px] ml-1">
                  Debt Sale
                  </span>
                </div>
              </div>
              <div className=" w-full mb-2 p-3 bg-white rounded-xl shadow flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center gap-9 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="justify-start items-center gap-1.5 flex">
                      <div className="w-5 h-5 relative">
                        <span>
                          <img src={doallar} alt="dollar" />
                        </span>
                      </div>
                      <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                        <p>Balances:</p>
                      </div>
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[400]  leading-[18px] tracking-[0.28px]">
                      ${recovery?.tile1.Balance.value}
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex">
                    <div className="w-3.5 h-3.5 relative mr-0.5">
                      <span>
                        <img
                          src={
                            recovery?.tile1.Balance.color === "O"
                              ? shiftOrange
                              : recovery?.tile2.Balance.color === "R"
                              ? RedDownArrow
                              : shiftGreen
                          }
                          alt="dollar"
                        />
                      </span>
                    </div>
                    <div className="text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px] mt-0.5">
                      {recovery?.tile1.Balance.growth} MOM
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-between items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="justify-start items-center gap-1.5 flex">
                      <div className="w-5 h-5 relative">
                        <span>
                          <img src={database} alt="dollar" />
                        </span>
                      </div>
                      <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                        Units:
                      </div>
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[400]  leading-[18px] tracking-[0.28px]">
                      {recovery?.tile1.Units.value}
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex mr-[3px]">
                    <div className="w-3.5 h-3.5 relative">
                      <span>
                        <img
                          src={
                            recovery?.tile1.Units.color === "O"
                              ? shiftOrange
                              : recovery?.tile1.Units.color === "R"
                              ? RedDownArrow
                              : shiftGreen
                          }
                          alt="dollar"
                        />{" "}
                      </span>
                    </div>
                    <div className="text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px] mt-0.5">
                      {recovery?.tile1.Units.growth} MOM
                    </div>
                  </div>
                </div>
              </div>
              <div
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
                className="relative w-full p-3 bg-white rounded-xl shadow flex-col justify-start items-start  flex"
              >
                <div className="self-stretch justify-between items-center gap-9 inline-flex py-2 border-b border-violet-100">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="w-1.5 h-1.5 bg-violet-200 rounded-full" />
                    <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                      Hotspots:
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[700] leading-[18px] tracking-[0.28px]">
                      {recovery?.tile2.Hotspots.value}
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex mr-1">
                    <div className="w-3.5 h-3.5 relative">
                      <span>
                        <img
                          src={
                            recovery?.tile2.Hotspots.color === "O"
                              ? shiftOrange
                              : recovery?.tile2.Hotspots.color === "R"
                              ? RedDownArrow
                              : shiftGreen
                          }
                          alt="dollar"
                        />
                      </span>
                    </div>
                    <div className="min-w-[54px] text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px]">
                      {recovery?.tile2.Hotspots.growth} MOM
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-between items-center gap-2 inline-flex py-2 border-b  border-violet-100">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="w-1.5 h-1.5 bg-orange-100 rounded-full" />
                    <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                      RoI:
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[700] leading-[18px] tracking-[0.28px]">
                      {recovery?.tile2.ROI.value}
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex mr-[1px]">
                    <div className="origin-top-left -rotate-180 w-3.5 h-3.5 relative">
                      <div className="w-3.5 h-3.5 left-0 top-0 absolute origin-top-left -rotate-180 ">
                        <span>
                          <img
                            src={
                              recovery?.tile2.ROI.color === "O"
                                ? shiftOrange
                                : recovery?.tile2.ROI.color === "R"
                                ? RedDownArrow
                                : shiftGreen
                            }
                            alt="dollar"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="min-w-[54px] text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px]">
                      {recovery?.tile2.ROI.growth} MOM
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-between items-center gap-2 inline-flex py-2">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="w-1.5 h-1.5 bg-emerald-100 rounded-full" />
                    <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                      STP:
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[700] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                      {recovery?.tile2.STP.value}%
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex mr-[0px]">
                    <div className="w-3.5 h-3.5 relative">
                      <span>
                        <img
                          src={
                            recovery?.tile2.STP.color === "O"
                              ? shiftOrange
                              : recovery?.tile2.STP.color === "R"
                              ? RedDownArrow
                              : shiftGreen
                          }
                          alt="dollar"
                        />{" "}
                      </span>
                    </div>
                    <div className="min-w-[54px] text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px]">
                      {recovery?.tile2.STP.growth} MOM
                    </div>
                  </div>
                </div>
                {isHovered3 && (
                  <div className="absolute top-8 -right-8 text-[12px] pt-1 pb-1 pl-6 pr-6 bg-gray-100 text-[#6750A4]  rounded-md">
                    Accounts{" "}
                    <span className="text-red-600">to be Allocated</span>
                  </div>
                )}
              </div>
              <div
                className="px-4 py-2.5 bg-slate-500 rounded-[100px] justify-center items-center inline-flex"
                style={{ background: "#6750A4" }}
              >
                <div className="px-2 justify-center items-center flex">
                  <div className="text-center text-white text-sm font-medium leading-tight tracking-tight">
                    View Dashboard
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Cards;
