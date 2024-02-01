import getWeather from "../api/route";

export default async function ForecastComponent(city: string, state: string) {
  const data = await getWeather(city, state);

  return (
    <div>
      <div>
        <h2>Forecast for {city}</h2>
        <div>{data.current.dt}</div>
      </div>
    </div>
  );
}
