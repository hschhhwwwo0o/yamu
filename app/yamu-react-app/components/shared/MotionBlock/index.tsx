"use client";

import React, { Fragment, ReactNode } from "react";

import { motion } from "framer-motion";

interface MotionBlockInterfaceProps {
  delay?: number;
  children?: ReactNode;
  isWhileInView?: boolean;
}

export function MotionBlock({
  delay = 0,
  children,
  isWhileInView = false,
}: MotionBlockInterfaceProps): React.JSX.Element {
  return (
    <Fragment>
      {isWhileInView === true && (
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
      )}
      {isWhileInView === false && (
        <Fragment>
          <motion.span
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.9,
              delay,
            }}
            className="block"
          >
            {children}
          </motion.span>
        </Fragment>
      )}
    </Fragment>
  );
}
