// import { useState } from "react";
// import SearchIcon from "../../assets/images/search-icon.png";

// const data = [
//   {
//     fileName: "B1 ",
//     fileSize: "12.600",
//     uploadDate: "70%",
//   },
//   {
//     fileName: "Volum",
//     fileSize: "8787",
//     uploadDate: "19/05/23 23:12",
//   },
//   {
//     fileName: "student Loans",
//     fileSize: "203 MB",
//     uploadDate: "19/05/23 23:12",
//   },
//   {
//     fileName: "Auto Loanes",
//     fileSize: "203 MB",
//     uploadDate: "19/05/23 23:12",
//   },
// ];

// const PaidNotPaid = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState(data);

//   const handleInputChange = (e: any) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     const filtered = data.filter((item) =>
//       item.fileName.toLowerCase().includes(value.toLowerCase())
//     );

//     setFilteredData(filtered);
//   };
//   console.log(filteredData);
//   return (
//     <div className=" flex flex-col items-start w-[716px] h-[368px]">
//       <h1 className="text-black text-2xl font-medium">Your Files</h1>

//       <div className=" mt-[20px] w-[716px] h-[320px] bg-white rounded-xl shadow flex-col justify-start items-start inline-flex border-gray border-[1]">
//         <div className="self-stretch px-5 py-3  rounded-tl-xl rounded-tr-xl border-b border-gray-100 justify-between items-start  inline-flex">
//           <div className="w-40 text-zinc-700 text-1xl  font-normal leading-[18px]">
//             Lovation Analysis
//           </div>
//         </div>
//         {/* {filteredData.map((file, index) => (
//           <>
//             <div className="self-stretch h-[225px] rounded-xl flex-col justify-start items-start flex">
//               <div className="self-stretch px-5 py-3 bg-white border-b border-gray-100 justify-between items-start  inline-flex">
//                 <div className="w-40 text-gray-900 text-sm font-normal leading-[21px]">
//                   {file.fileName}{" "}
//                 </div>
//                 <div className="text-center text-gray-900 text-sm font-normal leading-[21px]">
//                 </div>
//                 <div className="text-center text-gray-900 text-sm font-normal leading-[21px]">
//                   {file.uploadDate}{" "}
//                 </div>
//               </div>
//             </div>

//             <div className="overflow-x-auto">

//             </div>
//           </>
//         ))} */}
//         <table className="min-w-full">
//           <thead>
//             <tr>
//               <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//                 Test
//               </th>
//               <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//                 Volume
//               </th>
//               <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//                 Sep
//               </th>
//               <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//                 Aug
//               </th>
//               <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//                 Jul
//               </th>
//               <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//                 3MAvg
//               </th>
//             </tr>
//           </thead>

//           <tbody className="bg-white divide-y divide-gray-200">
//             {/* <tr>
//                     <td className="px-6 py-4 whitespace-no-wrap">
//                       Row 1, Cell 1
//                     </td>
//                     <td className="px-6 py-4 whitespace-no-wrap">
//                       Row 1, Cell 2
//                     </td>
//                     <td className="px-6 py-4 whitespace-no-wrap">
//                       Row 1, Cell 3
//                     </td>
//                   </tr> */}
//             {filteredData.map((file, index) => (
//               <>
//                 {/* <div className="self-stretch h-[225px] rounded-xl flex-col justify-start items-start flex">
//             <div className="self-stretch px-5 py-3 bg-white border-b border-gray-100 justify-between items-start  inline-flex">
//               <div className="w-40 text-gray-900 text-sm font-normal leading-[21px]">
//                 {file.fileName}{" "}
//               </div>
//               <div className="text-center text-gray-900 text-sm font-normal leading-[21px]">
//               </div>
//               <div className="text-center text-gray-900 text-sm font-normal leading-[21px]">
//                 {file.uploadDate}{" "}
//               </div>
//             </div>
//           </div> */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-no-wrap">
//                     {file.fileName}{" "}
//                   </td>
//                   <td className="px-6 py-4 whitespace-no-wrap">
//                     {file.fileSize}{" "}
//                   </td>
//                   <td className="px-6 py-4 whitespace-no-wrap">
//                     {file.uploadDate}
//                   </td>
//                   <td className="px-6 py-4 whitespace-no-wrap">
//                     {file.uploadDate}
//                   </td>
//                   <td className="px-6 py-4 whitespace-no-wrap">
//                     {file.uploadDate}
//                   </td>
//                   <td className="px-6 py-4 whitespace-no-wrap">
//                     {file.uploadDate}
//                   </td>
//                 </tr>
//               </>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <button className=" self-end mt-[20%] ml-[24%] w-[87px] h-10 px-4 py-2.5 rounded-[100px] border border-zinc-500 justify-center items-center inline-flex text-center text-[#6750a4] text-sm font-medium leading-tight ">
//         Back vin
//       </button>
//     </div>
//   );
// };

