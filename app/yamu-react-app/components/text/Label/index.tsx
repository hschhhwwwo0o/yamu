import React, { Fragment, ReactNode } from "react";

interface LabelInterface {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Label({
  children,
  className = "",
  onClick = () => undefined,
}: LabelInterface): ReactNode {
  return (
    <Fragment>
      <span
        onClick={onClick}
        className={`block text-[#181818] dark:text-white cursor-default ${className}`}
      >
        <span className="block text-sm text-[#181818] opacity-60 dark:text-white dark:opacity-60">
          {children}
        </span>
      </span>
    </Fragment>
  );
}
