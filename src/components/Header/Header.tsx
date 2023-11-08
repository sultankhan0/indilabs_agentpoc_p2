import React, { useEffect, useState } from "react";
import Ellipse from "../../assets/images/Ellipse 2.svg";
import Bell from "../../assets/icons/bell.svg";
import SearchIcon from "../../assets/icons/search.svg";
import { useLocation } from "react-router-dom";
import "./Header.scss";

type Props = {};

const Header = (props: Props) => {
  const [pageName, setPageName] = useState("");
  const [pathName] = useState(window.location.pathname);
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;
    if (pathName === "/home") {
      setPageName("Dashboard");
    } else if (
      pathName === "/monitoring"
      // pathName.startsWith("/monitoring")
    ) {
      setPageName("Risk Monitoring");
    } else if (pathName === "/diagnostics") {
      setPageName("Diagnostics");
    } else if (pathName === "/strategy") {
      setPageName("Strategy");
    } else if (pathName === "/execution") {
      setPageName("Execution");
    } else if (pathName === "/data") {
      setPageName("Data");
    } else if (pathName === "/strategy/allocationEngine") {
      setPageName("Allocation Strategy");
    } else if (pathName === "/strategy/changeControl") {
      setPageName("Change Control");
    } else if (pathName === "/strategy/optimization") {
      setPageName("Optimisation");
    } else if (pathName === "/monitoring/portfolio") {
      setPageName("Portfolio");
    } else if (pathName === "/monitoring/location") {
      setPageName("Bucket");
    } else if (pathName === "/monitoring/agency") {
      setPageName("Location");
    } else if (pathName === "/monitoring/writeoffs/Volume") {
      setPageName("Write Offs");
    } else if (pathName === "/monitoring/placements") {
      setPageName("Placements");
    } else if (pathName === "/monitoring/watchlist") {
      setPageName("Watchlist");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="w-full flex bg-neutral-50 justify-between items-center  mainHeaderWrapper">
        <h1
          className={`text-3xl font-['calibri' !important] px-1 py-2 ${location.pathname==="/strategy/allocationEngine" ? 'font-[400]': 'font-[500]'} ${
            location.pathname !== "/home" &&
            location.pathname !== "/strategy" &&
            location.pathname !== "/strategy/optimization" &&
            location.pathname !== "/strategy/allocationEngine" &&
            location.pathname !== "/strategy/changeControl" &&
            `ml-6`
          }`}
        >
          {pageName}
        </h1>
        {location.pathname === "/home" || location.pathname === "/data" ? (
          ""
        ) : (
          <div className=" h-[37px] px-1 py-1 lg:px-3 lg:py-2 rounded-lg border border-slate-500 justify-center items-center gap-2.5 inline-flex tabsectionHeader">
            <p className="text-[#000000] text-xs lg:text-lg p-0 m-0  tracking-tight ">
              Collections
            </p>
            <span className="border-r border-[#5C4E8E] mx-2 h-5"></span>
            <button className="text-[#5C4E8E] font-['DM Sans'] text-xs lg:text-[14px] font-[500] tracking-tight">
              Change
            </button>
          </div>
        )}
        <div className="justify-end p-8  items-center gap-11 flex h-21 leftContainHeader">
          <div className="justify-start items-center gap-2 lg:gap-4 flex">
            <div className="flex border-e gap-x-5 pe-5 me-5 iconHeader">
              <img src={SearchIcon} alt="" />
              <img src={Bell} alt="" />
            </div>

            <div className="flex justify-start items-center items-end gap-0.5 inline-flex profileIConHeader">
              <div className="nameHeader">
                <p className="text-black text-sm lg:text-base font-medium">
                  Amit Chandola
                </p>
                <p className="text-gray-400 text-xs lg:text-sm font-normal">
                  Senior Collection Executive
                </p>
              </div>
              <img className="w-10 h-10 rounded-full" src={Ellipse} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
