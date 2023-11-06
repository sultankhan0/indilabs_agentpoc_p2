import axios from "axios";
// import { fetchDashboardData } from './api';

const baseURL = "https://api.example.com";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchDashboardData = async () => {
  try {
    const response = await axios.get(
      "https://indilabs-json.vercel.app/dashboard"
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const GetCityData = async ({ city, bucket }: any) => {
  try {
    const response = await axios.get(
      `https://indilabs-json.vercel.app/strategy/default?city=${city}&bucket=${bucket}&product=home_loan`
      
      // `http://192.46.215.124:8000/default?city=bangalore&product=home_loan&bucket=b1`
      // `https://192.46.215.124:8000/default?city=kolkata&product=home_loan&bucket=b469`
      // `https://192.46.215.124:8000/default?city=kolkata&product=home_loan&bucket=b4`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
