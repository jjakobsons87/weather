"use client";

import Link from "next/link";
import { useState } from "react";

import ForecastComponent from "../components/forecast";
import { OneCallWeather } from "@/types/weather";
import SideNav from "../ui/dashboard/sidenav";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [data, setData] = useState<OneCallWeather | "">("");

  return (
    <section className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <SideNav
        city={city}
        state={state}
        data={data}
        setCity={setCity}
        setState={setState}
        setData={setData}
      />
      <ForecastComponent data={data} city={city} state={state} />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </section>
  );
}
