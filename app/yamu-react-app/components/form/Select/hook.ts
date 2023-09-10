import { useState } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface useSelectInterface {
  options: SelectOption[];
}

export function useSelect({ options }: useSelectInterface) {
  const [value, setValue] = useState<SelectOption | undefined>(undefined);

  return {
    value,
    setValue,
    options,
  };
}
