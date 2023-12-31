import React, { Fragment, ReactNode } from "react";
import Link from "next/link";

interface LinkCustomInterface {
  children: ReactNode;
  href: string;
  className?: string;
  withLabel?: boolean;
  target?: undefined | "_blank";
}

export function LinkCustom({
  children,
  href = "/",
  withLabel = false,
  target = undefined,
  className = "",
}: LinkCustomInterface): ReactNode {
  return (
    <Fragment>
      <span className={`block ${className}`}>
        <Link
          target={target}
          href={href}
          className="underline text-brand-blue flex flex-row items-center gap-1"
        >
          {withLabel === true && (
            <span>
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-brand-blue"
                  d="M6.13989 9.4137L6.91919 8.62268C6.14575 8.56409 5.64185 8.32971 5.26099 7.94885C4.2356 6.92346 4.24146 5.47034 5.25513 4.45667L7.16528 2.54651C8.19067 1.52698 9.63208 1.52112 10.6575 2.54651C11.6829 3.5719 11.6711 5.01917 10.6575 6.03284L9.50903 7.18128C9.6731 7.55628 9.70825 7.98987 9.64966 8.37073L11.3723 6.65393C12.7727 5.24768 12.7844 3.26135 11.3665 1.83753C9.94263 0.413697 7.95044 0.425416 6.54419 1.83167L4.54614 3.83557C3.13989 5.24182 3.12817 7.23401 4.552 8.65198C4.92114 9.02112 5.38989 9.28479 6.13989 9.4137ZM6.28638 4.58557L5.50708 5.37659C6.28052 5.44104 6.78442 5.66956 7.16528 6.05042C8.19067 7.07581 8.18482 8.52893 7.17114 9.5426L5.25513 11.4528C4.2356 12.4723 2.79419 12.4782 1.7688 11.4586C0.743409 10.4274 0.749269 8.98596 1.7688 7.96643L2.91724 6.81799C2.75318 6.44885 2.71216 6.0094 2.77661 5.62854L1.05396 7.34534C-0.346434 8.75159 -0.358153 10.7438 1.05982 12.1617C2.48364 13.5856 4.47583 13.5739 5.87622 12.1735L7.88013 10.1637C9.28638 8.75745 9.2981 6.76526 7.87427 5.34729C7.50513 4.97815 7.03638 4.71448 6.28638 4.58557Z"
                  fill="#007AFF"
                />
              </svg>
            </span>
          )}
          {children}
        </Link>
      </span>
    </Fragment>
  );
}
