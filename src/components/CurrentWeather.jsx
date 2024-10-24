import { WeatherCard } from "./WeatherCard.jsx";

export function CurrentWeather({ current }) {
  return <WeatherCard weather={current} />;
}
