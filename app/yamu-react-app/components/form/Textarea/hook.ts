import { useState } from "react";

interface useTextareaArgsInterface {
  title?: string;
  placeholder?: string;
}

export function useTextarea({
  title = undefined,
  placeholder = undefined,
}: useTextareaArgsInterface) {
  const [value, setValue] = useState<string>("");

  return {
    value,
    setValue,
    title,
    placeholder,
  };
}
