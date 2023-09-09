import { useState } from "react";

export function useIsOpenMobileNavigation() {
  const [isOpenMobileNavigation, setIsOpenMobileNavigation] =
    useState<boolean>(false);

  function toggleMobileNavigation(): void {
    setIsOpenMobileNavigation(!isOpenMobileNavigation);
  }

  return {
    isOpenMobileNavigation,
    toggleMobileNavigation,
  };
}
