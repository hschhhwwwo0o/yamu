"use client";

import React, { Fragment, ReactNode } from "react";

/** Components */
import { Label } from "@/components/text/Label";

/** Hooks */
import { useRouter } from "next/navigation";

interface ButtonInterface {
  children: ReactNode;
  label?: string;
  onClick?: () => void;
  navigatePath?: string;
}

export function Button({
  children,
  label = undefined,
  navigatePath = undefined,
  onClick = () => undefined,
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

  return (
    <Fragment>
      <span className="block w-full md:max-w-[360px]">
        <button
          onClick={_onClick}
          className="rounded-xl bg-brand-blue w-full py-[10px] md:max-w-[360px] font-semibold flex items-center justify-center text-white"
        >
          {children}
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
