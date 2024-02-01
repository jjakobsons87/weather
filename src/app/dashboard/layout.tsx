"use client";

import Link from "next/link";
import { useState } from "react";
import SearchComponent from "../components/search";
import ForecastComponent from "../components/forecast";
import { OneCallWeather } from "@/types/weather";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [data, setData] = useState<OneCallWeather | "">("");

  return (
    <section className="p-6">
      <div>
        {data && (
          <div>
            <h1>
              Forecast for {city}, {state}
            </h1>
          </div>
        )}
      </div>
      <SearchComponent
        city={city}
        state={state}
        data={data}
        setCity={setCity}
        setState={setState}
        setData={setData}
      />
      <ForecastComponent data={data} city={city} state={state} />
      {children}
    </section>
  );
}
