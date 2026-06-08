import { auth } from "@/auth";
import ContactInformationCard from "@/components/dashboard/resume/ContactInformationCard";
import EducationHistoryCard from "@/components/dashboard/resume/EducationHistoryCard";
import PersonalInformationCard from "@/components/dashboard/resume/PersonalInformationCard";
import WebsiteAndSkills from "@/components/dashboard/resume/WebsiteAndSkills";
import WorkHistoryCard from "@/components/dashboard/resume/WorkHistoryCard";
import prisma from "@/lib/prisma";

const Resume = async () => {
  const session = await auth();
  if (!session?.user?.id) return null;
  const profile = await prisma.candidateProfile.findUnique({
    where: {
      userId: session.user.id,
    },
    include: {
      education: true,
      jobs: true,
    },
  });
  console.log(profile);

  return (
    <main className="grid grid-cols-2 gap-10 p-10">
      <PersonalInformationCard
        firstName={profile?.firstName || ""}
        lastName={profile?.lastName || ""}
      />
      <ContactInformationCard
        addressLine1={profile?.addressLine1 || ""}
        addressLine2={profile?.addressLine2 || ""}
        email={profile?.email || ""}
        phone={profile?.phone || ""}
      />
      <EducationHistoryCard education={profile?.education} />
      <WebsiteAndSkills
        linkedin={profile?.linkedin || ""}
        skills={profile?.skills || []}
      />
      <WorkHistoryCard jobs={profile?.jobs} />
    </main>
  );
};

export default Resume;
