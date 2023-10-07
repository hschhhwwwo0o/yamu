import { useState } from "react";

export function useIsOpenMobileNavigation() {
  const [isOpenMobileNavigation, setIsOpenMobileNavigation] =
    useState<boolean>(false);

  function toggleMobileNavigation(): void {
    setIsOpenMobileNavigation(!isOpenMobileNavigation);
  }

  function closeMobileNavigation() {
    setIsOpenMobileNavigation(false);
  }

  return {
    isOpenMobileNavigation,
    toggleMobileNavigation,
    closeMobileNavigation,
  };
}
