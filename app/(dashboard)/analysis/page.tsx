import { auth } from "@/auth";
import JobDescriptionForm from "@/components/dashboard/analysis/JobDescriptionForm";
import prisma from "@/lib/prisma";

const page = async () => {
  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  const profile = await prisma.candidateProfile.findUnique({
    where: { userId: session.user.id },
  });

  if (!profile) return null;

  return (
    <main className="mx-auto max-w-6xl flex flex-col gap-10 p-6 md:p-10 w-full">
      {/* Header */}
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Job Description
        </h1>
        <p className="text-sm text-muted-foreground">
          Add the job details you want to analyze against your resume.
        </p>
      </header>
      <JobDescriptionForm
        resumeUrl={profile?.resumeUrl}
        profileId={profile?.id}
      />
    </main>
  );
};

export default page;
