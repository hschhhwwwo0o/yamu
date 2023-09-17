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
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  function clear(): void {
    setValue("");
  }

  function disableInput(): void {
    setIsDisabled(true);
  }

  function undisableInput(): void {
    setIsDisabled(false);
  }

  return {
    props: {
      value,
      setValue,
      title,
      placeholder,
      isAutofocus,
      isDisabled,
    },
    utils: {
      clear,
      disableInput,
      undisableInput,
    },
  };
}
