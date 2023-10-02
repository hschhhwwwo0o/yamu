"use client";

import React, { Fragment } from "react";

/** Components */
import Link from "next/link";
import { Logo } from "../Logo";

/** Hooks */
import { usePathname } from "next/navigation";
import { useIsOpenMobileNavigation } from "./hooks/useIsOpenMobileNavigation";

export function TheTopNavigation(): React.JSX.Element {
  const { toggleMobileNavigation, isOpenMobileNavigation } =
    useIsOpenMobileNavigation();

  const path = usePathname();

  return (
    <Fragment>
      <span className="block w-full h-top-navbar-height"></span>
      <nav className="bg-black w-full h-top-navbar-height z-50 fixed left-0 top-0 dark:border-solid dark:border-b-[1px] border-light-default-border dark:border-b-dark-default-border flex flex-row justify-between items-center px-mobile-padding">
        {
          /** Left side of the navigation laptop */
          <div className="w-10">
            {
              /** Burger menu */
              <button
                onClick={toggleMobileNavigation}
                className="w-8 h-8 flex items-center"
              >
                <span className="flex flex-col justify-between w-5 h-3 cursor-pointer md:hidden">
                  <span
                    style={{
                      rotate: isOpenMobileNavigation ? "45deg" : "0deg",
                      transform: isOpenMobileNavigation
                        ? "translate(5px, 3.165px)"
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
                        ? "translate(4.8px, -3.165px)"
                        : "",
                    }}
                    className="block transform w-full h-[1px] transition-all duration-300 bg-white"
                  />
                </span>
              </button>
            }
          </div>
        }
        {
          /** Center of the navigation laptop */
          <div className="flex flex-row items-center justify-center gap-12 w-[80%]">
            <Link
              target="_blank"
              href="https://github.com/hschhhwwwo0o/yamu"
              className="text-white text-sm hover:opacity-70 transition-opacity duration-200 hidden md:block"
            >
              GitHub
            </Link>
            <Link
              href="/about"
              className="text-white text-sm hover:opacity-70 transition-opacity duration-200 hidden md:block"
            >
              <span
                className="transition-opacity duration-700"
                style={{ opacity: path === "/about" ? "100%" : "0%" }}
              >
                •{" "}
              </span>
              About
            </Link>
            <Link
              href="/create-mock-up"
              className="text-white text-sm hover:opacity-70 transition-opacity duration-200 hidden md:block"
            >
              <span
                className="transition-opacity duration-700"
                style={{ opacity: path === "/create-mock-up" ? "100%" : "0%" }}
              >
                •{" "}
              </span>
              Create mock-up
            </Link>
            <span className="block relative left-2">
              <Logo />
            </span>
            <Link
              href="/development"
              className="text-white text-sm hover:opacity-70 transition-opacity duration-200 hidden md:block"
            >
              <span
                className="transition-opacity duration-700"
                style={{ opacity: path === "/development" ? "100%" : "0%" }}
              >
                •{" "}
              </span>
              Development
            </Link>
            <Link
              href="/license"
              className="text-white text-sm hover:opacity-70 transition-opacity duration-200 hidden md:block"
            >
              <span
                className="transition-opacity duration-700"
                style={{ opacity: path === "/license" ? "100%" : "0%" }}
              >
                •{" "}
              </span>
              License
            </Link>
            <Link
              href="/feedback"
              className="text-white text-sm hover:opacity-70 transition-opacity duration-200 hidden md:block"
            >
              <span
                className="transition-opacity duration-700"
                style={{ opacity: path === "/feedback" ? "100%" : "0%" }}
              >
                •{" "}
              </span>
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
          className="bg-black z-50 transition-all duration-300 w-screen fixed flex flex-col items-center left-0 top-min-top-navbar-height h-min-screen-without-top-navbar-height pt-8"
        >
          <Link
            href="/create-mock-up"
            className="text-white hover:opacity-70 transition-opacity duration-200 py-5  px-8"
          >
            Create mock-up
          </Link>
          <Link
            target="_blank"
            href="https://github.com/hschhhwwwo0o/yamu"
            className="text-white hover:opacity-70 transition-opacity duration-200 py-5 px-8"
          >
            GitHub
          </Link>
          <Link
            href="/about"
            className="text-white hover:opacity-70 transition-opacity duration-200 py-5 px-8"
          >
            About
          </Link>
          <Link
            href="/development"
            className="text-white hover:opacity-70 transition-opacity duration-200 py-5 px-8"
          >
            Development
          </Link>
          <Link
            href="/license"
            className="text-white hover:opacity-70 transition-opacity duration-200 py-5 px-8"
          >
            License
          </Link>
          <Link
            href="/feedback"
            className="text-white hover:opacity-70 transition-opacity duration-200 py-5 px-8"
          >
            Feedback
          </Link>
        </div>
      }
    </Fragment>
  );
}
