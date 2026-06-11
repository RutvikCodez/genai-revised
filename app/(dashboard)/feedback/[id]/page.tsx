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

  return <div>Feedback {id}</div>;
};

export default Feedback;
