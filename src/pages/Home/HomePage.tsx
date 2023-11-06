import React, { useEffect, useState } from "react";
import Sidebar from "../../components/common/Sidebar";
import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
import Cards from "../../components/Cards/Cards";
import { fetchDashboardData } from "../../api/api";
import { saveDashboardData } from "../../redux/reducers/dashboardReducer/dashboardSlice";
import { useDispatch, useSelector } from "react-redux";

interface HomePageProps {
  // Define any props your homepage component may accept
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const [titleOne, setTitleOne] = useState(null)
  const dispatch = useDispatch()

  const fetchData = async () => {
    const res = await fetchDashboardData()
    console.log(res.data);
    dispatch(saveDashboardData(res.data))

  }
  useEffect(() => {
    // Fetch dashboard data when the component mounts
    fetchData();
  }, []);
  return (
    <div>
      <div className="p-[6px] lg:p-[28px] bg-[#fafafb] CommonBodyWrap">
        <DashboardHeader/>
        <Cards />
        <div className="flex justify-center sm:justify-end items-center gap-5 mt-10 p-5 flex-wrap ">
          <button className="bg-transparent py-2.5 px-6 border border-primary rounded-3xl text-primary" style={{ borderColor: "#6750A4", color: "#6750A4" }}>
            Change Portfolio
          </button>
          <button className="bg-primary py-2.5 px-6 border border-primary rounded-3xl text-white" style={{ background: "#6750A4" }}>
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
