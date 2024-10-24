export function WeatherCard({ weather }) {
  return (
    <div className="overflow-hidden rounded-lg bg-gradient-to-b from-indigo-500 from-30% to-indigo-200 text-slate-800 shadow">
      <div className="relative flex h-40 flex-col justify-end px-4 py-5 text-slate-100 sm:px-6">
        <div className="z-10 ml-8">
          <h2 className="text-2xl font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.85)]">
            {weather.date}
          </h2>
          <h3 className="text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.85)]">
            {weather.iconDescription}
          </h3>
        </div>
        <img
          src={weather.iconUrl}
          alt={weather.iconDescription}
          className="absolute -left-6 -top-6 mx-auto h-[200px] w-[200px]"
        />
      </div>
      <div className="px-4 py-5 sm:p-6">
        <p>
          <span className="font-semibold">🌡️ Temp:</span> {weather.tempF}
        </p>
        <p>
          <span className="font-semibold">🍃 Wind:</span> {weather.windMph}
        </p>
        <p>
          <span className="font-semibold">💧 Humidity:</span> {weather.humidity}
        </p>
      </div>
    </div>
  );
}
