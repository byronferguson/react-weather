import { useEffect, useState } from "react";
import { SearchHistory } from "../classes/SearchHistory";

export function useSearchHistory() {
  const [_history] = useState(() => new SearchHistory());

  const [history, setHistory] = useState(() => _history.load());

  useEffect(() => {
    _history.save();
  }, [history]);

  function addItem(item) {
    _history.add(item);
    setHistory(_history.items);
  }

  return {
    history,
    addItem,
  };
}
