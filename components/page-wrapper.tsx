import { ReactNode } from "react";

import { Navbar } from "@/components/sidebar";

type PageWrapperProps = {
  children: ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
