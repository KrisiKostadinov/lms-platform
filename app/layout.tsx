import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Курсове и уроци",
  description: "Учете бързо и лесно с нашите невероятни курсове и уроци!",
  keywords: "крусове, онлайн курсове, уроци"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body>
        <Suspense>
          <ToastContainer />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
