import { useState } from "react";

interface useTextareaArgsInterface {
  title?: string;
  placeholder?: string;
  isAutofocus?: boolean;
}

export function useTextarea({
  title = undefined,
  placeholder = undefined,
  isAutofocus = false,
}: useTextareaArgsInterface) {
  const [value, setValue] = useState<string>("");

  return {
    props: {
      value,
      setValue,
      title,
      placeholder,
      isAutofocus,
    },
  };
}
