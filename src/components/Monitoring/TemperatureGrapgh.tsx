import { IoMdArrowDropup } from "react-icons/io";

const TemperatureGrapgh = () => {
  return (
    <div className="w-[100%] flex-col justify-center items-start inline-flex  p-3 bg-[white]">
      <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
        <div className="flex justify-start items-start gap-9 ">
          <div className="text-black text-sm font-medium font-['DM Sans']">
            6%
          </div>
          <div className="text-black text-sm font-medium relative font-['DM Sans']">
            4.2%
            <IoMdArrowDropup
              className="text text-xs absolute -bottom-6.5  left-1/2 transform -translate-x-1/2"
              style={{
                width: "20px",
                height: "25px",
              }}
            />
          </div>
          {/* <div className="text-black text-sm font-medium font-['DM Sans']">
            3%
          </div> */}
        </div>
        <div className="text-black text-sm font-medium font-['DM Sans']">3%</div>
      </div>
      <div className="w-full h-[18px] relative">
        <div className="w-full h-2 left-[-0.50px] tempLocationControl top-0 absolute  bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />
      </div>
    </div>
  );
};

export default TemperatureGrapgh;
