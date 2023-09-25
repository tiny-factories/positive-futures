-- CreateTable
CREATE TABLE "Poem" (
    "id" TEXT NOT NULL,
    "scenario" TEXT,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Poem_pkey" PRIMARY KEY ("id")
);
