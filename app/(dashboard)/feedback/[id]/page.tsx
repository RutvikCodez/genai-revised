import ScoreCard from "@/components/dashboard/feedback/ScoreCard";
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
  console.log(feedback.jobDescription);

  return (
    <div>
      <ScoreCard
        jobTitle={feedback.title}
        matchScore={feedback.matchScore}
        company={
          feedback.jobDescription
            ?.split("\n")
            .map((line) => line.trim())
            .filter(Boolean)[1] || ""
        }
        behavioralQuestionLength={feedback.behavioralQuestions.length}
        technicalQuestionLength={feedback.technicalQuestions.length}
        day={feedback.preparationDays.length}
      />
    </div>
  );
};

export default Feedback;
