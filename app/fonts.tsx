import { Inter, Lora, Fira_Code } from "@next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  weight: "variable",
  display: "swap",
  subsets: ["latin"],
});

export const lora = Lora({
  variable: "--font-lora",
  weight: "variable",
  display: "swap",
  subsets: ["latin"],
});

export const firaCode = Fira_Code({
  variable: "--font-firacode",
  weight: "variable",
  display: "swap",
  subsets: ["latin", "latin-ext"],
});
