import { WeatherCard } from "./WeatherCard";

export function CurrentWeather({ current }) {
  return <WeatherCard weather={current} />;
}
