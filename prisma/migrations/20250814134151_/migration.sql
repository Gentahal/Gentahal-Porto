/*
  Warnings:

  - The `image` column on the `Porto` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Porto" DROP COLUMN "image",
ADD COLUMN     "image" TEXT[];
