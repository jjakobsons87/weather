import { OneCallWeather } from "@/types/weather";
import getWeather from "../api/route";
import WeatherCard from "./weatherCard";

export default async function ForecastComponent(props: {
  data: OneCallWeather;
  city: string;
  state: string;
  setData: React.Dispatch<React.SetStateAction<OneCallWeather | "">>;
}) {
  function translateUnixTime(unixTimeStamp: number) {
    const myDate = new Date(unixTimeStamp * 1000);
    let time: string | Array = myDate.toTimeString().slice(0, 5);

    time = time.split(":");

    let hours = Number(time[0]);
    let minutes = Number(time[1]);

    let timeValue;
    if (hours > 0 && hours <= 12) {
      timeValue = "" + hours;
    } else if (hours > 12) {
      timeValue = "" + (hours - 12);
    } else if (hours == 0) {
      timeValue = "12";
    }

    timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes; // get minutes
    timeValue += hours >= 12 ? " P.M." : " A.M."; // get AM/PM

    return timeValue;
  }

  function translateUnixDate(unixTimeStamp: number) {
    const myDate = new Date(unixTimeStamp * 1000);
    return myDate.toDateString();
  }
  // const currentIcon =
  //   props.data &&
  //   "https://openweathermap.org/img/wn/" +
  //     props.data.current.weather[0].icon +
  //     "@2x.png";

  return (
    <div className="p-6">
      <div className="gap-2 grid grid-cols-2">
        <WeatherCard
          header={`${props.city}, ${props.state} as of ${""}
          ${translateUnixTime(props.data.current.dt)}`}
          body={`${props.data.current.temp}°`}
          footer={`H: ${props.data.daily[0].temp.max}° L: ${props.data.daily[0].temp.min}°`}
          className="col-span-2"
        />
        <WeatherCard
          header="Feels Like"
          body={`${props.data.current.feels_like}°`}
        />
        <WeatherCard
          header="Humidity"
          body={`${props.data.current.humidity}%`}
        />
        <WeatherCard
          header="Visibility"
          body={`${props.data.current.visibility} miles`}
        />
        <WeatherCard header="UV Index" body={`${props.data.current.uvi}`} />
        <WeatherCard header="Wind" body={`${props.data.current.wind_speed}`} />
        {/* combine sunrise/set into one card - have it be dependent on time of day when it shows what  */}
        <WeatherCard
          header="Sunrise"
          body={`${translateUnixTime(props.data.current.sunrise)}`}
        />
        <WeatherCard
          header="Sunset"
          body={`${translateUnixTime(props.data.current.sunset)}`}
        />
        <WeatherCard
          header="Pressure"
          body={`${props.data.current.pressure}`}
        />
        {/* placeholder for weather icon */}
        {/* <img src={currentIcon} alt="Weather Icon" width={50} height={50} /> */}
      </div>
    </div>
  );
}
