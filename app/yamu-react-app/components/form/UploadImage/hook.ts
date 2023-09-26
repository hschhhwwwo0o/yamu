import { useState } from "react";

interface UseUploadImagePropsInterface {
  onChange?: () => void;
}

export function useUploadImage({
  onChange = () => undefined,
}: UseUploadImagePropsInterface) {
  const [value, setValue] = useState<string>("");

  return {
    props: {
      value,
      setValue,
      onChange,
    },
  };
}
