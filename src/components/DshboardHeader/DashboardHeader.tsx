import React, { useState, useEffect } from "react";
import vectorIcon from "../../assets/icons/Vector.svg";
import totalDelinIcon from "../../assets/icons/Vector2.svg";
import editPencil from "../../assets/icons/border_color.svg";
import Save from "../../assets/icons/Save.svg";
import Recovery from "../../assets/icons/Recovery.svg";
import Gross from "../../assets/icons/Gross.svg";
import VerticalLine from "../../assets/icons/vertical-line.png";
import { fetchDashboardData } from "../../api/api";
import { saveDashboardData } from "../../redux/reducers/dashboardReducer/dashboardSlice";
import { useDispatch } from "react-redux";
import "./DashBoardHeader.scss"

type Props = {};

interface DashboardData {
  title: string;
  value: string;
}

const DashboardHeader = (props: Props) => {
  const dispatch = useDispatch();
  const [dashboardData, setDashboardData] = useState<any>({});
  const [activeTab, setActiveTab] = useState("balance"); 

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const res = await fetchDashboardData();
      console.log("check", res.data);
      dispatch(saveDashboardData(res.data));
      setDashboardData(res.data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "balance":
        return renderBalance();
      case "month":
        return renderMonth();
      case "units":
        return renderUnits();
      default:
        return null;
    }
  };

  const renderBalance = () => {
    return dashboardData?.kpi?.balance?.map((item: any) =>
      item.is_active ? (
        <div key={item.title} className={item.title == "Gross Recovery" ? "CustomTabsDashHeader" : "CustomTabsDashHeader border-r-2"}>
          {" "}
          {/* Add a unique key */}
          {/* balance */}
          <div className={item.title == "Gross Recovery" ? "min-w-auto  justify-start items-center gap-2 flex" : "min-w-[264px]  justify-start items-center gap-2 flex"}>
            <div
              className={`px-2 py-1.5  rounded-lg justify-start items-start gap-2.5 flex ${
                item?.title === "Total Deliquency"
                  ? "bg-violet-100"
                  : item?.title === "2+Deliquency"
                  ? "bg-emerald-100"
                  : item.title === "Gross WO"
                  ? "bg-blue-100  "
                  : item?.title === "Gross Recovery"
                  ? "bg-rose-100"
                  : "bg-orange-100"
              } `}
            >
              <img
                className="w-10 h-10"
                src={
                  item?.title === "Total Deliquency"
                    ? totalDelinIcon
                    : item?.title === "2+Deliquency"
                    ? Save
                    : item.title === "Gross WO"
                    ? Gross
                    : item?.title === "Gross Recovery"
                    ? Recovery
                    : vectorIcon
                }
                alt=""
              />
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-gray-400 text-sm font-normal font-['DM Sans']">
                {item?.title}
              </div>
              <div className="text-black text-base font-normal font-['DM Sans'] tracking-wide">
                {item?.value}
              </div>
            </div>
          </div>
        </div>
      ) : null
    );
  };

  const renderMonth = () => {
    return dashboardData?.kpi?.month_end?.map((item: any) =>
      item.is_active ? (
        <div key={item.title} className={item.title == "Gross Recovery" ? "CustomTabsDashHeader" : "CustomTabsDashHeader border-r-2"}>
          {" "}
          {/* Add a unique key */}
          {/* month */}
          <div className={item.title == "Gross Recovery" ? "min-w-auto  justify-start items-center gap-2 flex" : "min-w-[264px]  justify-start items-center gap-2 flex"}>
            <div
              className={`px-2 py-1.5  rounded-lg justify-start items-start gap-2.5 flex ${
                item?.title === "Total Deliquency"
                  ? "bg-violet-100"
                  : item?.title === "2+Deliquency"
                  ? "bg-emerald-100"
                  : item.title === "Gross WO"
                  ? "bg-blue-100  "
                  : item?.title === "Gross Recovery"
                  ? "bg-rose-100"
                  : "bg-orange-100"
              } `}
            >
              <img
                className="w-10 h-10"
                src={
                  item?.title === "Total Deliquency"
                    ? totalDelinIcon
                    : item?.title === "2+Deliquency"
                    ? Save
                    : item.title === "Gross WO"
                    ? Gross
                    : item?.title === "Gross Recovery"
                    ? Recovery
                    : vectorIcon
                }
                alt=""
              />
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-gray-400 text-sm font-normal font-['DM Sans']">
                {item?.title}
              </div>
              <div className="text-black text-base font-normal font-['DM Sans'] tracking-wide">
                {item?.value}
              </div>
            </div>
          </div>
        </div>
      ) : null
    );
  };

  const renderUnits = () => {
    return dashboardData?.kpi?.units?.map((item: any) =>
      item.is_active ? (
        <div key={item.title} className={item.title == "Gross Recovery" ? "CustomTabsDashHeader" : "CustomTabsDashHeader border-r-2"}>
          {" "}
          {/* Add a unique key */}
          {/* units */}
          <div className={item.title == "Gross Recovery" ? "min-w-auto  justify-start items-center gap-2 flex" : "min-w-[264px]  justify-start items-center gap-2 flex"}>
            <div
              className={`px-2 py-1.5  rounded-lg justify-start items-start gap-2.5 flex ${
                item?.title === "Total Deliquency"
                  ? "bg-violet-100"
                  : item?.title === "2+Deliquency"
                  ? "bg-emerald-100"
                  : item.title === "Gross WO"
                  ? "bg-blue-100  "
                  : item?.title === "Gross Recovery"
                  ? "bg-rose-100"
                  : "bg-orange-100"
              } `}
            >
              <img
                className="w-10 h-10"
                src={
                  item?.title === "Total Deliquency"
                    ? totalDelinIcon
                    : item?.title === "2+Deliquency"
                    ? Save
                    : item.title === "Gross WO"
                    ? Gross
                    : item?.title === "Gross Recovery"
                    ? Recovery
                    : vectorIcon
                }
                alt=""
              />
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-gray-400 text-sm font-normal font-['DM Sans']">
                {item?.title}
              </div>
              <div className="text-black text-base font-normal font-['DM Sans'] tracking-wide">
                {item?.value}
              </div>
            </div>
          </div>
        </div>
      ) : null
    );
  };

  return (
    <div className="w-[100%] flex  px-5 py-5 bg-white rounded-xl shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)] flex-col justify-start items-start gap-4 ">
      <div className="w-full flex flex-col md:flex-row md:justify-between">
        <div>
          <span className="text-black text-lg font-bold font-['DM Sans']">
            Portfolio:
          </span>
          <span className="text-black text-lg font-normal font-['DM Sans'] ml-1">
            Personal Loan
          </span>
        </div>
        <div >
          <ul
            className="flex mb-[10px] flex-wrap mt-[-10px] text-sm font-medium text-center DashBoardHeaderTabs"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="m-auto" role="presentation">
              {/* <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "balance"
                    ? "border-violet-500"
                    : "border-transparent"
                }`}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={activeTab === "balance"}
                onClick={() => setActiveTab("balance")}
              >
                Balance
              </button> */}

              <button
                className={`inline-block p-2 border-b-2 rounded-t-lg   text-xs lg:text-base font-semibold tracking-tight ${
                  activeTab === "balance"
                  ? "border-violet-500 text-[#5C4E8E]"
                  : "border-transparent text-black"
                }`}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={activeTab === "balance"}
                onClick={() => setActiveTab("balance")}
              >
                Balance
              </button>
            </li>
            <li className="m-auto p-1" role="presentation">
              <button
                className={`inline-block p-2 border-b-2 rounded-t-lg text-xs lg:text-base font-semibold tracking-tight ${
                  activeTab === "month"
                  ? "border-violet-500 text-[#5C4E8E]"
                  : "border-transparent text-black"
                }`}
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected={activeTab === "month"}
                onClick={() => setActiveTab("month")}
              >
                Month
              </button>
            </li>
            <li className="m-auto p-1" role="presentation">
              <button
                className={`inline-block p-2 border-b-2 border-transparent rounded-t-lg  text-xs lg:text-base font-semibold tracking-tight ${
                  activeTab === "units"
                    ? "border-violet-500 text-[#5C4E8E]"
                    : "border-transparent text-black"
                }`}
                id="settings-tab"
                data-tabs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected={activeTab === "units"}
                onClick={() => setActiveTab("units")}
              >
                Units
              </button>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-black text-sm font-bold">Last synced:</span>
          <span className="text-black text-sm font-normal">
            {" "}
            19/05/2023 04:00pm
          </span>
        </div>
      </div>
        <div className="self-stretch flex flex-wrap justify-start xl:justify-between  items-center gap-5 DashbOardHeaderCards">
          {renderContent()} {/* Render the content based on the active tab */}
      </div>
    </div>
  );
};

export default DashboardHeader;
