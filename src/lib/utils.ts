import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// 1. taking input as a array ...inputs: ClassValue[] || any
// 2. merging two tailwind classes but overdies the conflicted classNames
// 3. clasx also merging
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 1. converting any string to ASCII code
// 2. remove non ascii characters, replaing this characters by ""
export function convertToAscii(inputString: string) {
  const asciiString = inputString.replace(/[^\x00-\x7F]+/g, "");
  return asciiString;
}

// const isActive = true;
// const combinedClasses = clsx(baseClasses, {
//   'bg-green-500': isActive,
//   'bg-red-500': !isActive,
// });
