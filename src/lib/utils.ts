import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../tailwind.config";


export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
};

// export const wait = async (ms: number) => {
//   return new Promise(resolve => setTimeout(resolve, ms));
// };
