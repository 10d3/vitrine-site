"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "../db/prisma";

// Define signup schema for validation
const signupSchema = z.object({
  // User information
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function signupUserWithTenant(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Validate with zod
    const validatedData = signupSchema.parse({
      name,
      email,
      password,
    });

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (existingUser) {
      return {
        success: false,
        message: "User with this email already exists",
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    // Create tenant, site, and user in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create user with admin role
      const user = await tx.user.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          password: hashedPassword,
          role: "ADMIN", // Make the signup user an admin
        },
      });

      return { user };
    });

    return {
      success: true,
      message: "Account and business created successfully",
      userId: result.user.id,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.errors);
      return {
        success: false,
        message:
          "Validation error: " +
          error.errors.map((e) => `${e.path}: ${e.message}`).join(", "),
        errors: error.errors,
      };
    }

    console.error("Signup error:", error);
    return {
      success: false,
      message: "Failed to create account and business",
    };
  }
}

const userSignupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function signupUser(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Validate with zod
    const validatedData = userSignupSchema.parse({
      name,
      email,
      password,
    });

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (existingUser) {
      return {
        success: false,
        message: "User with this email already exists",
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        password: hashedPassword,
        role: "ADMIN", // Default role for new users
      },
    });

    return {
      success: true,
      message: "Account created successfully",
      userId: user.id,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.errors);
      return {
        success: false,
        message:
          "Validation error: " +
          error.errors.map((e) => `${e.path}: ${e.message}`).join(", "),
        errors: error.errors,
      };
    }

    console.error("Signup error:", error);
    return {
      success: false,
      message: "Failed to create account",
    };
  }
}
