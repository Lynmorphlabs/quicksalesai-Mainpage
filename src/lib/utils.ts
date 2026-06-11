import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function resolveAssetUrl(url: string): string {
  if (url && url.startsWith("/__l5e/")) {
    const base = import.meta.env.BASE_URL || "/";
    if (base === "/") {
      return url;
    }
    return `${base.replace(/\/$/, "")}${url}`;
  }
  return url;
}
