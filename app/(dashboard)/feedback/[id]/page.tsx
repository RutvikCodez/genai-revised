import FeedbackCard from "@/components/dashboard/feedback/FeedbackCard";
import ScoreCard from "@/components/dashboard/feedback/ScoreCard";
import { formatSkillGaps } from "@/lib/formatSkillGaps";
import { getScoreFeedback } from "@/lib/getScoreFeedback";
import prisma from "@/lib/prisma";
import { Flame, Hospital, ListCheck, TriangleAlert } from "lucide-react";

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

  const totalQuestions = technicalQuestions.length + behavioralQuestions.length

  return (
    <main className="mx-auto max-w-6xl flex flex-col gap-10 p-6 md:p-10 w-full">
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

      <div className="w-full grid grid-cols-4 gap-10">
        <FeedbackCard
          icon={Flame}
          headline={label}
          title={range}
          description="Score range"
        />
        <FeedbackCard
          icon={TriangleAlert}
          headline="Skill gaps"
          title={skillGaps.length.toString()}
          description={formatSkillGaps(skillGaps)}
        />
        <FeedbackCard
          icon={ListCheck}
          headline="Prep tasks"
          title={totalTasks.toString()}
          description={`Across ${totalDays} days`}
        />
        <FeedbackCard
          icon={Hospital}
          headline="Questions"
          title={totalQuestions.toString()}
          description="Total to practise"
        />
      </div>
    </main>
  );
};

export default Feedback;
