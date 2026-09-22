import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { admin } from "better-auth/plugins";
import { getBaseURL } from "./utils";
import { Resend } from "resend";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "IsolatuCasa <info@mail.isolatucasa.com>",
        to: user.email,
        subject: "Reset your password",
        html: `<p>Click <a href="${url}">here</a> to reset your password.</p>`,
      });
    },
  },
  plugins: [admin()],
  baseURL: getBaseURL(),
  trustedOrigins: ["https://isolatucasa.com", "http://0.0.0.0:3000", "http://localhost:3000"],
  secret: process.env.BETTER_AUTH_SECRET || "fallback_secret",
});
