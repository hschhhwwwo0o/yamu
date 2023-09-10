"use client";

import React, { Fragment, ReactNode } from "react";

/** Hook for working with the component */
import { useButton } from "./hook";

/** Components */
import { Label } from "@/components/text/Label";

/** Hooks */
import { useRouter } from "next/navigation";

interface ButtonInterface {
  children: ReactNode;
  label?: string;
  onClick?: () => void;
  navigatePath?: string;
  loadingText?: string;
  disabledText?: string;
  status?: "disabled" | "loading" | "basic";
}

function Button({
  children,
  label = undefined,
  navigatePath = undefined,
  onClick = () => undefined,
  status = "basic",
  loadingText = undefined,
  disabledText = undefined,
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

  return (
    <Fragment>
      <span
        style={styleButtonByStatus()}
        className="block w-full md:max-w-[360px] transition-all duration-300"
      >
        <button
          onClick={_onClick}
          className="rounded-xl bg-brand-blue w-full py-[10px] md:max-w-[360px] font-semibold flex items-center justify-center text-white"
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
    </Fragment>
  );
}

export { Button, useButton };
