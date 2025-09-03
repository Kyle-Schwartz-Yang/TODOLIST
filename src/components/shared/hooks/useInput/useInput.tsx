import React, { useState } from "react";

type UseInputReturn = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
};

export default function useInput(initial: string): UseInputReturn {
  const [value, setValue] = useState(initial);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onReset = () => setValue(initial);

  return { value, onChange, onReset };
}
