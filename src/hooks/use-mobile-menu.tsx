"use client";
import { useEffect, useState } from "react";

export function useMobileMenu() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!(e.target as HTMLElement).closest("#mobile-menu")) {
        setShowMenu(false);
      }
    }

    if (showMenu) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [showMenu]);

  return { showMenu, setShowMenu };
}

