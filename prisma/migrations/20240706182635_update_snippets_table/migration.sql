/*
  Warnings:

  - You are about to drop the column `gistUrl` on the `snippets` table. All the data in the column will be lost.
  - Added the required column `link` to the `snippets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "snippets" DROP COLUMN "gistUrl",
ADD COLUMN     "link" TEXT NOT NULL;
