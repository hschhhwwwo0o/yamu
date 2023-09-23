import { useState } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface useSelectInterface {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  defaultValue?: SelectOption;
  onSelect?: (_option: SelectOption | undefined) => void;
  isDisabled?: boolean;
}

export function useSelect({
  options,
  placeholder,
  defaultValue = undefined,
  label = undefined,
  onSelect = () => undefined,
  isDisabled = false,
}: useSelectInterface) {
  const [value, setValue] = useState<SelectOption | undefined>(undefined);

  function clear() {
    setValue(undefined);
  }

  return {
    props: {
      value,
      setValue,
      options,
      placeholder,
      label,
      defaultValue,
      onSelect,
      isDisabled,
    },
    utils: {
      clear,
    },
  };
}
