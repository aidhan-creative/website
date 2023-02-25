import { sourceSansPro, inter, lora, firaCode } from "@/app/fonts";
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
      ${sourceSansPro.variable} 
      ${lora.variable} 
      ${firaCode.variable}
      ${inter.variable}
      `}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="subpixel-antialiased max-w-screen overflow-x-hidden">
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
