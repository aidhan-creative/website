import { inter, lora, firaCode } from "@/app/fonts";
import { AnalyticsWrapper } from "@/app/components/analytics";

import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
      ${inter.variable} 
      ${lora.variable} 
      ${firaCode.variable}
      `}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="antialiased">
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
