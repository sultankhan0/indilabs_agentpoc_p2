import React, { useEffect, useState } from "react";
import yellow from "../../assets/images/uparrowYellow.svg";
import Red from "../../assets/images/uparrowRed.svg";
import "./Custom.scss";
import RedDownArrow from "../../assets/icons/red-down-shift.png";
import shiftOrange from "../../assets/icons/shift-orange.svg";
import AllocationRadialBarChart from "./allocationSharePiechart";
import AllocationShareScatterChart from "./allocationShareScatterChart";
import { GetCityData } from "../../api/api";
import {
  Allocation,
  ExclusionCriteria,
  IAllocationData,
  ImpactAnalysis,
  Overall,
} from "../../redux/model/dashboard.model";
import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
import "./Allocation.scss";
import { ResponsiveContainer } from "recharts";

declare module "recharts" {
  interface RadialBarProps {
    minAngle?: number;
    label?: any;
    background?: any;
    clockWise?: any;
    dataKey?: any;
  }
}

// const colors = ["bg-blue-500", "bg-green-500", "bg-yellow-500"];
// const CUSTOM_LEGEND_COLORS = ["black", "black", "black"];

const AllocationEngine = () => {
  const [b1, setB1] = useState(true);
  const [b2, setB2] = useState(false);
  const [selectedCity, setSelectedCity] = useState("pune");
  const [activeBucket, setActiveBucket] = useState("b1");
  const [allocationData, setAllocationData] = useState<Allocation[]>();
  const [exclusion_criteria, setExclusion_criteria] =
    useState<ExclusionCriteria>();
  const [loader, setLoader] = useState(false);
  const [overall, setOverall] = useState<Overall>();
  const [impact_analysis, setImpact_analysis] = useState<ImpactAnalysis>();

  // scatter chart
  const [minResolveRate, setMinResolveRate] = useState<number>(70); // Default to 70 if you like
  const [maxResolveRate, setMaxResolveRate] = useState<number>(100); // Default to 100 if you like
  const [resultArray, setResultArray] = useState<number[]>([]);
  const [cityData, setCityData] = useState<any>([]);

  const [maxAllocationData, setMaxAllocationData] = useState<number>();
  const [minAllocationData, setMinAllocationData] = useState<number>();
  const [resultArrayList, setResultArrayList] = useState<number[]>([]);

  const cities = [
    { id: "pune", name: "PUN" },
    { id: "delhi", name: "DEL" },
    { id: "mumbai", name: "MUM" },

    { id: "hyderabad", name: "HYD" },
    { id: "chennai", name: "CHN" },
    { id: "bangalore", name: "BLR" },
    { id: "kolkata", name: "KOL" },
  ];
  const BGroups = [
    { id: "b1", label: "B1" },
    { id: "b2", label: "B2" },
    { id: "b3", label: "B3" },
    { id: "b4", label: "B4" },
    { id: "b5", label: "B5" },
    { id: "b6", label: "B6" },
  ];
  const colorObject: any = {
    DCA002: "bg-[#5AD8A6]",
    DCA003: "bg-[#5B8FF9]",
    DCA005: "bg-[#F6BD16]",

    DCA007: "bg-[#0000008a]",
    DCA015: "bg-[#4482C2]",
    DCA018: "bg-[#F6BD16]",
    // new colors
    DCA009: "bg-[#F6BD16]",
    DCA010: "bg-[#5AD8A6]",
    DCA008: "bg-[#5AD8A6]",
    DCA012: "bg-[#F6BD16]",
    DCA016: "bg-[#5AD8A6]",
    DCA017: "bg-[#F6BD16]",
    DCA019: "bg-[#4679a7]",
    DCA020: "bg-[#F6BD16]",
    DCA014: "bg-[#F6BD16]",
    DCA041: "bg-[#84aedc]",
    DCA072: "bg-[#b8cde8]",
    //
  };
  const colorObjectNew: any = [
    "bg-[#4679a7]",
    "bg-[#4482C2]",
    "bg-[#84aedc]",
    "bg-[#b8cde8]",
  ];
  // #4679a7",'#4482C2','#84aedc','#b8cde8

  // };
  const handleCityClick = async (cityId: string) => {
    await fetchData(cityId, activeBucket);

    setSelectedCity(cityId);
  };

  const handleButtonClick = async (buttonId: string) => {
    await fetchData(selectedCity, buttonId);

    setActiveBucket(buttonId);
  };

  const fetchData = async (city: string, bucket: string) => {
    setLoader(true);
    // const res = {
    //   status: 200,
    //   data: {
    //     city: "Kolkata",
    //     code: "KOL",
    //     product: "Home loan",
    //     bucket: "B4",
    //     exclusion_criteria: {
    //       dpd: 5,
    //       min_balance: 1000,
    //       min_score: null,
    //       flag: null,
    //     },
    //     overall: {
    //       total_accounts: 42779,
    //       total_accounts_allocated: 42779,
    //       in_house_exclusion: 0,
    //       total_balance: 2156069305,
    //       total_balance_allocated: 2156069305,
    //     },
    //     impact_analysis: {
    //       resolve_rate: {
    //         base: 54.0,
    //         increment: 0,
    //       },
    //       cost_rate_on_resolved_amount: {
    //         value: 15,
    //         increment: 0,
    //       },
    //     },
    //     allocations: [
    //       {
    //         agency_name: "DCA015",
    //         previous_month_allocated_percentage: 21,
    //         current_month_allocated_percentage: 24,
    //         resolve_rate: 51,
    //         commission_rate: 16,
    //         accounts: 10247,
    //         balance: 514330380,
    //       },
    //       {
    //         agency_name: "DCA019",
    //         previous_month_allocated_percentage: 27,
    //         current_month_allocated_percentage: 28,
    //         resolve_rate: 59,
    //         commission_rate: 14,
    //         accounts: 11640,
    //         balance: 585648041,
    //       },
    //       {
    //         agency_name: "DCA041",
    //         previous_month_allocated_percentage: 29,
    //         current_month_allocated_percentage: 24,
    //         resolve_rate: 52,
    //         commission_rate: 12,
    //         accounts: 10429,
    //         balance: 528874679,
    //       },
    //       {
    //         agency_name: "DCA072",
    //         previous_month_allocated_percentage: 21,
    //         current_month_allocated_percentage: 24,
    //         resolve_rate: 52,
    //         commission_rate: 20,
    //         accounts: 10463,
    //         balance: 527216205,
    //       },
    //     ],
    //   },
    // };
    const res = await GetCityData({ city, bucket });

    if (res.status === 200) {
      setAllocationData(res.data.allocations);
      setExclusion_criteria(res.data?.exclusion_criteria);
      setOverall(res.data?.overall);
      setImpact_analysis(res.data?.impact_analysis);
      setLoader(false);

      //
      // scatter Chart data
      const resolveRates = res.data.allocations.map(
        (obj: { resolve_rate: any }) => obj.resolve_rate
      );

      const minResolveRate = Math.min(...resolveRates) - 4;
      const maxResolveRate = Math.max(...resolveRates) + 4;
      setMinResolveRate(minResolveRate);
      setMaxResolveRate(maxResolveRate);

      const resultAllocationArray = res.data.allocations
        .map(
          (obj: {
            previous_month_allocated_percentage: any;
            current_month_allocated_percentage: any;
          }) => [
            obj.previous_month_allocated_percentage,
            obj.current_month_allocated_percentage,
          ]
        )
        .flat();

      const minAllocationvalue = Math.min(...resultAllocationArray) - 4;
      const maxAllocationvalue = Math.max(...resultAllocationArray) + 4;

      setMaxAllocationData(maxAllocationvalue);
      setMinAllocationData(minAllocationvalue);

      const resultAllocationArrayList = Array.from(
        {
          length: Math.ceil((maxAllocationvalue - minAllocationvalue) / 2) + 1,
        },
        (_, idx) => minAllocationvalue + idx * 2
      );

      setResultArrayList(resultAllocationArrayList);

      const resultArray = Array.from(
        { length: Math.ceil((maxResolveRate - minResolveRate) / 2) + 1 },
        (_, idx) => minResolveRate + idx * 2
      );
      setResultArray(resultArray);
      setCityData(res?.data?.allocations);

      //
    }
    // dispatch(saveDashboardData(res.data))
  };
  useEffect(() => {
    fetchData(selectedCity, activeBucket);
  }, []);
  const Loader = () => {
    return <span className="loader"></span>;
  };

  console.log("allocationData", allocationData);

  return (
    <div className="p-0 lg:p-[28px] responsivePageWrapper  relative">
      <DashboardHeader />
      {loader ? <Loader /> : ""}
      <div className="bg-gray-100 rounded-xl p-2 lg:p-[28px] mt-5 flex flex-col">
        <div className=" w-full justify-between flex upperSectionAllocation">
          <div className="flex ">
            <div className=" flex justify-between  rounded-xl B1TabsContain">
              {BGroups.map((button, index) => (
                <div
                  key={button.id}
                  onClick={() => handleButtonClick(button.id)}
                  className={`text-center text-[18px] font-medium font-['Calibri' !important] h-10 w-[78px] border border-gray-400 flex align-center justify-center items-center cursor-pointer ${
                    activeBucket === button.id
                      ? " bg-violet-200 "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-md" : ""} ${
                    index === BGroups.length - 1 ? "rounded-r-md" : ""
                  }`}
                >
                  {button.label}
                </div>
              ))}
            </div>
            <div className="text-center border-2 border-blue-500 bg-white ml-3 text-gray-800 text-base font-medium font-['DM Sans'] h-10 w-[78px] flex align-center justify-center items-center">
              WO
            </div>
          </div>

          <div className="vertical-line"></div>
          <div className="w-1/2 flex justify-between cityes ">
            {cities.map((city) => (
              <div
                key={city.id}
                onClick={() => handleCityClick(city.id)}
                className={`text-center text-[#7F7F7F] text-[18px]  font-medium font-['calibri' !important] h-10 w-20 flex align-center justify-center items-center cursor-pointer ${
                  selectedCity === city.id
                    ? "font-extrabold text-purple-900"
                    : ""
                }`}
              >
                {city.name}
              </div>
            ))}
            <div className="  relative text-slate-800 ">
              <select className="text-center rounded-lg h-10 w-[100px] flex items-center justify-between appearance-none select-none bg-inherit">
                <option className="h-8 w-full" value="Daily">
                  Other
                </option>
                <option className="h-8 w-full" value="Weekly">
                  Goa
                </option>
                <option className="h-8 w-full" value="Monthly">
                  Nagpur
                </option>
              </select>
              <div className="Arrow w-6 h-6 left-[72px] top-[8px] absolute"></div>
            </div>
          </div>
        </div>

        <>
          <div className="mt-3 p-3 rounded-xl shadow bg-white">
            <div className=" flex flex-wrap justify-between items-center">
              <p className="text-[#848484] text-[18px] font-[400] font-['Calibir' !important] md:w-f">
                Exclusion Criteria
              </p>
              <div className="commonInput form-item">
                <input
                  type="text"
                  id="DPD"
                  autoComplete="off"
                  required
                  placeholder="Eg-22"
                />
                <label htmlFor="DPD">DPD</label>
              </div>
              <div className="commonInput form-item">
                <input
                  type="text"
                  id="minbal"
                  autoComplete="off"
                  required
                  placeholder="Eg-100,000"
                />
                <label htmlFor="minbal">Min. Bal.</label>
              </div>
              <div className="commonInput form-item">
                <input
                  type="text"
                  id="score"
                  autoComplete="off"
                  required
                  placeholder="Eg-360"
                />
                <label htmlFor="score">Score</label>
              </div>
              <div className="commonInput form-item">
                <input
                  type="text"
                  id="flag"
                  autoComplete="off"
                  required
                  placeholder="Eg-360"
                />
                <label htmlFor="flag">Flag</label>
              </div>
              <button className="bg-[#56478A] py-1 px-6 border border-primary rounded-3xl text-white bg-">
                Change/Add
              </button>
            </div>
          </div>
          <div className="my-3 p-3 rounded-xl shadow bg-white">
            <div className=" flex flex-wrap justify-between items-center">
              <p className="text-[#848484] text-[18px]  font-[400] font-['Calibri' !important] md:w-f">
                Volumes (MTD)
              </p>
              <div className="commonBox">
                <p className="username text-[#7F7F7F] text-[15px]  font-medium font-['Calibri' !important]">
                  Total B1
                </p>
                <div className="flex items-center">
                  <p className="amount text-gray-600 text-[17px]  font-medium font-['Calibri' !important]">
                    {overall?.total_balance?.toLocaleString() || "0"}
                  </p>

                  <img src={shiftOrange} alt="" />
                  <p className="smText">+2% MOM</p>
                </div>
              </div>
              <div className="commonBox">
                <p className="username text-gray-600 text-[15px] font-medium font-['calibri' !important]">
                  Inhouse/ Exclusion
                </p>
                <div className="flex items-center justify-between">
                  <p className="amount text-gray-600 text-[17px]  font-medium font-['calibri' !important]">
                    {overall?.in_house_exclusion?.toLocaleString() || "0"}
                  </p>
                  <img src={shiftOrange} alt="" />
                  <p className="smText">+2% MOM</p>
                </div>
              </div>
              <div className="commonBox">
                <p className="username text-[#7F7F7F] text-[15px] font-medium font-['calibri' !important]">
                  {" "}
                  Allocated Balance
                </p>
                <div className="flex items-center">
                  <p className="amount text-gray-600 text-[17px]  font-medium font-['calibri' !important]">
                    {overall?.total_balance_allocated?.toLocaleString() || "0"}
                  </p>
                  <img className="" src={RedDownArrow} alt="" />
                  <p className="smText">+2% MOM</p>
                </div>
              </div>
              <div className="commonBox">
                <p className="username text-[#7F7F7F] text-[15px] font-medium font-['calibri' !important]">
                  Account Allocation{" "}
                </p>
                <div className="flex items-center">
                  <p className="amount text-gray-600 text-[17px]  font-medium font-['calibri' !important]">
                    {overall?.total_accounts_allocated?.toLocaleString() || "0"}
                  </p>
                  <img className="" src={RedDownArrow} alt="" />
                  <p className="smText">+2% MOM</p>
                </div>
              </div>
              <button className="bg-[#56478A] py-1 px-6 border border-primary rounded-3xl text-white">
                Test Pipeline
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
              <p className=" text-[18px] font-[400] text-[#7F7F7F] font-['calibri' !important] ">
                Allocation Share
              </p>
              {/* <ResponsiveContainer width="100%" height="90%">
                  <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="100%" barSize={20} data={data}>
                    <RadialBar
                      minAngle={15} // error came here
                      label={{ position: "insideStart", fill: "red" }}
                      background
                      clockWise
                      dataKey="uv"
                    />
                    <Legend
                      iconSize={20}
                      layout="vertical"
                      verticalAlign="middle"
                      wrapperStyle={style}
                    />
                  </RadialBarChart>
                </ResponsiveContainer> */}
              <div className="flex items-center chartDonatGraph justify-center">
                <AllocationRadialBarChart
                  allocationData={allocationData}
                  // selectedCity={selectedCity}
                  // activeBucket={activeBucket}
                />
                {/* <div className="flex flex-col ">
                  {allocationData?.map((item) => (
                    <div className="flex items-center">
                      <div
                        className={`${colorObjectNew[id]} `}
                        style={{
                          width: "13px",
                          height: "13px",
                          marginRight: "10px",
                          borderRadius: "0px",
                        }}
                      />
                      <span>{item.agency_name}</span>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
            <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow chartLineGraph">
              {/* <p className="text-blue-800 text-sm font-medium font-['DM Sans'] ">
                Allocation Share
              </p> */}
              <AllocationShareScatterChart
                selectedCity={selectedCity}
                activeBucket={activeBucket}
                // new
                minResolveRate={minResolveRate}
                maxResolveRate={maxResolveRate}
                resultArray={resultArray}
                fetchData={fetchData}
                cityData={cityData}
                maxAllocationData={maxAllocationData}
                minAllocationData={minAllocationData}
                resultArrayList={resultArrayList}
              />
            </div>
            <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
              <p className="text-[#4e7496] text-[16px] font-[400] font-['Calibri' !important] ">
                New Allocations: Recommended
              </p>
              <div className="w-full  rounded my-6 AllocationTabelMain">
                <table className="w-full table-auto  ">
                  <thead>
                    <tr>
                      <th className="px-4 py-2"></th>
                      {allocationData?.map((item) => {
                        return (
                          <th className="px-4 py-2 border text-[15px] text-[#212121]">
                            {item?.agency_name}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" text-center">
                      <td className="text-left border-none px-4 py-2 text-[#848484] text-[16px] font-normal font-['calibri' !important]">
                        Allocation
                      </td>
                      {/* <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          40%
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          5%
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          35%
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          20%
                        </td> */}
                      {allocationData?.map((item) => {
                        return (
                          <td className="border-none px-4 py-2 text-[#848484] text-[16px] font-medium font-['Calibri' !important]">
                            {item.current_month_allocated_percentage}%
                          </td>
                        );
                      })}
                    </tr>
                    <tr className="text-center">
                      <td className="text-left border-none px-4 py-2 text-[#848484] text-[15px] font-normal font-['Calibri' !important]">
                        Volume
                      </td>
                      {/* <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          360
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          45
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          315
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          180
                        </td> */}

                      {allocationData?.map((item) => {
                        return (
                          <td className="border-none px-4 py-2 text-[#848484] text-[16px] font-medium font-['Calibri' !important] ml-9">
                            {item?.accounts.toLocaleString() || "0"}
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
              <p className="text-[#3d5586] text-[16px] font-normal font-['Calibri' !important] ">
                Impact Analysis
              </p>
              <div className="w-full  rounded my-6 AllocationTabelMain flex flex-col">
                <table className="w-full table-auto ">
                  <tbody>
                    <tr className="">
                      <td className="border-none px-4 py-0 text-[#2f2f2f] text-[18px] font-normal font-['Calibri' !important]">
                        Resolve Rate
                      </td>
                      <td className="border-none px-0 py-2 text-[#2f2f2f] text-[17px] font-normal font-['Calibri' !important] border">
                        {impact_analysis?.resolve_rate?.base}%
                      </td>
                      <td className="border-none px-0 py-2 ml-6 text-gray-800 text-sm font-medium font-['DM Sans'] border flex items-center">
                        <img
                          className="mr-3 h-4 mt-0.5"
                          src={RedDownArrow}
                          alt=""
                        />
                        <p> {impact_analysis?.resolve_rate?.increment}% </p>
                        <p className="ml-4 text-[#848484] text-[17px] font-['Calibri' !important]">
                          vs. Recommended
                        </p>
                      </td>
                      {/* <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans'] border">
                        vs. Recommended
                      </td> */}
                    </tr>
                    <tr>
                      <td className="border-none px-4 py-0 text-[#2f2f2f] text-[18px] font-normal font-['Calibri' !important]">
                        cost
                      </td>
                      <td className="border-none px-0 py-2 text-[#2f2f2f] text-[17px] font-normal font-['Calibri' !important]">
                        {impact_analysis?.cost_rate_on_resolved_amount?.value}
                      </td>
                      <td className="border-none px-0 py-2 ml-[22px] text-gray-800 text-sm font-medium font-['Calibri' !important'] flex items-center">
                        <img
                          className="mr-2 h-[18px] mt-0.5"
                          src={shiftOrange}
                          alt=""
                        />
                        <p className="ml-0">
                          {
                            impact_analysis?.cost_rate_on_resolved_amount
                              ?.increment
                          }
                          %
                        </p>
                        <p className="ml-5 text-[#848484] text-[17px] font-['Calibri' !important]">
                          vs. Recommended
                        </p>
                      </td>
                      {/* <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                        vs. Recommended
                      </td> */}
                    </tr>
                    {/* <tr>
                      <td className=""></td>
                      <td className=""></td>
                      <td className=""></td>
                      <td className="border-none px-4 py-2 text-blue-500 underline text-sm font-medium font-['DM Sans']">
                        Approval Required
                      </td>
                    </tr> */}
                  </tbody>
                </table>
                <p className="border-none px-4 py-2 text-[#5b83cb] underline text-[16px] font-medium font-['Calibri' !important] self-end mr-[16%]">
                  Approval Required
                </p>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
              <p className="text-[#4e7496] text-[16px] font-[400] font-['Calibri' !important]">
                Change Allocations
              </p>
              <div className="w-full  rounded my-6 AllocationTabelMain">
                <table className="w-full table-auto">
                  <tbody>
                    <tr className="">
                      <td className="border-none px-4 py-2 text-[#5b83cb] text-[16px] font-normal font-['Calibri' !important]">
                        Allocation
                      </td>
                      {allocationData?.map((item) => {
                        return (
                          <td className="px-4 py-2 text-[#ca2828] text-[16px] font-medium font-['Calibri' !important] border text-center">
                            {item.current_month_allocated_percentage}%
                          </td>
                        );
                      })}
                      {/* <td className="px-4 py-2 text-red-600 text-sm font-medium font-['DM Sans'] border text-center">
                        5%
                      </td>
                      <td className="px-4 py-2 text-red-600 text-sm font-medium font-['DM Sans'] border text-center">
                        35%
                      </td>
                      <td className="px-4 py-2 text-red-600 text-sm font-medium font-['DM Sans'] border text-center">
                        20%
                      </td> */}
                    </tr>
                    <tr>
                      <td className="border-none px-4 py-2 text-[#5b83cb] text-[16px] font-normal font-['Calibri' !important]">
                        Volume
                      </td>
                      {allocationData?.map((item) => {
                        return (
                          <td className="px-4 py-2  text-[#ca2828] text-[16px] font-medium font-['Calibri' !important]  text-center">
                            {item?.accounts.toLocaleString() || "0"}
                          </td>
                        );
                      })}
                      {/* <td className="border-none px-4 py-2 text-red-600 text-sm font-medium font-['DM Sans'] text-center">
                        45
                      </td>
                      <td className="border-none px-4 py-2 text-red-600 text-sm font-medium font-['DM Sans'] text-center">
                        315
                      </td>
                      <td className="border-none px-4 py-2 text-red-600 text-sm font-medium font-['DM Sans'] text-center">
                        180
                      </td> */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
              <p className="text-[#3d5586] text-[16px] font-[400] font-['Calibri' !important] ">
                Exception Request
              </p>
              <p className="text-[#848484] text-[15px] font-[500] font-['Calibri' !important] mt-5">
                To maintain min. allocation for DCA2 to rebuild performance. DCA
                impacted by one off spike in attrition. Performance monitoring
                initiated
              </p>
              {/* <div className="mt-3">
                <button className="self-end  bg-[rebeccapurple] border-primary text-white pl-9 pr-9 pt-1 pb-1 rounded-3xl">
                  Default
                </button>
                <button className="self-end bg-[rebeccapurple] border-primary text-white pl-9 pr-9 pt-1 pb-1 rounded-3xl ml-2">
                  ABC
                </button>
              </div> */}
            </div>
          </div>
        </>

        {/* {activeBucket === "b2" ? (
          <>
            <div className="mt-3 p-3 rounded-xl shadow bg-white">
              <div className=" flex flex-wrap justify-between items-center">
                <p className="text-gray-800 text-sm font-medium font-['DM Sans']">
                  Exclusion Criteria
                </p>
                <div className="commonInput form-item">
                  <input type="text" id="DPD" autoComplete="off" required />
                  <label htmlFor="DPD">DPD</label>
                </div>
                <div className="commonInput form-item">
                  <input type="text" id="minbal" autoComplete="off" required />
                  <label htmlFor="minbal">Min. Bal.</label>
                </div>
                <div className="commonInput form-item">
                  <input type="text" id="score" autoComplete="off" required />
                  <label htmlFor="score">Score</label>
                </div>
                <div className="commonInput form-item">
                  <input type="text" id="flag" autoComplete="off" required />
                  <label htmlFor="flag">Flag</label>
                </div>
                <button className="text-gray-400 bg-blue-500 text-white rounded-xl  text-sm font-normal font-['DM Sans'] border-2 px-5 h-10">
                  Change/Add
                </button>
              </div>
            </div>
            <div className="my-3 p-3 rounded-xl shadow bg-white">
              <div className=" flex flex-wrap justify-between items-center">
                <p className="text-gray-800 text-sm font-medium font-['DM Sans']">
                  Volumes (MTD)
                </p>
                <div className="commonBox">
                  <p className="username">Total B1</p>
                  <div className="flex items-center">
                    <p className="amount">18,923</p>
                    <img src={shiftOrange} alt="" />
                    <p className="smText">+8% MOM</p>
                  </div>
                </div>
                <div className="commonBox">
                  <p className="username">Inhouse/ Exclusion</p>
                  <div className="flex items-center">
                    <p className="amount">22,466</p>
                    <img src={shiftOrange} alt="" />
                    <p className="smText">+12% MOM</p>
                  </div>
                </div>
                <div className="commonBox">
                  <p className="username">Allocated (MTD)</p>
                  <div className="flex items-center">
                    <p className="amount">759</p>
                    <img className="" src={RedDownArrow} alt="" />
                    <p className="smText">+34% MOM</p>
                  </div>
                </div>
                <div className="commonBox">
                  <p className="username">New Allocation (Today)</p>
                  <div className="flex items-center">
                    <p className="amount">10,200</p>
                    <img className="" src={RedDownArrow} alt="" />
                    <p className="smText">+2% MOM</p>
                  </div>
                </div>
                <button className="text-gray-400 bg-blue-500 text-white rounded-xl  text-sm font-normal font-['DM Sans'] border-2 px-5 h-10">
                  Test Pipeline
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
                <p className="text-blue-800 text-sm font-medium font-['DM Sans'] ">
                  New Allocations: Recommended
                </p>
                <div className="w-full  rounded my-6 AllocationTabelMain">
                  <table className="w-full table-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2 border text-[12px]">DCA 1</th>
                        <th className="px-4 py-2 border text-[12px]">DCA 2</th>
                        <th className="px-4 py-2 border text-[12px]">DCA 3</th>
                        <th className="px-4 py-2 border text-[12px]">DCA 4</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          Allocation
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          70%
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          23%
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          25%
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          87%
                        </td>
                      </tr>
                      <tr>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          Volume
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          520
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          65
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          815
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          980
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
                <p className="text-blue-800 text-sm font-medium font-['DM Sans'] ">
                  Impact Analysiss
                </p>
                <div className="w-full  rounded my-6 AllocationTabelMain">
                  <table className="w-full table-auto">
                    <tbody>
                      <tr>
                        <td className="border-none px-4 py-2 text-black-400 text-sm font-medium font-['DM Sans']">
                          Resolve Rate
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans'] border">
                          55%
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans'] border flex items-center">
                          <img src={shiftOrange} alt="mr-1" />
                          -5%{" "}
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans'] border">
                          vs. Recommended
                        </td>
                      </tr>
                      <tr>
                        <td className="border-none px-4 py-2 text-black-400 text-sm font-medium font-['DM Sans']">
                          cost
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          $ XX
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans'] flex items-center">
                          <img className="mr-1" src={RedDownArrow} alt="" /> +2%
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          vs. Recommended
                        </td>
                      </tr>
                      <tr>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className="border-none px-4 py-2 text-blue-500 underline text-sm font-medium font-['DM Sans']">
                          Approval Required
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
                <p className="text-blue-800 text-sm font-medium font-['DM Sans'] ">
                  Change Allocations
                </p>
                <div className="w-full  rounded my-6 AllocationTabelMain">
                  <table className="w-full table-auto">
                    <tbody>
                      <tr>
                        <td className="border-none px-4 py-2 text-blue-400 text-sm font-medium font-['DM Sans']">
                          Allocation
                        </td>
                        <td className="px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans'] border">
                          67%
                        </td>
                        <td className="px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans'] border">
                          45%
                        </td>
                        <td className="px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans'] border">
                          15%
                        </td>
                        <td className="px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans'] border">
                          80%
                        </td>
                      </tr>
                      <tr>
                        <td className="border-none px-4 py-2 text-blue-400 text-sm font-medium font-['DM Sans']">
                          Volume
                        </td>
                        <td className="border-none px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans']">
                          450
                        </td>
                        <td className="border-none px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans']">
                          85
                        </td>
                        <td className="border-none px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans']">
                          135
                        </td>
                        <td className="border-none px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans']">
                          80
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
                <p className="text-blue-800 text-sm font-medium font-['DM Sans'] ">
                  Exception Request
                </p>
                <p className="text-gray-800 text-sm font-medium font-['DM Sans'] mt-5">
                  To maintain min. allocation for DCA2 to rebuild performance.
                  DCA impacted by one off spike in attrition. Performance
                  monitoring initiated
                </p>
              </div>
            </div>
          </>
        ) : null} */}
        <div className="self-end mt-3">
          <button className="self-end bg-[#56478A] border-primary text-white pl-9 pr-9 pt-1 pb-1 rounded-3xl">
            Submit Changes
          </button>
          <button className="self-end bg-[#56478A] border-primary text-white pl-9 pr-9 pt-1 pb-1 rounded-3xl ml-2">
            Execute
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationEngine;
