"use client";

import Link from "next/link";
import { useState } from "react";
import SearchComponent from "../components/search";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [data, setData] = useState<string | object | null>(null);

  return (
    <section>
      <header>
        {data && (
          <div>
            <h1>
              Forecast for {city}, {state}
            </h1>
          </div>
        )}
      </header>
      <SearchComponent
        city={city}
        state={state}
        data={data}
        setCity={setCity}
        setState={setState}
        setData={setData}
      />
      {children}
    </section>
  );
}
