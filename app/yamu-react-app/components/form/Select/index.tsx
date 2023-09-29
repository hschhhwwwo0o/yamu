"use client";

import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from "react";

/** Hook for working with the component */
import { useSelect } from "./hook";

/** Components */
import { Text } from "@/components/text/Text";
import { Label } from "@/components/text/Label";

export type SelectOption = { value: string; label: string } | undefined;

interface SelectPropsInterface {
  defaultValue?: SelectOption | undefined;
  placeholder?: string;
  label?: string;
  options: SelectOption[];
  value?: SelectOption | undefined;
  setValue?: Dispatch<SetStateAction<SelectOption | undefined>>;
  onSelect?: (_option: SelectOption | undefined) => void;
  isDisabled?: boolean;
  className?: string;
}

function Select({
  options = [],
  value,
  setValue = () => undefined,
  placeholder = "Choose option...",
  defaultValue = undefined,
  label = undefined,
  onSelect = () => undefined,
  isDisabled = false,
  className = "",
}: SelectPropsInterface) {
  const [innerValue, setInnerValue] = useState<
    | {
        value: string;
        label: string;
      }
    | undefined
  >();

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const _option = options.find(function findSelectedOption(_option) {
      return _option?.value === event.target.value;
    });
    setValue(_option);
    setInnerValue(_option);
    onSelect(_option);
  }

  useEffect(function setDefaultValue() {
    if (defaultValue) {
      setValue(defaultValue);
      setInnerValue(defaultValue);
    }
  }, []);

  useEffect(
    function _onValueClearedEffect() {
      if (value === undefined) {
        setInnerValue(undefined);
      }
    },
    [value],
  );

  return (
    <Fragment>
      <span className={`block ${className}`}>
        <span
          style={{
            opacity: isDisabled === true ? "40%" : "100%",
            pointerEvents: isDisabled === true ? "none" : "auto",
          }}
          className="block transition-opacity duration-300 group"
        >
          <span className="flex transition-all duration-300 cursor-pointer flex-row justify-between items-center w-full pb-[10px] border-b-[1px] border-solid border-b-[#E5E5EA] border-opacity-80 group-hover:border-opacity-100">
            <span
              className="transition-opacity duration-500"
              style={{
                opacity: innerValue === undefined ? "50%" : "100%",
              }}
            >
              <Text>
                {innerValue === undefined
                  ? placeholder
                  : `${innerValue.label
                      .charAt(0)
                      .toUpperCase()}${innerValue.label.slice(1)}`}
              </Text>
            </span>
            <span className="block relative -left-1 group-hover:left-0 transition-all duration-300">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 7.35938C14 7.09375 13.8984 6.86719 13.6953 6.66406L7.60156 0.703125C7.42969 0.53125 7.21875 0.445312 6.96875 0.445312C6.46094 0.445312 6.05469 0.835938 6.05469 1.34375C6.05469 1.59375 6.15625 1.82031 6.32812 2L11.8281 7.35938L6.32812 12.7188C6.16406 12.8906 6.05469 13.1172 6.05469 13.3672C6.05469 13.8828 6.46094 14.2734 6.96875 14.2734C7.21875 14.2734 7.42969 14.1875 7.60156 14.0156L13.6953 8.05469C13.9062 7.85156 14 7.625 14 7.35938Z"
                  fill="#D1D1D6"
                />
              </svg>
            </span>
          </span>
          <select
            onChange={onChange}
            className="block opacity-0 cursor-pointer w-full h-[40px] -mt-[40px]"
          >
            <option value={""}>Not selected</option>
            {options.map(function renderOption(_option) {
              return (
                <option key={_option?.value} value={_option?.value}>
                  {`${_option?.label
                    .charAt(0)
                    .toUpperCase()}${_option?.label.slice(1)}`}
                </option>
              );
            })}
          </select>
          {label !== undefined && (
            <span className="block mt-2">
              <Label>{label}</Label>
            </span>
          )}
        </span>
      </span>
    </Fragment>
  );
}

export { Select, useSelect };
