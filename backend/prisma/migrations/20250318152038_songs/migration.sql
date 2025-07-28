-- CreateTable
CREATE TABLE "Song" (
    "id" SERIAL NOT NULL,
    "publicUrl" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "singer" TEXT NOT NULL,
    "actors" TEXT NOT NULL,
    "artistImg" TEXT NOT NULL,
    "monthlyLis" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "credits" JSONB,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);
