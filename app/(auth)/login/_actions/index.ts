"use server";

import bcrypt from "bcryptjs";

import { prisma } from "@/db/prisma";
import { FormSchemaProps, formSchema } from "@/app/(auth)/login/_schemas";

export const loginAction = async (values: FormSchemaProps) => {
  const validation = formSchema.safeParse(values);

  if (!validation.success) {
    throw new Error("Данните в полетата са невалидни");
  }
  
  const user = await prisma.user.findUnique({
    where: { email: values.email },
  });

  console.log(user);
  
  
  if (!user) {
    throw new Error("Имейл адресът или паролата са невалидни");
  }
  
  if (!bcrypt.compareSync(values.password, user.password)) {
    throw new Error("Имейл адресът или паролата са невалидни");
  }

  return { message: "Влизането беше успешно" };
};
