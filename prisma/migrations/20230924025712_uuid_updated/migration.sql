/*
  Warnings:

  - You are about to drop the column `location` on the `Story` table. All the data in the column will be lost.
  - You are about to drop the column `occupation` on the `Story` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Story" DROP COLUMN "location",
DROP COLUMN "occupation";
