"use client";
import { useState } from "react";
import Header from "./header";
import ForecastComponent from "./forecast";
import { OneCallWeather } from "@/types/weather";
import getWeather from "../api/route";

export default function MainApp() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [data, setData] = useState<OneCallWeather | null>(null);

  // async function setDefaultData() {
  //   let executed = false;
  //   if (!executed) {
  //     const result = await getWeather(defaultCity, defaultState);
  //     setData(result);
  //     executed = true;
  //   }
  // }
  // setDefaultData();
  return (
    <>
      <Header
        city={city}
        state={state}
        data={data}
        setCity={setCity}
        setState={setState}
        setData={setData}
      />
      <ForecastComponent
        data={data}
        city={city}
        state={state}
        setData={setData}
      />
    </>
  );
}
