import { useState, useEffect } from "react";

export default function useLocalStorageState<T>(key: string, defaultValue: T) {
  const [state, setState] = useState<T>(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
}

/*
const [todo, setTodo] = useState<TodoItem[]>([]);



*/
