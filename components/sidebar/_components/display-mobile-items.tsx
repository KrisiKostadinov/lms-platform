"use client";

import Link from "next/link";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import {
  GraduationCapIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
  UserPlusIcon,
} from "lucide-react";
import { ComponentPropsWithoutRef, ReactNode, useState } from "react";

import { Button } from "@/components/ui/button";
import { DisplayLogo } from "./display-logo";
import { cn } from "@/lib/utils";

type DisplayMobileItemsProps = {
  session: Session | null;
} & ComponentPropsWithoutRef<"nav">;

export const DisplayMobileItems = ({ session }: DisplayMobileItemsProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const onLogout = async () => {
    setOpen(!open);
    await signOut({
      redirectTo: "/login",
    });
  };

  return (
    <nav className="block sm:hidden">
      <Button variant={"outline"} onClick={() => setOpen(!open)}>
        <MenuIcon />
      </Button>
      <div
        className={cn(
          "fixed top-0 left-0 right-0 bottom-0 min-h-screen duration-200 bg-black/40",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(!open)}
      />
      <ul
        className={cn(
          "fixed top-0 left-0 flex flex-col bg-white w-2/3 border-r shadow min-h-screen duration-500 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="block p-5">
          <DisplayLogo />
        </div>
        {!session ? (
          <>
            <DisplayLink
              name="Вход"
              icon={<UserPlusIcon />}
              href="/login"
              onClick={() => setOpen(!open)}
            />
            <DisplayLink
              name="Регистрация"
              icon={<UserPlusIcon />}
              href="/register"
              onClick={() => setOpen(!open)}
            />
          </>
        ) : (
          <>
            {session.user.role === "ADMIN" && (
              <DisplayLink
                name="Учителски мод"
                icon={<GraduationCapIcon />}
                href="/teacher"
                onClick={() => setOpen(!open)}
              />
            )}
            <DisplayLink
              name="Моят акаунт"
              icon={<UserIcon />}
              href="/account"
              onClick={() => setOpen(!open)}
            />
            <DisplayLink
              name="Изход"
              icon={<LogOutIcon />}
              href="/account"
              onClick={onLogout}
            />
          </>
        )}
      </ul>
    </nav>
  );
};

type DisplayLinkProps = {
  name: string;
  href: string;
  icon: ReactNode;
} & ComponentPropsWithoutRef<"li">;

const DisplayLink = ({
  name,
  href,
  icon: Icon,
  ...props
}: DisplayLinkProps) => {
  return (
    <li {...props}>
      <Link
        href={href}
        className="py-3 px-5 w-full flex gap-3 hover:bg-secondary duration-200"
      >
        {Icon}
        <span>{name}</span>
      </Link>
    </li>
  );
};