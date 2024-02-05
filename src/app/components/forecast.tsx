import { OneCallWeather } from "@/types/weather";
import getWeather from "../api/route";
import Image from "next/image";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import WeatherCard from "./weatherCard";

export default function ForecastComponent(props: {
  data: OneCallWeather;
  city: string;
  state: string;
}) {
  function translateUnixTime(unixTimeStamp: number) {
    const myDate = new Date(unixTimeStamp * 1000);
    const result = myDate.toTimeString().slice(0, 5);
    return result;
  }
  function translateUnixDate(unixTimeStamp: number) {
    const myDate = new Date(unixTimeStamp * 1000);
    return myDate.toDateString();
  }
  const currentIcon =
    props.data &&
    "https://openweathermap.org/img/wn/" +
      props.data.current.weather[0].icon +
      "@2x.png";

  return (
    <div>
      {props.data && (
        <div>
          <WeatherCard
            header={`${props.city}, ${props.state} as of ${""}
          ${translateUnixTime(props.data.current.dt)}`}
            body={`${props.data.current.temp}`}
            footer={`H: ${props.data.daily[0].temp.max} L: ${props.data.daily[0].temp.min}`}
          />
          <h2>
            Current weather for {props.city}, {props.state}
          </h2>
          <div>{translateUnixDate(props.data.current.dt)}</div>
          <div>
            Current Temp: {props.data.current.temp}°F <br />
            Feels Like: {props.data.current.feels_like}°F <br />
            Wind: {props.data.current.wind_speed} MPH <br />
            Sunrise: {translateUnixTime(props.data.current.sunrise)} <br />
            Sunset: {translateUnixTime(props.data.current.sunset)} <br />
            UVI: {props.data.current.uvi} <br />
          </div>
          {/* placeholder for weather icon */}
          <img src={currentIcon} alt="Weather Icon" width={50} height={50} />
        </div>
      )}
    </div>
  );
}
