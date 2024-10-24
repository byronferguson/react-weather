import { useEffect, useState } from "react";
import { CurrentWeather } from "./components/CurrentWeather";
import { ForecastWeather } from "./components/ForecastWeather";
import { PageHeader } from "./components/PageHeader";
import { WeatherSearch } from "./components/WeatherSearch";
import { WeatherSearchHistory } from "./components/WeatherSearchHistory";
import { useSearchHistory } from "./hooks/search-history";
import { WeatherService } from "./services/weather.service";

function App() {
  const [location, setLocation] = useState("shawnee");
  const { history, addItem } = useSearchHistory();
  const [current, setCurrent] = useState();
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    search(location);
  }, []);

  function search(location) {
    WeatherService.forecastByLocation(location).then(([current, forecast]) => {
      setLocation(location);
      addItem(location);
      setCurrent(current);
      setForecast(forecast);
    });
  }

  useEffect(() => {}, [location]);

  return (
    <>
      <PageHeader location={location} />
      <div className="flex gap-4">
        <aside className="flex w-1/5 flex-col gap-8">
          <WeatherSearch search={search} />
          <WeatherSearchHistory history={history} search={search} />
        </aside>
        <main>
          {current && <CurrentWeather current={current} />}
          <ForecastWeather forecast={forecast} />
        </main>
      </div>
    </>
  );
}

export default App;
