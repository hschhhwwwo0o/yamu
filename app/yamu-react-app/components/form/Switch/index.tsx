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
  title?: string;
  label?: string;
}

function Switch({
  value = false,
  setValue = () => undefined,
  title = undefined,
  label = undefined,
}: SwitchPropsInterface) {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(function setDefaultValueEffect(): void {
    setIsActive(value);
  }, []);

  function toggle(): void {
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
            onClick={toggle}
            style={{
              backgroundColor: isActive ? "#34C759" : "#E9E9EB",
            }}
            className="w-[51px] h-[31px] rounded-full p-[2px] transition-all duration-300"
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
