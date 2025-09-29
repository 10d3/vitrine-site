import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../db/prisma";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { z } from "zod";
import bcrypt from "bcryptjs";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1), // Changed from min(6) to min(1) to allow any password length during validation
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*****",
        },
      },
      async authorize(credentials) {
        console.log(credentials)
        try {
          // Validate credentials
          if (!credentials?.email || !credentials?.password) {
            console.log("Missing credentials");
            return null;
          }

          // Parse credentials with schema
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          // Find user in database
          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          // Check if user exists
          if (!user) {
            console.log("User not found");
            return null;
          }

          // Verify password
          const passwordMatch = await bcrypt.compare(
            password,
            user.password as string
          );

          if (!passwordMatch) {
            console.log("Password doesn't match");
            return null;
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
    Google,
  ],
   session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login",
    signOut: "/sign-out",
    // error: "/pos/error",
  },
  // Add the secret from environment variables
  secret: process.env.AUTH_SECRET,
});
