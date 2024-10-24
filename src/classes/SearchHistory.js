import { History } from "./history";

export class SearchHistory extends History {
  #KEY;

  constructor(saveKey = "weather") {
    super();
    this.#KEY = saveKey;
  }

  save() {
    window.localStorage.setItem(this.#KEY, JSON.stringify(this.items));
  }

  load() {
    const rawItems = window.localStorage.getItem(this.#KEY);

    const items = rawItems ? JSON.parse(rawItems) : [];

    this.add(...items);
  }
}
