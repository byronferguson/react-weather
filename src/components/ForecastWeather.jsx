import { WeatherCard } from "./WeatherCard.jsx";

export function ForecastWeather({ forecast }) {
  return (
    <div className="mt-4 grid grid-cols-5 gap-4">
      {forecast.map((f) => (
        <WeatherCard weather={f} key={f.date} className="flex-auto" />
      ))}
    </div>
  );
}
