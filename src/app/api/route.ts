import { OneCallWeather } from "@/types/weather";

export const dynamic = "force-dynamic"; // defaults to auto

const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

// need to get lat/long of the city in order to get the weather data
export const getLatLong = async (city: string, state: string) => {
  console.log(city, state);
  const res = await fetch(
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
      city +
      "," +
      state +
      "," +
      "usa&appid=" +
      apiKey
  );
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    const lat = data[0].lat;
    const lon = data[0].lon;
    console.log(lat, lon);
    const apiUrl =
      "https://api.openweathermap.org/data/3.0/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&exclude=minutely,alerts&appid=" +
      apiKey +
      "&units=imperial";
    console.log(apiUrl);
    return apiUrl;
  }
};

// use the lat/long to get the weather data - this passes in the actual url not the lat/long - the url is created in the getLatLong
const getForecast = async (apiUrl: string) => {
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data: OneCallWeather = await res.json();

  return data;
};

// actually make both calls and get weather -this is called onSubmit
const getWeather = async (city: string, state: string) => {
  const latLong = await getLatLong(city, state);
  console.log(latLong);
  const Forecast = await getForecast(latLong as string);
  console.log(Forecast);

  return Forecast;
};

export default getWeather;
