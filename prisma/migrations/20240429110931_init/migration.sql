-- CreateTable
CREATE TABLE "studentatamp" (
    "atampid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stuindex" INTEGER NOT NULL,
    "time" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "rfid" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rfidvalue" BIGINT NOT NULL,
    "studentin" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "rfid_rfidvalue_key" ON "rfid"("rfidvalue");

-- CreateIndex
CREATE UNIQUE INDEX "rfid_studentin_key" ON "rfid"("studentin");
