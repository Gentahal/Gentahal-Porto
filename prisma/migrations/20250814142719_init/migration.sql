/*
  Warnings:

  - You are about to drop the column `images` on the `Porto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Porto" DROP COLUMN "images",
ADD COLUMN     "image" TEXT[];
