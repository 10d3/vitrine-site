import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Set your new password",
};

import { ResetPasswordForm } from "@/components/reset-password-form";
import Image from "next/image";
import Link from "next/link";

export default function ResetPasswordPage() {
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
        <Suspense fallback={<div>Loading...</div>}>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </div>
  );
}
