import Link from "next/link";
import React, { Fragment, ReactNode } from "react";

export function Logo(): ReactNode {
  return (
    <Fragment>
      <Link href={"/"} className="">
        <span className="block font-extrabold text-base text-white">YAMU</span>
      </Link>
    </Fragment>
  );
}
