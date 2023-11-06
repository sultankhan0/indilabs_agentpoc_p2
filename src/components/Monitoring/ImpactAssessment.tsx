import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  LabelList,
} from "recharts";

const data = [
  {
    name: "DCA5",
    performance: 100,
    distribution: 60,
    color: "red",
  },
  {
    name: "Plc 3",
    performance: 60,
    distribution: 40,
    color: "green",
  },
  {
    name: "Jaipur",
    performance: 30,
    distribution: 0,
    color: "pink",
  },
  {
    name: "DCA3",
    performance: 30,
    distribution: 90,
    color: "orange",
  },
  {
    name: "Chennai",
    performance: 70,
    distribution: 40,
    color: "yellow",
  },
  {
    name: "Prod B",
    performance: 8,
    distribution: 10,
    color: "violet",
  },
];

const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  const getColor = (color: string) => {
    switch (color) {
      case "red":
        return "red";
      case "green":
        return "green";
      case "pink":
        return "pink";
      case "orange":
        return "orange";
      case "violet":
        return "violet";
      case "yellow":
        return "yellow";
      default:
        return "#FFFFFF"; // Default color
    }
  };
  const backgroundColor = getColor(payload.color);
  return (
    <g>
      <foreignObject x={cx - 18} y={cy - 35} width={90} height={40}>
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "5%",
            backgroundColor: "#ffffff",
            // border: "1px solid #000000",
            textAlign: "center",
            padding: "5px",
            position: "absolute",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: backgroundColor,
              // border: "1px solid #000000",
              textAlign: "center",
              padding: "0px",
              position: "absolute",
            }}
          ></div>
          <span className="ml-5 w-full"> {payload.name}</span>
          {/* <circle cx={cx} cy={cy} r={6} fill="#8884d8"  /> */}
        </div>
      </foreignObject>
    </g>
  );
};

const ImpactAssessment: React.FC = () => {
  return (
    <div className="relative w-[100%] mt-10 h-[548px] p-3 bg-white rounded-xl shadow flex-col justify-start items-center flex gap-5 xl:w-[48%]">
      <h1 className="text-black text-base font-medium font-['DM Sans']">
        Impact Assessment
      </h1>
      <p className="-rotate-90 absolute -left-[85px] top-[51%] text-[13px] italic text-[#56478A] font-[400] font-['calibri' !important] frequency_text">
        Frequency Of Occurrence (Likelihood)
      </p>
      <ResponsiveContainer width="90%" height={470}>
        <ScatterChart margin={{ top: 50, right: 50, bottom: 50, left: 50 }}>
          {/* {data.map((point, index) => (
            <text
              key={index}
              x={point.performance}
              y={point.distribution}
              dy={-10}
              textAnchor="middle"
            >
              {point.name}
            </text>
          ))} */}

          <g stroke="#cdd1db" strokeWidth={2}>
            <rect
              x="0"
              y="0"
              width="33%"
              height="33%"
              fill="#fffdeb"
              opacity="1"
            />
          </g>
          <g stroke="#cdd1db" strokeWidth={2}>
            <rect
              x="33%"
              y="0"
              width="33%"
              height="33%"
              fill="#ffebeb"
              opacity="1"
            />
          </g>
          <g stroke="#cdd1db" strokeWidth={2}>
            <rect
              x="66%"
              y="0"
              width="33%"
              height="33%"
              fill="#ffebeb"
              opacity="1"
            />
          </g>
          <g stroke="#cdd1db" strokeWidth={2}>
            <rect
              x="0"
              y="33%"
              width="33%"
              height="33%"
              fill="#f0ffeb"
              opacity="1"
            />
          </g>
          <g stroke="#cdd1db" strokeWidth={2}>
            <rect
              x="33%"
              y="33%"
              width="33%"
              height="33%"
              fill="#fffdeb"
              opacity="1"
            />
          </g>
          <g stroke="#cdd1db" strokeWidth={2}>
            <rect
              x="66%"
              y="33%"
              width="33%"
              height="33%"
              fill="#ffebeb"
              opacity="1"
            />
          </g>
          <g stroke="#cdd1db" strokeWidth={2}>
            <rect
              x="0"
              y="66%"
              width="33%"
              height="33%"
              fill="#f0ffeb"
              opacity="1"
            />
          </g>
          <g stroke="#cdd1db" strokeWidth={2}>
            <rect
              x="33%"
              y="66%"
              width="33%"
              height="33%"
              fill="#f0ffeb"
              opacity="1"
            />
          </g>
          <g stroke="#cdd1db" strokeWidth={2}>
            {/* <text x="100" y="90%" dy={18} textAnchor="middle" fill="#ff0000">
              Noise
            </text> */}
            <text x="85%" y="90%" dy={18} textAnchor="middle" fill="#ff0000">
              Blind Spots
            </text>

            <rect
              x="66%"
              y="66%"
              width="33%"
              height="33%"
              fill="#fffdeb"
              opacity="1"
            />
          </g>

          <XAxis
            dataKey="performance"
            name="Performance"
            axisLine={false}
            tickLine={false}
            tick={false}
          >
            <Label
              value=""
              position="insideBottom"
              offset={0}
              dy={10}
              style={{
                textAnchor: "middle",
                fontSize: 16,
                fontStyle: "italic",
              }}
            />
          </XAxis>
          <YAxis
            dataKey="distribution"
            name="Distribution"
            width={40}
            axisLine={false}
            tickLine={false}
            tick={false}
          >
            <Label
              value=""
              angle={-90}
              position="outside"
              offset={0}
              dx={-40}
              style={{
                textAnchor: "middle",
                fontSize: 16,
                fontStyle: "italic",
              }}
            />
          </YAxis>

          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter
            name="Data"
            data={data}
            fill="#8884d8"
            shape={<CustomDot />}
          />
        </ScatterChart>
      </ResponsiveContainer>
      <div
        style={{
          position: "absolute",
          top: "13%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          fontFamily: "Calibri",
          color: "GrayText",
        }}
      >
        Blind Spots
      </div>
      <div
        style={{
          position: "absolute",
          top: "13%",
          left: "80%",
          transform: "translate(-50%, -50%)",
          fontFamily: "Calibri",
          color: "GrayText",
        }}
      className="hotspot_text">
        HotSpots
      </div>
      <div
        style={{
          position: "absolute",
          top: "92%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          fontFamily: "Calibri",
          color: "GrayText",
        }}
      >
        Noise
      </div>
      <div
        style={{
          position: "absolute",
          top: "92%",
          left: "80%",
          transform: "translate(-50%, -50%)",
          fontFamily: "Calibri",
          color: "GrayText",
        }}
      className="Blind_Text">
        Blind Spots
      </div>

      <p className="-mt-5 text-[13px] italic text-[#56478A] font-[400] font-['calibri' !important] benchmark_text">
        Deviation from Benchmark(Severity)
      </p>
    </div>
  );
};

export default ImpactAssessment;
