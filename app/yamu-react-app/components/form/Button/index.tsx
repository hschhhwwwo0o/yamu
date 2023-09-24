"use client";

import React, { Fragment } from "react";

/** Hook for working with the component */
import { useButton } from "./hook";

/** Components */
import { Label } from "@/components/text/Label";

/** Hooks */
import { useRouter } from "next/navigation";

interface ButtonInterface {
  children: string;
  label?: string;
  onClick?: () => void;
  navigatePath?: string;
  loadingText?: string;
  disabledText?: string;
  status?: "disabled" | "loading" | "basic";
  className?: string;
}

function Button({
  children,
  label = undefined,
  navigatePath = undefined,
  onClick = () => undefined,
  status = "basic",
  loadingText = undefined,
  disabledText = undefined,
  className = "",
}: ButtonInterface) {
  const { push } = useRouter();

  function _onClick(): void {
    if (navigatePath !== undefined) {
      push(navigatePath);
    }
    if (navigatePath === undefined) {
      onClick();
    }
  }

  function styleButtonByStatus(): React.CSSProperties {
    if (status === "disabled") {
      return {
        pointerEvents: "none",
        cursor: "not-allowed",
        opacity: "60%",
      };
    }
    if (status === "loading") {
      return {
        pointerEvents: "none",
        cursor: "progress",
        opacity: "60%",
      };
    }
    return {};
  }

  function setTitle() {
    if (status === "basic") {
      return children;
    }
    if (status === "disabled") {
      return disabledText;
    }
    if (status === "loading") {
      return loadingText;
    }
  }

  return (
    <Fragment>
      <span title={setTitle()} className={`block ${className}`}>
        <span
          style={styleButtonByStatus()}
          className="block w-full md:max-w-[400px] transition-all duration-300"
        >
          <button
            role={"button"}
            name={children}
            title={setTitle()}
            onClick={_onClick}
            className="rounded-xl hover:opacity-90 bg-brand-blue transition-all duration-300 hover:shadow-md shadow-brand-blue w-full py-[10px] md:max-w-[400px] font-semibold flex items-center justify-center text-white"
          >
            {status === "loading" && (loadingText || children)}
            {status === "disabled" && (disabledText || children)}
            {status === "basic" && children}
          </button>
          {label !== undefined && (
            <span className="block px-4 pt-2">
              <Label>{label}</Label>
            </span>
          )}
        </span>
      </span>
    </Fragment>
  );
}

export { Button, useButton };
