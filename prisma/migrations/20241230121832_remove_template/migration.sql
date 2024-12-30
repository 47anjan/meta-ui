-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('Admin', 'CSV');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "userRole" "user_role" NOT NULL DEFAULT 'CSV',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
