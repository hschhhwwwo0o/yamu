import React, { Fragment } from "react";

/** Components */
import Link from "next/link";

export function Logo(): React.JSX.Element {
  return (
    <Fragment>
      <Link href={"/"} className="">
        <span className="block font-extrabold text-base text-white">YAMU</span>
      </Link>
    </Fragment>
  );
}
