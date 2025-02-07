"use client";

import { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AuthWrapperProps = {
  title: string;
  children: ReactNode;
  description?: string;
};

export default function AuthWrapper({
  title,
  description,
  children,
}: AuthWrapperProps) {
  return (
    <Card className="max-sm:mx-5 mt-5 sm:mt-10 sm:max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
