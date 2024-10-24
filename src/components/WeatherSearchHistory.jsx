import { titleCase } from "../utils/string.utils";

export function WeatherSearchHistory({ history = [], search }) {
  return (
    <section>
      <p className="mb-2 text-center">Recent Searches</p>
      <div className="overflow-hidden rounded-md bg-slate-100 text-slate-800 shadow">
        <ul role="list" className="divide-y divide-slate-300">
          {history.map((city) => (
            <li
              className="cursor-pointer px-6 py-4 hover:bg-indigo-200"
              key={city}
              onClick={() => search(city)}
            >
              {titleCase(city)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
