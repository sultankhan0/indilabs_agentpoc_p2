import React from "react";

const Treatment = () => {
  return (
<>
<div className="">
<div className="h-[385px] table_wrapper bg-white w-300 p-4 rounded-xl mb-5 ">
      <table className="w-300 table-auto ">
        <thead>
          <tr>
            <th className="px-4 py-2 font-['calibri' !important] text-gray-800 font-[500] text-start">Treatment</th>
            <th className="px-4 py-2 font-['calibri' !important] text-gray-800 font-[500]">Status</th>
            <th className="px-4 py-2 font-['calibri' !important] text-gray-800 font-[500]">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 font-['calibri' !important] text-gray-800 font-[400]">Champion</td>
            <td className="px-4 py-2">
              <div className="flex items-center">
                <div className="status_logo bg-green-500 text-white w-3 h-3 rounded-full flex items-center justify-center">
                  
                </div>
                <span className="ml-1 font-['calibri' !important] text-gray-800 font-[400]">Active</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <button className="bg-white border border-gray-400 text-gray-500 py-1 px-6 rounded-lg">Stop</button>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-['calibri' !important] text-gray-800 font-[400]">Challenger1</td>
            <td className="px-4 py-2">
              <div className="flex items-center">
                <div className="status_logo bg-green-500 text-white w-3 h-3 rounded-full flex items-center justify-center">
                  
                </div>
                <span className="ml-1 font-['calibri' !important] text-gray-800 font-[400]">Active</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <button className="bg-white border border-gray-400 text-gray-500 py-1 px-6 rounded-lg">Stop</button>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-['calibri' !important] text-gray-800 font-[400]">Challenger2</td>
            <td className="px-4 py-2">
              <div className="flex items-center">
                <div className="status_logo bg-green-500 text-white w-3 h-3 rounded-full flex items-center justify-center">
                  
                </div>
                <span className="ml-1 font-['calibri' !important] text-gray-800 font-[400]">Active</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <button className="bg-white border border-gray-400 text-gray-500 py-1 px-6 rounded-lg">Stop</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
</>
  );
};

export default Treatment;
