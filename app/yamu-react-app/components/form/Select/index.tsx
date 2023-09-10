"use client";

import React, { Dispatch, Fragment, SetStateAction, useState } from "react";

/** Components */
import { Text } from "@/components/text/Text";

interface SelectPropsInterface {
  options: { value: string; label: string }[];
  value: { value: string; label: string } | undefined;
  setValue: Dispatch<
    SetStateAction<{ value: string; label: string } | undefined>
  >;
}

export function Select({
  options = [],
  value,
  setValue,
}: SelectPropsInterface) {
  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setValue(
      options.find(function findSelectedOption(_option) {
        return _option.value === event.target.value;
      }),
    );
  }

  return (
    <Fragment>
      <span className="flex cursor-pointer flex-row justify-between items-center w-full pb-[10px] border-b-[1px] border-solid border-b-[#E5E5EA]">
        <span
          className="transition-opacity duration-500"
          style={{
            opacity: value === undefined ? "50%" : "100%",
          }}
        >
          <Text>{value === undefined ? "Placeholder" : value.label}</Text>
        </span>
        <span>
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
        name="pets"
        id="pet-select"
      >
        <option value={""}>Not selected</option>
        {options.map(function renderOption(_option) {
          return (
            <option key={_option.value} value={_option.label}>
              {_option.label}
            </option>
          );
        })}
      </select>
    </Fragment>
  );
}
