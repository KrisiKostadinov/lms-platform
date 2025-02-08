"use client";

import Image from "next/image";
import Link from "next/link";

const WEBSITE_TITLE = process.env.WEBSITE_TITLE || "";

export const DisplayLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/logo.svg"}
        alt={WEBSITE_TITLE}
        width={150}
        height={40}
        className="object-cover"
      />
    </Link>
  );
};