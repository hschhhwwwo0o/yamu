"use client";

import React, { Fragment, ReactNode } from "react";

import { motion } from "framer-motion";

interface MotionBlockInterfaceProps {
  delay?: number;
  children?: ReactNode;
}

export function MotionBlock({
  delay = 0,
  children,
}: MotionBlockInterfaceProps): React.JSX.Element {
  return (
    <Fragment>
      <motion.span
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.9,
          delay,
        }}
        className="block"
      >
        {children}
      </motion.span>
    </Fragment>
  );
}
