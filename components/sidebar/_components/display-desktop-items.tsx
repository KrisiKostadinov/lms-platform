"use client";

import Link from "next/link";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import {
  GraduationCapIcon,
  LogInIcon,
  LogOutIcon,
  UserIcon,
  UserPlusIcon,
} from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

import { Button } from "@/components/ui/button";

type DisplayDesktopItemsProps = {
  session: Session | null;
} & ComponentPropsWithoutRef<"nav">;

export const DisplayDesktopItems = ({ session }: DisplayDesktopItemsProps) => {
  const onLogout = async () => {
    await signOut({
      redirectTo: "/login"
    });
  }

  return (
    <nav className="hidden sm:block">
      <ul className="flex">
        {!session ? (
          <>
            <li>
              <Button variant={"ghost"} asChild>
                <Link href={"/login"}>
                  <LogInIcon />
                  <span>Вход</span>
                </Link>
              </Button>
            </li>
            <li>
              <Button variant={"ghost"} asChild>
                <Link href={"/register"}>
                  <UserPlusIcon />
                  <span>Регистрация</span>
                </Link>
              </Button>
            </li>
          </>
        ) : (
          <>
            {session.user.role === "ADMIN" && (
              <li>
                <Button variant={"ghost"} asChild>
                  <Link href={"/teacher"}>
                    <GraduationCapIcon />
                    <span>Учителски мод</span>
                  </Link>
                </Button>
              </li>
            )}
            <li>
              <Button variant={"ghost"} asChild>
                <Link href={"/account"}>
                  <UserIcon />
                  <span>Моят акаунт</span>
                </Link>
              </Button>
            </li>
            <li>
              <Button variant={"ghost"} onClick={onLogout}>
                <LogOutIcon />
                <span>Изход</span>
              </Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
