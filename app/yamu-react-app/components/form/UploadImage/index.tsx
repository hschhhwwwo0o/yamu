import React, { Dispatch, Fragment, SetStateAction } from "react";

/** Hook for working with the component */
import { useUploadImage } from "./hook";

/** Components */
import { Label } from "@/components/text/Label";
import { Text } from "@/components/text/Text";

interface UploadImagePropsInterface {
  className?: string;
  label?: string;
  title?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (value: string) => void;
}

export function UploadImage({
  className = "",
  label = "",
  title = "",
  value = "",
  setValue = () => undefined,
  onChange = () => undefined,
}: UploadImagePropsInterface) {
  function _onChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event?.target?.files?.length) {
      const imageUrl = URL.createObjectURL(event?.target?.files[0]);
      onChange(imageUrl);
      setValue(imageUrl);
    }
  }

  return (
    <Fragment>
      <span className={`block ${className}`}>
        <span className="block">
          {title !== undefined && (
            <span className="block pb-2 cursor-default">
              <Text>{title}</Text>
            </span>
          )}
        </span>
        <span className="block transition-opacity duration-300 hover:opacity-80">
          <span className="flex cursor-pointer w-full max-w-sm h-36 border-dashed border-[1px] border-dark-default-border dark:border-light-default-border rounded-2xl items-center justify-center">
            {value === "" || value === undefined ? (
              <Fragment>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_586_620)">
                    <path
                      className="fill-dark-default-border dark:fill-light-default-border"
                      d="M20.4195 0H7.08301C4.73984 0 2.83301 1.90683 2.83301 4.25V34H31.1663V10.7468L20.4195 0ZM21.2497 4.8365L26.3298 9.91667H21.2497V4.8365ZM28.333 31.1667H5.66634V4.25C5.66634 3.46942 6.30242 2.83333 7.08301 2.83333H18.4163V12.75H28.333V31.1667ZM18.9915 16.4064L23.6651 21.08L21.6619 23.0832L18.4163 19.8376V28.3333H15.583V19.822L12.3374 23.0832L10.3343 21.08L15.0064 16.4064C16.1043 15.3099 17.8936 15.3085 18.9901 16.4064H18.9915Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_586_620">
                      <rect width="34" height="34" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Fragment>
            ) : (
              <Fragment>
                <img
                  className="block h-full max-h-[130px]"
                  src={value}
                  alt=""
                />
              </Fragment>
            )}
          </span>
          <label
            className="block w-full max-w-sm h-36 -mt-36 cursor-pointer"
            htmlFor="select-image"
          >
            <input
              onChange={_onChange}
              id="select-image"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              className="opacity-0 cursor-pointer w-full"
            />
          </label>
        </span>
        {label !== undefined && (
          <span className="block mt-2">
            <Label>{label}</Label>
          </span>
        )}
      </span>
    </Fragment>
  );
}

export { useUploadImage };
