"use server";
import { auth } from "@/auth";
import prisma from "./prisma";
import { uploadToImageKit } from "./imagekit";
import { redirect } from "next/navigation";

export async function createCandidateProfile(data: WizardFormData | null) {
  const session = await auth();
  let resumeUrl;
  if (data?.resume) {
    resumeUrl = await uploadToImageKit(data?.resume);
  }
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  return prisma.candidateProfile.create({
    data: {
      userId: session.user.id,

      firstName: data?.firstName,
      lastName: data?.lastName,

      email: data?.email,
      phone: data?.phone,

      addressLine1: data?.addressLine1,
      addressLine2: data?.addressLine2,
      city: data?.city,
      state: data?.state,
      country: data?.country,
      postalCode: data?.postalCode,

      linkedin: data?.linkedin,
      x: data?.x,
      github: data?.github,
      portfolio: data?.portfolio,
      resumeUrl: resumeUrl,

      skills: data?.skills ?? [],

      education: {
        create:
          data?.education?.map((edu) => ({
            school: edu.school,
            degree: edu.degree,
            major: edu.major,
            gpa: edu.gpa,
            startDate: new Date(edu.startDate),
            endDate: edu.endDate ? new Date(edu.endDate) : null,
          })) ?? [],
      },

      jobs: {
        create:
          data?.jobs?.map((job) => ({
            jobTitle: job.jobTitle,
            company: job.company,
            location: job.location,
            startDate: new Date(job.startDate),
            endDate: job.endDate ? new Date(job.endDate) : null,
            currentlyWorking: job.currentlyWorking,
            description: job.description,
          })) ?? [],
      },
    },
  });
}


export const requireProfile = async (options?: {
  redirectToSignin?: string;
  redirectToGetStarted?: string;
  redirectToDashboard?: string;
}) => {
  const {
    redirectToSignin = "/signin",
    redirectToGetStarted = "/get-started",
    redirectToDashboard = "/dashboard",
  } = options || {};

  const session = await auth();

  if (!session?.user?.id) {
    redirect(redirectToSignin);
  }

  const profile = await prisma.candidateProfile.findUnique({
    where: {
      userId: session.user.id,
    },
    select: { id: true },
  });

  return {
    session,
    profile,
    redirects: {
      redirectToSignin,
      redirectToGetStarted,
      redirectToDashboard,
    },
  };
};