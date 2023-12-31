"use client";

import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from "react";

/** Hook for working with the component */
import { useSwitch } from "./hook";

/** Components */
import { Label } from "@/components/text/Label";
import { Text } from "@/components/text/Text";

interface SwitchPropsInterface {
  value?: boolean;
  setValue?: Dispatch<SetStateAction<boolean>>;
  onNewValueSet?: (newValue: boolean) => void;
  title?: string;
  label?: string;
}

function Switch({
  value = false,
  setValue = () => undefined,
  title = undefined,
  label = undefined,
  onNewValueSet = () => undefined,
}: SwitchPropsInterface): React.JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(function _setDefaultValueEffect(): void {
    setIsActive(value);
  }, []);

  function toggle(): void {
    if (isActive === true) {
      onNewValueSet(false);
    }
    if (isActive === false) {
      onNewValueSet(true);
    }
    setValue(!isActive);
    setIsActive(!isActive);
  }

  function onTitleClick(): void {
    if (title !== undefined) {
      toggle();
    }
  }

  return (
    <Fragment>
      <span className="block">
        <span
          onClick={onTitleClick}
          style={{
            cursor: title !== undefined ? "pointer" : "default",
          }}
          className="flex flex-row justify-between items-center py-2"
        >
          {title !== undefined && (
            <Fragment>
              <Text>{title}</Text>
            </Fragment>
          )}
          <button
            role={"button"}
            name={title || label}
            title={title || label}
            onClick={toggle}
            className={`w-[51px] h-[31px] rounded-full p-[2px] transition-all duration-300 ${
              isActive
                ? "bg-[#34C759]"
                : "bg-[#E9E9EB] dark:bg-dark-default-border"
            }`}
          >
            <span
              style={{
                marginLeft: isActive ? "19px" : "0",
              }}
              className="w-[27px] h-[27px] transition-all duration-300 bg-white shadow-sm block rounded-full"
            ></span>
          </button>
        </span>
        {label !== undefined && (
          <span className="cursor-default">
            <Label>{label}</Label>
          </span>
        )}
      </span>
    </Fragment>
  );
}

export { Switch, useSwitch };
