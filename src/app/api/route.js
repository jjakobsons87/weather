export const dynamic = "force-dynamic"; // defaults to auto

const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

export const getLatLong = async (city, state) => {
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
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      apiKey;
    console.log(apiUrl);
    return apiUrl;
  }
};

const getForecast = async (apiUrl) => {
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();

  return data;
};

const getWeather = async (city, state) => {
  const latLong = await getLatLong(city, state);
  console.log(latLong);
  const Forecast = await getForecast(latLong);
  console.log(Forecast);

  return Forecast;
};

export default getWeather;
