import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your password",
};

import { ForgotPasswordForm } from "@/components/forgot-password-form";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <Image
            className=" w-32 h-fit"
            src={"/logo.png"}
            alt="logo"
            width={1000}
            height={1000}
          />
        </Link>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
