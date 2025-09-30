"use server";

import { redirect } from "next/navigation";
import { Blog } from "../generated/prisma";
import { auth } from "../auth";
import { headers } from "next/headers";
import { prisma } from "../prisma";

type SaveBlogInput = {
  id?: string; // Make id optional
  title: string;
  slug: string;
  description?: string;
  coverImage: string | null;
  content: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  authorId: string;
};

export async function saveToDB(value: SaveBlogInput): Promise<Blog> {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/login");
  if (session.user?.role !== "admin")
    throw new Error("Authorization required to make blog content");

  try {
    let blog: Blog;
    // Ensure authorId is always from the session user
    const dataToSave = { ...value, authorId: session?.user?.id };

    if (value.id) {
      // If an ID is provided, try to update the existing blog
      blog = await prisma.blog.update({
        where: { id: value.id },
        data: dataToSave, // Use dataToSave which includes the correct authorId
      });
    } else {
      // If no ID is provided, create a new blog
      // Ensure that 'id' is not passed to create, as it's auto-generated
      const { id, authorId, ...createData } = dataToSave; // Destructure id and authorId from dataToSave
      console.log(id);
      blog = await prisma.blog.create({
        data: {
          ...createData,
          author: { connect: { id: session.user.id } },
        },
      });
    }

    if (!blog) {
      throw new Error("Failed to save blog to database.");
    }

    return blog;
  } catch (error) {
    console.error("Error in saveToDB:", error);
    throw new Error(
      `Failed to save blog: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}
