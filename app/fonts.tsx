import { Source_Sans_Pro, Inter, Lora, Fira_Code } from "@next/font/google";

export const sourceSansPro = Source_Sans_Pro({
  variable: "--font-sourcesanspro",
  weight: ["400", "600", "700", "900"],
  display: "swap",
  subsets: ["latin"],
});

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