// export default PaidNotPaid;

// type PaidNotPaidProps = {
//   testValues: any[]; // Define the type for the 'values' prop as an array of numbers
// };

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  activeStateData,
  locationData,
  mapData,
} from "../../redux/reducers/locationReducer/locationSlice";

const PaidNotPaid = (props: { setSelectedCity?: (value: string) => void }) => {
  const location = useLocation();
  const [tableName, setTableName] = useState("");

  const dispatch = useDispatch();

   // const [activeData, setActiveData] = useState({});
  const [activeData, setActiveData] = useState(0);

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/monitoring/location") {
      ClearData();
      setTableName("Bucket Analysis");
    } else if (pathname === "/monitoring/agency") {
      ClearData();
      setTableName("Location Analysis");
    } else if (pathname === "/monitoring/placements") {
      ClearData();
      setTableName("Placement Pipeline");
    } else if (pathname === "/monitoring/agency") {
      ClearData();
      setTableName("DCA Analysis");
    } else if (pathname === "/monitoring/placements") {
      ClearData();
      setTableName("Placement Pipeline");
    }
  }, []);

  const ClearData = () => {
    dispatch(activeStateData(0));
    dispatch(locationData([]));
  };
  const indiaCities = {
    mumbai: [19.076, 72.8777],
    delhi: [28.6139, 77.209],
    bangalore: [12.9716, 77.5946],
    hyderabad: [17.385, 78.4867],
    chennai: [13.0827, 80.2707],
    kolkata: [22.5726, 88.3639],
    pune: [18.5204, 73.8567],
    ahmedabad: [23.0225, 72.5714],
    jaipur: [26.9124, 75.7873],
    lucknow: [26.8467, 80.9462],
  };

  const tableData = [
    {
      cityName: "Pune",
      Test: "B1",
      Volume: 12600,
      Sep: "70%",
      Aug: "60%",
      Jul: "65%",
      Avg: "68%",
      position: [
        [19.076, 72.8777],
        [28.6139, 77.209],
        [12.9716, 77.5946],

        [13.0827, 80.2707],
        [26.1445, 91.7362],
      ],
      status: "green",
      percentage: "",
    },
    {
      cityName: "Dehli",
      Test333: "B2",
      Volume: 6500,
      Sep: "33%",
      Aug: "28%",
      Jul: "35%",
      Avg: "30%",
      position: [
        [19.076, 72.8777],
        [28.6139, 77.209],
        [12.9716, 77.5946],
        [26.9124, 75.7873],
        [26.1445, 91.7362],
      ],
      status: "red",
    },
    {
      cityName: "Mumbai",
      Test: "B3",
      Volume: 4200,
      Sep: "33%",
      Aug: "28%",
      Jul: "25%",
      Avg: "20%",
      position: [
        [19.076, 72.8777],
        [28.6139, 77.209],
        [12.9716, 77.5946],
        [26.9124, 75.7873],
      ],
      status: "green",
    },
    {
      cityName: "Hyderabad+",
      Test: "B4+",
      Volume: 3800,
      Sep: "33%",
      Aug: "28%",
      Jul: "20%",
      Avg: "18%",
      position: [
        [19.076, 72.8777],
        [28.6139, 77.209],
        [12.9716, 77.5946],
        [26.8467, 80.9462],
        [26.1445, 91.7362],
      ],
      status: "orange",
    },
  ];
 
  useEffect(()=>{
    dispatch(locationData(tableData[0]));
  },[])

  return (
    <div className="w-[100%] h-[447px]  pt-5 pr-5 pl-5  mt-10 shadow-md bg-white lg:w-[49%] placemnetHeaight rounded-2xl">
      <h1 className=" text-zinc-500 text-xl  font-medium leading-[18px]">
        {tableName}
      </h1>

      <div className="overflow-x-auto">
        <table className="w-[100%]" cellPadding={20}>
          <thead>
            <tr className="border-b-1 flex justify-evenly ">
              <th
                className={`font-medium text-gray-500  tracking-wider text-start w-[19.6%] -ml-1 mr-2 ${
                  tableName !== "Placement Pipeline" && "-ml-1 mr-0"
                }  `}
              >
                {tableName === "Placement Pipeline"
                  ? "Placement"
                  : tableName === "Bucket Analysis"
                  ? "Bucket"
                  : "City"}
              </th>
              {/* <th className={`font-medium text-gray-500  tracking-wider text-start w-[19.6%] -ml-3 mr-2 ${tableName !== "Placement Pipeline" && '-ml-1 mr-0'}  `}>
                {tableName === "Placement Pipeline" ? "Placement" : "Test"}
              </th> */}
              <th className="font-medium text-gray-500  tracking-wider text-center w-[16%]">
                Volume
              </th>
              <th className=" font-medium text-gray-500  tracking-wider text-center w-[16%] ">
                Sep
              </th>
              <th className=" font-medium text-gray-500  tracking-wider text-center w-[16%]">
                Aug
              </th>
              <th className="font-medium text-gray-500 tracking-wider text-center w-[16%]">
                Jul
              </th>
              <th className="font-medium text-gray-500  tracking-wider text-center w-[16%]">
                3MAvg
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {tableData?.map((data, id) => {
              if (id > 3 && !(tableName === "DCA Analysis")) return null;
              return (
                <tr
                  className={` rounded-xl  border-gray-500 flex justify-evenly  ${
                    id === activeData &&
                    `  border-[#6E629B] border-[2.5px] shadow-lg`
                  } cursor-pointer `}
                  onClick={() => {
                    setActiveData(id);
                    dispatch(activeStateData(id + 1));
                    dispatch(locationData(data));
                    dispatch(mapData(data));
                    props.setSelectedCity &&
                      props.setSelectedCity(data.cityName);
                  }}
                >
                  <td
                    className={
                      "text-start font-normal text-gray-500  w-[19.6%]"
                    }
                  >
                    {tableName === "Bucket Analysis" &&
                      `B ${id + 1 <= 3 ? id + 1 : id + 1 + `+`}`}
                    {tableName === "Placement Pipeline" &&
                      `Plc ${id + 1 <= 3 ? id + 1 : id + 1 + `+`}`}
                    {tableName === "Location Analysis" &&
                      `${data.cityName}  ${id <= 3 ? "" : "+"}`}
                  </td>
                  <td className="text-center font-normal text-gray-500 flex flex-col w-[16%]">
                    {data.Volume}
                    {tableName === "DCA Analysis" && (
                      <span className="text-[14px] text-blue-800 font-[600]">
                        {data?.percentage}
                      </span>
                    )}
                  </td>
                  <td className="text-center font-normal text-gray-500 text-[14px] w-[16%]">
                    {data.Sep}
                  </td>
                  <td
                    className={`text-center font-normal text-gray-500 text-[14px] w-[16%]`}
                  >
                    {data.Aug}
                  </td>
                  <td
                    className={`text-center font-normal text-gray-500 text-[14px] w-[16%]`}
                  >
                    {id === 2 ? (
                      <div className="bg-green-600 text-white w-[80%]  rounded text-center font-semibold">
                        {data.Avg}
                      </div>
                    ) : id === 3 ? (
                      <div className="bg-[#ffc65c] text-white w-[80%]  rounded text-center font-semibold">
                        {data.Avg}
                      </div>
                    ) : (
                      <>{data.Jul}</>
                    )}
                  </td>
                  <td className=" font-normal text-gray-500 text-[14px] text-center flex justify-center items-center w-[16%]">
                    <div className="bg-green-600 text-white w-[100%] rounded text-center font-semibold">
                      {data.Avg}
                    </div>
                  </td>
                </tr>
              );
            })}
            {/* <tr className="border-b">
              <td className="text-center font-normal text-gray-500">B2</td>
              <td className="text-center font-normal text-gray-500">6,500</td>
              <td className="text-center font-normal text-gray-500 text-[14px]">
                33%
              </td>
              <td className="text-center font-normal text-gray-500 text-[14px]">
                28%
              </td>
              <td className="text-center font-normal text-gray-500 text-[14px]">
                35%
              </td>
              <td className="text-center font-normal text-gray-500 text-[14px]">
                <div className="bg-green-600 text-white w-[60px] rounded">
                  30%
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="text-center font-normal text-gray-500">B3</td>
              <td className="text-center font-normal text-gray-500">4,200</td>
              <td className="text-center font-normal text-gray-500 text-[14px]">
                33%
              </td>
              <td className="text-center font-normal text-gray-500 text-[14px]">
                28%
              </td>
              <td className="text-center font-normal text-gray-500r">
                <div className="bg-green-600 text-white w-[60px] rounded">
                  25%
                </div>
              </td>
              <td className="text-center font-normal text-gray-500 text-[14px]">
                20%
              </td>
            </tr>
            <tr className="border-b">
              <td className=" text-center font-normal text-gray-500">B4+</td>
              <td className=" text-center font-normal text-gray-500">3,800</td>
              <td className="  text-center font-normal text-gray-500 text-[14px]">
                33%
              </td>
              <td className="  text-center font-normal text-gray-500 text-[14px]">
                28%
              </td>
              <td className=" text-center font-normal text-gray-500 text-[14px]">
                <div className="bg-yellow-400 text-white w-[60px] rounded">
                  20%
                </div>
              </td>
              <td className=" text-center font-normal text-gray-500 text-[14px]">
                18%
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaidNotPaid;
