-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Injury" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "reportedBy" TEXT NOT NULL,
    "reportedDate" TIMESTAMP(3) NOT NULL,
    "reportedTime" TIMESTAMP(3) NOT NULL,
    "painLevel" INTEGER NOT NULL,
    "patientName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Injury_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Injury" ADD CONSTRAINT "Injury_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
