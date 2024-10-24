export class History {
  #items;
  #maxItems;

  constructor(items = [], max = 5) {
    this.#items = new Set(items);
    this.#maxItems = max;
  }

  add(...items) {
    const newItems = [...items.map((i) => i.toLowerCase()), ...this.#items];

    if (newItems.length > this.#maxItems) {
      newItems.length = this.#maxItems;
    }

    this.#items = new Set(newItems);
  }

  get items() {
    return Array.from(this.#items);
  }
}
