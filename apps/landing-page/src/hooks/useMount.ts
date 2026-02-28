import { useState, useEffect } from "react";

/**
 * Returns true after component has mounted on the client.
 * Use to avoid hydration mismatches with theme-dependent rendering.
 */
export function useMount(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
