-- CreateTable
CREATE TABLE "students" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sinum" INTEGER NOT NULL,
    "stuname" TEXT NOT NULL,
    "studob" DATETIME NOT NULL,
    "pnumber" BIGINT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "students_sinum_key" ON "students"("sinum");
