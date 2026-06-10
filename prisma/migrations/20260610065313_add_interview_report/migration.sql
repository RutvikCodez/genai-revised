-- CreateEnum
CREATE TYPE "SkillGapSeverity" AS ENUM ('low', 'medium', 'high');

-- CreateTable
CREATE TABLE "InterviewReport" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "jobDescription" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "matchScore" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InterviewReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechnicalQuestion" (
    "id" TEXT NOT NULL,
    "reportId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "intention" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "TechnicalQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BehavioralQuestion" (
    "id" TEXT NOT NULL,
    "reportId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "intention" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "BehavioralQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillGap" (
    "id" TEXT NOT NULL,
    "reportId" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "severity" "SkillGapSeverity" NOT NULL,
    "impact" TEXT,

    CONSTRAINT "SkillGap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreparationDay" (
    "id" TEXT NOT NULL,
    "reportId" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "focus" TEXT NOT NULL,
    "tasks" TEXT[],

    CONSTRAINT "PreparationDay_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InterviewReport" ADD CONSTRAINT "InterviewReport_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "CandidateProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnicalQuestion" ADD CONSTRAINT "TechnicalQuestion_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "InterviewReport"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BehavioralQuestion" ADD CONSTRAINT "BehavioralQuestion_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "InterviewReport"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillGap" ADD CONSTRAINT "SkillGap_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "InterviewReport"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PreparationDay" ADD CONSTRAINT "PreparationDay_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "InterviewReport"("id") ON DELETE CASCADE ON UPDATE CASCADE;
