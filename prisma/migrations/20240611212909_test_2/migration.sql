/*
  Warnings:

  - You are about to drop the column `contnet` on the `blogPost` table. All the data in the column will be lost.
  - Added the required column `author` to the `blogPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `blogPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `blogPost` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "blogPost" DROP CONSTRAINT "blogPost_userId_fkey";

-- AlterTable
ALTER TABLE "blogPost" DROP COLUMN "contnet",
ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;
