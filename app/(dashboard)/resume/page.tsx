import { Badge } from "@/components/ui/badge";
import { auth } from "@/auth";
import { InfoCard } from "@/components/dashboard/resume/InfoCard";
import { HistoryCard, dateRange } from "@/components/dashboard/resume/HistoryCard";
import {
  BookOpen, BriefcaseBusiness, Building2, CalendarDays,
  CircleUserRound, FileSearchCorner, GraduationCap,
  MapPin, Medal, School, SquareUserRound,
} from "lucide-react";
import prisma from "@/lib/prisma";

const Resume = async () => {
  const session = await auth();
  if (!session?.user?.id) return null;

  const profile = await prisma.candidateProfile.findUnique({
    where: { userId: session.user.id },
    include: { education: true, jobs: true },
  });

  return (
    <main className="grid grid-cols-2 gap-10 p-10">
      <InfoCard
        icon={CircleUserRound}
        title="Personal Information"
        fields={[
          { label: "Legal Name", value: `${profile?.firstName} ${profile?.lastName}` },
        ]}
      />

      <InfoCard
        icon={SquareUserRound}
        title="Contact Information"
        fields={[
          { label: "Address", value: `${profile?.addressLine1} ${profile?.addressLine2}` },
          { label: "Phone", value: profile?.phone },
          { label: "Email", value: profile?.email },
        ]}
      />

      <HistoryCard
        icon={GraduationCap}
        heading="Education History"
        items={profile?.education?.map(({ school, degree, major, startDate, endDate, gpa }) => ({
          title: school,
          meta: [
            { icon: School, value: degree },
            { icon: BookOpen, value: major },
            { icon: CalendarDays, value: dateRange({ startDate, endDate }) },
            { icon: Medal, value: gpa },
          ],
        }))}
      />

      <InfoCard
        icon={FileSearchCorner}
        title="Websites & Skills"
        fields={[
          { label: "LinkedIn", value: profile?.linkedin },
          {
            label: "Skills",
            value: (
              <div className="flex flex-wrap gap-2">
                {profile?.skills?.map((skill, i) => <Badge key={i}>{skill}</Badge>)}
              </div>
            ),
          },
        ]}
      />

      <HistoryCard
        icon={BriefcaseBusiness}
        heading="Work History"
        className="col-span-2"
        items={profile?.jobs?.map(({ jobTitle, company, location, startDate, endDate, currentlyWorking, description }) => ({
          title: jobTitle,
          meta: [
            { icon: Building2, value: company },
            { icon: MapPin, value: location },
            { icon: CalendarDays, value: dateRange({ startDate, endDate, currentlyWorking }) },
          ],
          description,
        }))}
      />
    </main>
  );
};

export default Resume;