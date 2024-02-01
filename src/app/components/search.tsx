"use client";
import Link from "next/link";
import getWeather from "@/app/api/route";
import { OneCallWeather } from "@/types/weather";
import { revalidatePath } from "next/cache";

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
    console.log(result);
    // revalidatePath("/dashboard");
  };
  return (
    <div className="border border-red-400">
      <h2>Search</h2>
      <form id="input" onSubmit={handleSubmit}>
        <label>City</label>
        <br />
        <input
          name="city"
          id="city-input"
          value={props.city}
          onChange={(e) => props.setCity(e.target.value)}
          className="font-black"
        />
        <br />
        <label>State</label>
        <br />
        <input
          name="state"
          id="state-input"
          value={props.state}
          onChange={(e) => props.setState(e.target.value)}
        />
        <br />
        <br />
        <button className="btn btn-primary outline p-4">Get Forecast</button>
      </form>
    </div>
  );
}
