import { useState } from "react";

export function WeatherSearch({ search }) {
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!location.trim() === 0) return;

    search(location);
    setLocation("");
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="email"
          id="location"
          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Kansas City"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center gap-x-2 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <span>🔎</span>
        <span>Search</span>
      </button>
    </form>
  );
}
