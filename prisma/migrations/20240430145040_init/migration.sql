-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_rfid" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rfidvalue" BIGINT NOT NULL,
    "studentin" INTEGER NOT NULL,
    CONSTRAINT "rfid_studentin_fkey" FOREIGN KEY ("studentin") REFERENCES "students" ("sinum") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_rfid" ("id", "rfidvalue", "studentin") SELECT "id", "rfidvalue", "studentin" FROM "rfid";
DROP TABLE "rfid";
ALTER TABLE "new_rfid" RENAME TO "rfid";
CREATE UNIQUE INDEX "rfid_rfidvalue_key" ON "rfid"("rfidvalue");
CREATE UNIQUE INDEX "rfid_studentin_key" ON "rfid"("studentin");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
