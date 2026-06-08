import { auth } from "@/auth";
import prisma from "@/lib/prisma";

import { Badge } from "@/components/ui/badge";
import { InfoCard } from "@/components/dashboard/resume/InfoCard";
import {
  HistoryCard,
  dateRange,
} from "@/components/dashboard/resume/HistoryCard";

import {
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CircleUserRound,
  FileSearchCorner,
  GraduationCap,
  MapPin,
  Medal,
  School,
  SquareUserRound,
} from "lucide-react";

const Resume = async () => {
  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  const profile = await prisma.candidateProfile.findUnique({
    where: { userId: session.user.id },
    include: { education: true, jobs: true },
  });

  const fullName = `${profile?.firstName ?? ""} ${
    profile?.lastName ?? ""
  }`.trim();

  return (
    <main className="mx-auto max-w-6xl flex flex-col gap-10 p-6 md:p-10">
      {/* Header */}
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Resume Overview
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage and review your professional profile information
        </p>
      </header>

      {/* Grid */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Personal Info */}
        <InfoCard
          icon={CircleUserRound}
          title="Personal Information"
          fields={[
            {
              label: "Legal Name",
              value: fullName || "Not provided",
            },
          ]}
        />

        {/* Contact */}
        <InfoCard
          icon={SquareUserRound}
          title="Contact Information"
          fields={[
            {
              label: "Address",
              value:
                `${profile?.addressLine1 ?? ""} ${
                  profile?.addressLine2 ?? ""
                }`.trim() || "Not provided",
            },
            { label: "Phone", value: profile?.phone || "Not provided" },
            { label: "Email", value: profile?.email || "Not provided" },
          ]}
        />

        {/* Education */}
        <HistoryCard
          icon={GraduationCap}
          heading="Education History"
          items={
            profile?.education?.length
              ? profile.education.map(
                  ({
                    school,
                    degree,
                    major,
                    startDate,
                    endDate,
                    gpa,
                  }) => ({
                    title: school,
                    meta: [
                      { icon: School, value: degree },
                      { icon: BookOpen, value: major },
                      {
                        icon: CalendarDays,
                        value: dateRange({
                          startDate,
                          endDate,
                        }),
                      },
                      { icon: Medal, value: gpa },
                    ],
                  })
                )
              : [
                  {
                    title: "No education added",
                    meta: [],
                  },
                ]
          }
        />

        {/* Skills & Links */}
        <InfoCard
          icon={FileSearchCorner}
          title="Websites & Skills"
          fields={[
            {
              label: "LinkedIn",
              value: profile?.linkedin || "Not provided",
            },
            {
              label: "Skills",
              value: (
                <div className="flex flex-wrap gap-2">
                  {profile?.skills?.length ? (
                    profile.skills.map((skill, i) => (
                      <Badge key={`${skill}-${i}`} variant="secondary">
                        {skill}
                      </Badge>
                    ))
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      No skills added
                    </span>
                  )}
                </div>
              ),
            },
          ]}
        />

        {/* Work History */}
        <HistoryCard
          icon={BriefcaseBusiness}
          heading="Work History"
          className="md:col-span-2"
          items={
            profile?.jobs?.length
              ? profile.jobs.map(
                  ({
                    jobTitle,
                    company,
                    location,
                    startDate,
                    endDate,
                    currentlyWorking,
                    description,
                  }) => ({
                    title: jobTitle,
                    meta: [
                      { icon: Building2, value: company },
                      { icon: MapPin, value: location },
                      {
                        icon: CalendarDays,
                        value: dateRange({
                          startDate,
                          endDate,
                          currentlyWorking,
                        }),
                      },
                    ],
                    description: (
    <div className="flex flex-col gap-1">
      {description?.split("\n").map((line, i) => (
        <span key={i}>{line}</span>
      ))}
    </div>
  ),
                  })
                )
              : [
                  {
                    title: "No work experience added",
                    meta: [],
                  },
                ]
          }
        />
      </section>
    </main>
  );
};

export default Resume;