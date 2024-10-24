import dayjs from "dayjs";
import { titleCase } from "../utils/string.utils.js";

export class Weather {
  #dateMask;
  #date;
  #tempF;
  #windMph;
  #humidity;
  #iconUrl;
  #iconDescription;

  constructor(weather, dateMask = "ddd MMM D, YYYY") {
    this.#dateMask = dateMask;
    this.#date = dayjs(weather.dt_txt, "YYYY-MM-DD hh:mm:ss");
    this.#tempF = weather.main.temp;
    this.#windMph = weather.wind.speed;
    this.#humidity = weather.main.humidity;
    this.#iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;
    this.#iconDescription = weather.weather[0].description ?? weather[0].main;
  }

  get rawDate() {
    return this.#date;
  }

  get date() {
    return this.#date.format(this.#dateMask);
  }

  get tempF() {
    return this.#tempF + "ºF";
  }

  get windMph() {
    return this.#windMph + " MPH";
  }

  get humidity() {
    return this.#humidity + "%";
  }

  get iconUrl() {
    return this.#iconUrl;
  }

  get iconDescription() {
    return titleCase(this.#iconDescription);
  }
}
