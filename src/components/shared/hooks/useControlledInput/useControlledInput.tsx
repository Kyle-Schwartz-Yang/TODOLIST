import React, { useState } from "react";

export default function useControlledInput(inputInitial: string) {
  const [value, setValue] = useState<string>(inputInitial);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => setValue(inputInitial);

  return { value, onChange, reset };
}
