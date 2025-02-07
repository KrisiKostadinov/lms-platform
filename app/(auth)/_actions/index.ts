"use server";

import { randomBytes } from "crypto";

export const generateConfirmationLink = async (
  id: string,
  token: string,
  route: string
): Promise<string> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const confirmationLink = `${baseUrl}/${route}?token=${token}&id=${id}`;

  return confirmationLink;
};

export const generateToken = async (length: number = 32): Promise<string> => {
  const buffer = randomBytes(length);
  const token = buffer.toString("hex");
  return token;
};