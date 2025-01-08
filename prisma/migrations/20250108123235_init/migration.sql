-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('Admin', 'CSV');

-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mock_ups" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "template" TEXT,
    "is_enabled" BOOLEAN NOT NULL DEFAULT true,
    "slug" TEXT NOT NULL,
    "content" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mock_ups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "userRole" "user_role" NOT NULL DEFAULT 'CSV',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "posts_name_idx" ON "posts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "mock_ups_slug_key" ON "mock_ups"("slug");

-- CreateIndex
CREATE INDEX "mock_ups_name_idx" ON "mock_ups"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
