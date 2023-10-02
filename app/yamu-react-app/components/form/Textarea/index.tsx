"use client";

import React, { Dispatch, Fragment, SetStateAction } from "react";

/** Hook for working with the component */
import { useTextarea } from "./hook";

/** Components */
import { Text } from "@/components/text/Text";

interface TextareaPropsInterface {
  title?: string;
  placeholder?: string;
  value?: string;
  isAutofocus?: boolean;
  isDisabled?: boolean;
  setValue?: Dispatch<SetStateAction<string>>;
}

function Textarea({
  title = undefined,
  placeholder = "Enter text...",
  value = "",
  setValue = () => undefined,
  isAutofocus = false,
  isDisabled = false,
}: TextareaPropsInterface): React.JSX.Element {
  function _onChange(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    setValue(event.target.value);
  }

  return (
    <Fragment>
      {title !== undefined && (
        <span className="block pb-2 cursor-default">
          <Text>{title}</Text>
        </span>
      )}
      <textarea
        disabled={isDisabled}
        autoFocus={isAutofocus}
        value={value}
        onChange={_onChange}
        className="placeholder-[#5a5a5a] w-full max-w-xl text-black dark:text-white bg-[#F9F9F9] dark:bg-[#171717] px-2 text-sm py-2 border-solid border border-[#E5E5EA] dark:border-[#262626] rounded-[10px]"
        cols={30}
        rows={7}
        placeholder={placeholder}
      ></textarea>
    </Fragment>
  );
}

export { Textarea, useTextarea };
