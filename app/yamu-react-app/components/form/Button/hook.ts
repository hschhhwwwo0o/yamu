import { useEffect, useState } from "react";

interface useButtonArgsInterface {
  onClick?: () => void;
  loadingText?: string;
  disabledText?: string;
  navigatePath?: string;
  isDisabled?: boolean;
}

export function useButton({
  onClick = () => undefined,
  navigatePath = undefined,
  loadingText = "Loading...",
  disabledText = undefined,
  isDisabled = undefined,
}: useButtonArgsInterface) {
  const [status, setButtonStatus] = useState<"basic" | "disabled" | "loading">(
    "basic",
  );

  function startLoading(): void {
    setButtonStatus("loading");
  }

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
      startLoading,
      disable,
      toDefaultStatus,
    },
  };
}
