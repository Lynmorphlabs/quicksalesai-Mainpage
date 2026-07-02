import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the element matching location.hash on every route/hash change.
 * Lets nav links like "/#pricing" smooth-scroll (html has scroll-behavior:
 * smooth) instead of triggering a full page reload, and also handles landing
 * on a hash URL from another page. Retries briefly because sections may not
 * be mounted yet right after a route transition.
 */
export const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = hash.slice(1);
    let attempts = 0;
    let timer: number;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts++ < 10) {
        timer = window.setTimeout(tryScroll, 50);
      }
    };
    tryScroll();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};
