import React from "react";
import LoginForm from "./pages/Login/LoginForm";
import HomePage from "./pages/Home/HomePage";
import DataPage from "./pages/Data/DataPage";
import Signup from "./pages/Signup/Signup";
import { Route, Routes } from "react-router-dom";
import CollectionDashboar from "./pages/CollectionDashboard/index";
import Monitoring from "./pages/Monitoring";
import Diagnostics from "./pages/Diagnostics";
import Strategy from "./pages/Strategy/MainStrategy";
import Execution from "./pages/Execution";
import Portfolio from "./pages/Monitoring/Portfolio";
import Location from "./pages/Monitoring/Location";
import Distribution from "./pages/Distribution";
import SubTabs from "./components/SubTabs/SubTabs";
import MaturationCurve from "./components/Monitoring/MaturationCurve";
import Daily from "./components/Monitoring/Daily";
import Writeoffs from "./pages/Monitoring/WriteOffs";
import ProductionActivity from "./pages/Monitoring/WriteOffs/ProductionActivity";
import DailyWorkableLine from "./components/Monitoring/DailyWorkableLine";
import WorkableVolume from "./components/Monitoring/WorkableVolume";
import PaidNotPaid from "./components/Monitoring/PaidNotPaid";
import DailyCycleLiquidation from "./components/Monitoring/DailyCycleLiquidation";
import Sidebar from "./components/common/Sidebar";
import Otp from "./pages/VeryfyOtp";
import Agency from "./pages/Monitoring/agency";
import WatchList from "./pages/Monitoring/watchlist";
import AllocationEngine from "./NewPages/AllocationEngine/AllocationEngine";
import Placements from "./pages/Monitoring/placements";
import Signout from "./pages/Signout";

import AllocationButtons from "./NewPages/AllocationEngine/AllocationButtons";
import SegVolumeBadTable from "./NewPages/AllocationEngine/segVolumeBadTable";
import TestPipeLine from "./NewPages/AllocationEngine/TestPipeLine";
import Performance from "./NewPages/AllocationEngine/performance";
import AllocationStackedBarChart from "./NewPages/AllocationEngine/allocationStackedBarChart";
import PLImpactChart from "./NewPages/AllocationEngine/PLImpactChart";
import ReviewPerformance from "./NewPages/AllocationEngine/ReviewPerformance";
import SequenceAttributes from "./NewPages/AllocationEngine/SequenceAttributes";
import InhouseXX from "./NewPages/AllocationEngine/InhouseXX";
// import SingleStackedBarChart from "./NewPages/AllocationEngine/singleStackedChart";

import "./App.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Treatment from "./NewPages/AllocationEngine/Treatments";
import TestId from "./NewPages/AllocationEngine/TestId";
import SegmentTable from "./NewPages/AllocationEngine/SegmentTable";

function App() {
  // console.log(process.env.REACT_APP_EMAIL, "REACT_APP_API_KEY");
  // console.log(process.env.REACT_APP_PASSWORD, "REACT_APP_API_KEY");
  const [previousPath, setPreviousPath] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === "/diagnostics") {
      if (previousPath) {
        navigate(previousPath);
      } else {
        navigate("/home");
      }
    } else {
      setPreviousPath(pathname);
    }
  }, [location.pathname, navigate, previousPath]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route element={<Sidebar />}>
          <Route path="/AllocationEngine" element={<AllocationEngine />} />
          <Route path="/InhouseXX" element={<InhouseXX />} />
          
          <Route path="/AllocationButtons" element={<AllocationButtons />} />
          <Route path="/segVolumeTable" element={<SegVolumeBadTable />} />
          <Route path="/TestPipeline" element={<TestPipeLine />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/stackedChart" element={<AllocationStackedBarChart />} />
          <Route path="/PLImpactChart" element={<PLImpactChart/>} />
          <Route path="/treatments" element={<Treatment/>} />
          <Route path="/testid" element={<TestId/>} />
          <Route path="/segmenttable" element={<SegmentTable/>} />
          <Route path="/SequenceAttributes" element={<SequenceAttributes/>} />
          {/* <Route path="/SingleStackedBarChart" element={<SingleStackedBarChart/>} /> */}

          <Route path="/home" element={<HomePage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/home/collection" element={<CollectionDashboar />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/strategy/optimization" element={<Strategy />} />
          <Route path="/strategy/allocationEngine/reviewPerformance" element={<ReviewPerformance />} />
          <Route
            path="/strategy/allocationEngine"
            element={<AllocationEngine />}
          />
          <Route path="/strategy/changeControl" element={<Execution />} />
          <Route path="/execution" element={<Execution />} />
          <Route path="/Sign out" element={<Signout />} />
          <Route path="/monitoring/portfolio" element={<Portfolio />} />
          <Route path="/monitoring/agency" element={<Agency />} />
          <Route path="/monitoring/placements" element={<Placements />} />
          <Route path="/monitoring/watchlist" element={<WatchList />} />
          <Route path="/monitoring/location" element={<Location />}>
            <Route
              index
              element={
                <>
                  <PaidNotPaid />
                  {/* <DailyCycleLiquidation title="Daily" data={data} />{" "} */}
                </>
              }
            />
            <Route
              path="Cycle"
              element={
                <>
                  <PaidNotPaid />
                  {/* <DailyCycleLiquidation title="Daily" data={data} />{" "} */}
                </>
              }
            />
            {/* <Route path="daily" element={<Daily />} /> */}
            <Route
              path="Risk Tier"
              element={
                <>
                  <PaidNotPaid />
                  {/* <DailyCycleLiquidation title="Month" data={data} />{" "} */}
                </>
              }
            />

            <Route path="mob" element={<MaturationCurve />} />
          </Route>
          <Route path="/monitoring/agency" element={<Distribution />} />
          <Route path="/monitoring/writeoffs" element={<Writeoffs />}>
            <Route
              path="Volume"
              element={
                <>
                  <WorkableVolume />
                  <DailyWorkableLine />
                </>
              }
            />
            <Route path="Activity" element={<ProductionActivity />} />

            <Route path="Outcome" element={<h1>Outcome tab</h1>} />
          </Route>
        </Route>
        {/**/}
        <Route
          path="/subtab"
          element={<SubTabs isDropDown={false} tabs={[]} />}
        />
      </Routes>
    </div>
  );
}

export default App;
