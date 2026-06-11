import FeedbackcardWrapper from "@/components/dashboard/feedback/FeedbackcardWrapper";
import ScoreCard from "@/components/dashboard/feedback/ScoreCard";
import TabsWrapper from "@/components/dashboard/feedback/TabsWrapper";
import { formatSkillGaps } from "@/lib/formatSkillGaps";
import { getScoreFeedback } from "@/lib/getScoreFeedback";
import prisma from "@/lib/prisma";

const Feedback = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const feedback = await prisma.interviewReport.findUnique({
    where: {
      id: id,
    },
    include: {
      behavioralQuestions: true,
      preparationDays: true,
      skillGaps: true,
      technicalQuestions: true,
    },
  });
  if (!feedback) return;
  const lines = feedback.jobDescription?.split("\n").filter(Boolean) || [];
  const company = lines[1] || "";

  const {
    title,
    matchScore,
    behavioralQuestions,
    technicalQuestions,
    preparationDays,
    skillGaps,
  } = feedback;

  const { label, range } = getScoreFeedback(matchScore);

  const totalTasks = preparationDays.reduce(
    (acc, day) => acc + (day?.tasks?.length || 0),
    0,
  );

  const totalDays = preparationDays?.length || 0;

  const totalQuestions = technicalQuestions.length + behavioralQuestions.length;

  return (
    <main className="mx-auto max-w-6xl flex flex-col gap-6 p-6 md:p-10 w-full">
      {/* Header */}
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Interview Preparation Report
        </h1>
        <p className="text-sm text-muted-foreground">
          Personalized insights and practice questions for{" "}
          <span className="text-foreground font-medium">{feedback.title}</span>
        </p>
      </header>

      <ScoreCard
        jobTitle={title}
        matchScore={matchScore}
        company={company}
        behavioralQuestionLength={behavioralQuestions.length}
        technicalQuestionLength={technicalQuestions.length}
        day={preparationDays.length}
      />

      <FeedbackcardWrapper
        label={label}
        range={range}
        skillGapLength={String(skillGaps.length)}
        skillGap={formatSkillGaps(skillGaps)}
        totalTask={String(totalTasks)}
        days={totalDays}
        totalquestion={String(totalQuestions)}
      />

      <TabsWrapper technicalQuestions={technicalQuestions} />
    </main>
  );
};

export default Feedback;
