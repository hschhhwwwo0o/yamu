import { useState } from "react";

interface useSwitchInterface {
  title?: string;
  label?: string;
  defaultValue?: boolean;
}

export function useSwitch({
  title = undefined,
  label = undefined,
  defaultValue = false,
}: useSwitchInterface) {
  const [value, setValue] = useState<boolean>(defaultValue);

  return {
    props: {
      value,
      setValue,
      title,
      label,
    },
  };
}
