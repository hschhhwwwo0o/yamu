"use client";

import React, { Fragment, ReactNode } from "react";

/** Components */
import Link from "next/link";
import { Logo } from "../Logo";

/** Hooks */
import { useIsOpenMobileNavigation } from "./hooks/useIsOpenMobileNavigation";

export function TheTopNavigation(): ReactNode {
  const { toggleMobileNavigation, isOpenMobileNavigation } =
    useIsOpenMobileNavigation();

  return (
    <Fragment>
      <nav className="bg-black w-full h-[57px] dark:border-solid dark:border-b-[1px] dark:border-b-[#1F1F1F] flex flex-row justify-between items-center px-mobile-padding">
        {
          /** Left side of the navigation laptop */
          <div className="w-10">
            {
              /** Burger menu */
              <button
                onClick={toggleMobileNavigation}
                className="flex flex-col justify-between w-5 h-3 cursor-pointer md:hidden"
              >
                <span
                  style={{
                    rotate: isOpenMobileNavigation ? "45deg" : "0deg",
                    transform: isOpenMobileNavigation
                      ? "translate(0px, 7.7px)"
                      : "",
                  }}
                  className="block transform w-full h-[1px] transition-all duration-300 bg-white"
                />
                <span
                  style={{
                    opacity: isOpenMobileNavigation ? "0%" : "100%",
                  }}
                  className="block w-full h-[1px] transition-opacity duration-300 bg-white"
                ></span>
                <span
                  style={{
                    rotate: isOpenMobileNavigation ? "-45deg" : "0deg",
                    transform: isOpenMobileNavigation
                      ? "translate(0px, -7.7px)"
                      : "",
                  }}
                  className="block transform w-full h-[1px] transition-all duration-300 bg-white"
                />
              </button>
            }
          </div>
        }
        {
          /** Center of the navigation laptop */
          <div className="flex flex-row items-center justify-center gap-12 w-[80%]">
            <Link
              href="/"
              className="text-white text-sm hover:opacity-70 transition-opacity duration-200 hidden md:block"
            >
              Create mock-up
            </Link>
            <Link
              href="/"
              className="text-white text-sm hover:opacity-70 transition-opacity duration-200 hidden md:block"
            >
              GitHub
            </Link>
            <Link
              href="/"
              className="text-white text-sm hover:opacity-70 transition-opacity duration-200 hidden md:block"
            >
              About
            </Link>
            <Logo />
            <Link
              href="/"
              className="text-white text-sm hover:opacity-70 transition-opacity duration-200 hidden md:block"
            >
              Development
            </Link>
            <Link
              href="/"
              className="text-white text-sm hover:opacity-70 transition-opacity duration-200 hidden md:block"
            >
              License
            </Link>
            <Link
              href="/"
              className="text-white text-sm hover:opacity-70 transition-opacity duration-200 hidden md:block"
            >
              Feedback
            </Link>
          </div>
        }
        {
          /** Right side of the navigation laptop */
          <div className="w-10" />
        }
      </nav>
      {
        /** Mobile navigation */
        <div
          style={{
            pointerEvents: isOpenMobileNavigation ? "auto" : "none",
            opacity: isOpenMobileNavigation ? "100%" : "0%",
          }}
          className="bg-black transition-all duration-300 w-screen fixed flex flex-col items-center left-0 top-[56px] h-[calc(100%-56px)] pt-14 gap-10"
        >
          <Link
            href="/"
            className="text-white hover:opacity-70 transition-opacity duration-200"
          >
            Create mock-up
          </Link>
          <Link
            href="/"
            className="text-white hover:opacity-70 transition-opacity duration-200"
          >
            GitHub
          </Link>
          <Link
            href="/"
            className="text-white hover:opacity-70 transition-opacity duration-200"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-white hover:opacity-70 transition-opacity duration-200"
          >
            Development
          </Link>
          <Link
            href="/"
            className="text-white hover:opacity-70 transition-opacity duration-200"
          >
            License
          </Link>
          <Link
            href="/"
            className="text-white hover:opacity-70 transition-opacity duration-200"
          >
            Feedback
          </Link>
        </div>
      }
    </Fragment>
  );
}
