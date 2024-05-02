import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Navbar from "@/sections/Navbar";

export const metadata: Metadata = {
  title: "JTDM",
  description: "JTDM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
            rel="stylesheet"
          />
        </head>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
