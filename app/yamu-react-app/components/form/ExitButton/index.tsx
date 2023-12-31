"use client";

import React, { Fragment } from "react";
import { useRouter } from "next/navigation";

/** Hook for working with the component */
import { useExitButton } from "./hook";

interface ExitButtonPropsInterface {
  children: string;
  onClick?: () => void;
  className?: string;
  navigatePath?: string;
}

function ExitButton({
  children,
  onClick,
  className = "",
  navigatePath = "",
}: ExitButtonPropsInterface): React.JSX.Element {
  const { push } = useRouter();

  function _onClick(): void {
    if (navigatePath === undefined) {
      if (onClick) {
        onClick();
      }
    } else {
      push(navigatePath);
    }
  }

  return (
    <Fragment>
      <button
        role={"button"}
        name={children}
        title={children}
        onClick={_onClick}
        className={`py-[10px] transition-all duration-300 hover:opacity-80 w-full md:max-w-[360px] gap-2 bg-transparent text-[#FF3B30] flex flex-row items-center justify-center ${className}`}
      >
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.30322 19.063H12.1685C13.9863 19.063 14.9575 18.0835 14.9575 16.249V12.5967H13.1064V16.0913C13.1064 16.8218 12.7412 17.2119 11.9775 17.2119H3.49414C2.73047 17.2119 2.36523 16.8218 2.36523 16.0913V3.93066C2.36523 3.2085 2.73047 2.81006 3.49414 2.81006H11.9775C12.7412 2.81006 13.1064 3.2085 13.1064 3.93066V7.44189H14.9575V3.77295C14.9575 1.93848 13.9863 0.967285 12.1685 0.967285H3.30322C1.47705 0.967285 0.51416 1.93848 0.51416 3.77295V16.249C0.51416 18.0835 1.47705 19.063 3.30322 19.063ZM8.83984 10.8535H17.0825L18.3027 10.7871L17.6802 11.2686L16.5181 12.356C16.3604 12.5054 16.269 12.7129 16.269 12.9204C16.269 13.3271 16.5679 13.6675 16.9912 13.6675C17.207 13.6675 17.373 13.5845 17.5225 13.4351L20.187 10.6626C20.4111 10.4385 20.4858 10.231 20.4858 10.0068C20.4858 9.78271 20.4111 9.56689 20.187 9.35107L17.5225 6.57861C17.373 6.4209 17.207 6.33789 16.9912 6.33789C16.5679 6.33789 16.269 6.67822 16.269 7.08496C16.269 7.29248 16.3604 7.5083 16.5181 7.64941L17.6802 8.74512L18.311 9.22656L17.0825 9.15186H8.83984C8.3833 9.15186 8.00146 9.53369 8.00146 10.0068C8.00146 10.48 8.3833 10.8535 8.83984 10.8535Z"
            fill="#FF3B30"
          />
        </svg>
        {children}
      </button>
    </Fragment>
  );
}

export { ExitButton, useExitButton };
