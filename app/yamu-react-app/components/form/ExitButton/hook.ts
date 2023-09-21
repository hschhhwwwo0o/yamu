import { useEffect, useState } from "react";

interface useExitButtonArgsInterface {
  onClick?: () => void;
  loadingText?: string;
  disabledText?: string;
  navigatePath?: string;
  isDisabled?: boolean;
}

export function useExitButton({
  onClick = () => undefined,
  navigatePath = undefined,
  loadingText = "Exiting...",
  disabledText = undefined,
  isDisabled = undefined,
}: useExitButtonArgsInterface) {
  const [status, setButtonStatus] = useState<"basic" | "disabled" | "loading">(
    "basic",
  );

  function disable(): void {
    setButtonStatus("disabled");
  }

  function toDefaultStatus(): void {
    setButtonStatus("basic");
  }

  useEffect(
    function checkIsDisabledEffect() {
      if (isDisabled !== undefined) {
        if (isDisabled === true) {
          disable();
        }
        if (isDisabled === false) {
          toDefaultStatus();
        }
      }
    },
    [isDisabled],
  );

  return {
    props: {
      status,
      navigatePath,
      onClick,
      loadingText,
      disabledText,
    },
    utils: {
      disable,
    },
  };
}
