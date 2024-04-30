/*
  Warnings:

  - You are about to drop the column `stuindex` on the `studentatamp` table. All the data in the column will be lost.
  - Added the required column `stuin` to the `studentatamp` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_studentatamp" (
    "atampid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stuin" INTEGER NOT NULL,
    "time" DATETIME NOT NULL,
    CONSTRAINT "studentatamp_stuin_fkey" FOREIGN KEY ("stuin") REFERENCES "rfid" ("studentin") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_studentatamp" ("atampid", "time") SELECT "atampid", "time" FROM "studentatamp";
DROP TABLE "studentatamp";
ALTER TABLE "new_studentatamp" RENAME TO "studentatamp";
CREATE UNIQUE INDEX "studentatamp_stuin_key" ON "studentatamp"("stuin");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
