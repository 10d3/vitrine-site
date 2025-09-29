"use server";

import { signIn } from "@/lib/auth/auth";

export async function signInWithGoogle() {
  await signIn("google", { callbackUrl: "/" });
}

export async function signInWithCredentials(email: string, password: string) {
  const result = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  console.log("from server",result)
  return result
}
