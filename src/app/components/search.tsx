"use client";

import getWeather from "@/app/api/route";
import { OneCallWeather } from "@/types/weather";

export default function SearchComponent(props: {
  city: string;
  state: string;
  data: OneCallWeather | "";
  setCity: (value: string) => void;
  setState: (value: string) => void;
  setData: React.Dispatch<React.SetStateAction<OneCallWeather | "">>;
}) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(props.city, props.state);
    const result: OneCallWeather = await getWeather(props.city, props.state);
    props.setData(result);
  };
  return (
    <div className="border border-red-400 p-4">
      <h2>Search</h2>
      <form id="input" onSubmit={handleSubmit}>
        <label className="pr-4">City</label>
        <input
          name="city"
          id="city-input"
          value={props.city}
          onChange={(e) => props.setCity(e.target.value)}
          className="font-black w-24"
        />
        <span className="pr-2"></span>
        <label className="pr-4">State</label>
        <input
          name="state"
          id="state-input"
          value={props.state}
          onChange={(e) => props.setState(e.target.value)}
          className="w-6"
        />
        <span className="pr-2"></span>
        <button className="btn btn-primary outline p-4">Get Forecast</button>
      </form>
    </div>
  );
}
