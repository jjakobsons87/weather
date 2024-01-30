"use client";

import { useState } from "react";
import getWeather from "./api/route"; // Assuming you have an api.ts file with a fetchData function

export default function Home() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call the fetchData function with the city input
    const data = await getWeather(city, state);

    // Do something with the fetched data
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <form id="input" onSubmit={handleSubmit}>
          <label>City</label>
          <br />
          <input
            name="city"
            id="city-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="font-black"
          />
          <br />
          <label>State</label>
          <br />
          <input
            name="state"
            id="state-input"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <br />
          <br />
          <button type="submit" className="btn btn-primary outline p-4">
            Get Forecast
          </button>
        </form>
      </div>
    </main>
  );
}
