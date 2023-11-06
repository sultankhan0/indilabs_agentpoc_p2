import React from "react";
import upredarrow from "../../assets/images/upredarrow.svg";
import downgreenarrow from "../../assets/images/downgreenarrow.svg";

const DiagnosticsCard: React.FC = () => {
  return (
    <article className="w-full h-[319px] p-4 bg-white rounded-xl shadow flex flex-col justify-start items-start gap-4">
      <h2 className="text-black text-base font-medium font-['DM Sans']">Diagnostics</h2>
      <section className="flex flex-col justify-start items-start gap-3 self-stretch">
        <h3 className="text-black text-sm font-semibold font-['DM Sans']">Portfolio</h3>
        <div className="flex items-center gap-1 pl-4">
          <p className="text-black text-xs font-medium font-['DM Sans']">B1 - B2 $ Flow%</p>
          <img src={upredarrow} alt="" className="" />
          <p className="text-black text-xs font-medium font-['DM Sans']">10%</p>
        </div>
      </section>
      <hr className="w-[100%]"/>
      <section className="flex flex-col justify-start items-start gap-3 self-stretch">
        <h3 className="text-black text-sm font-semibold font-['DM Sans']">Credit Quality</h3>
        <div className="flex flex-col justify-center items-start gap-2 pl-4">
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-medium font-['DM Sans']">Q1 2022 @ 12 MOB</p>
            <img src={upredarrow} alt="" className="" />
            <p className="text-black text-xs font-medium font-['DM Sans']">10%</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-medium font-['DM Sans']">Segment C 2+</p>
            <img src={downgreenarrow} alt="" className="" />
            <p className="text-black text-xs font-medium font-['DM Sans']">10%</p>
          </div>
        </div>
      </section>
      <hr className="w-[100%]"/>
      <section className="flex flex-col justify-start items-start gap-3 self-stretch">
        <h3 className="text-black text-sm font-semibold font-['DM Sans']">Production Gaps</h3>
        <div className="flex flex-col justify-center items-start gap-2 pl-4">
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-medium font-['DM Sans']">Prod hours</p>
            <img src={upredarrow} alt="" className="" />
            <p className="text-black text-xs font-medium font-['DM Sans']">10%</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-medium font-['DM Sans']">Utilization %</p>
            <img src={upredarrow} alt="" className="" />
            <p className="text-black text-xs font-medium font-['DM Sans']">10%</p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default DiagnosticsCard;
