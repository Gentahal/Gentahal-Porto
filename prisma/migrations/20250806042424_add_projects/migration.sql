/*
  Warnings:

  - Added the required column `image` to the `Porto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Porto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Porto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Porto" ADD COLUMN     "github" TEXT,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "year" TEXT NOT NULL,
ALTER COLUMN "link" DROP NOT NULL;
