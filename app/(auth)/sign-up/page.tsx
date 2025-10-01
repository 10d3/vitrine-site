import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account",
};

import { SignupForm } from "@/components/signup-form";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="/" className="flex items-center gap-2 self-center font-medium">
          <Image
            className=" w-32 h-fit"
            src={"/logo.svg"}
            alt="logo"
            width={1000}
            height={1000}
          />
        </a>
        <SignupForm />
      </div>
    </div>
  );
}
