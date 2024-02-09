"use client";

import { OneCallWeather } from "@/types/weather";
import { useState } from "react";
import SearchComponent from "./search";

export default function Header(props: {
  city: string;
  state: string;
  data: OneCallWeather | "";
  setCity: (value: string) => void;
  setState: (value: string) => void;
  setData: React.Dispatch<React.SetStateAction<OneCallWeather | "">>;
}) {
  return (
    <header className="p-2">
      <SearchComponent
        city={props.city}
        state={props.state}
        data={props.data}
        setCity={props.setCity}
        setState={props.setState}
        setData={props.setData}
      />
    </header>
  );
}
