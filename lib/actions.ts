"use server";
import { auth } from "@/auth";
import prisma from "./prisma";
import { uploadToImageKit } from "./imagekit";
import { redirect } from "next/navigation";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";

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

const buildInterviewPrompt = (resume: string, jobDescription: string) => `
You are an expert interview coach and career strategist with deep knowledge of hiring practices across industries.

Your task is to analyze a candidate's resume against a job description, research the company, and generate a comprehensive, personalized interview preparation report.

---

## INPUTS

### Candidate Resume:
${resume}

### Job Description (includes job title, company name, location if provided, and full JD):
${jobDescription}

---

## YOUR RESEARCH TASK (do this before generating output)

Before generating the report, mentally research and reason about:

1. **Company Research:**
   - What does this company do, what is their core product/service and business model?
   - What is their tech stack (if a tech role)? What engineering culture are they known for?
   - What are their recent developments — funding rounds, product launches, acquisitions, layoffs, rebrands, or strategic pivots?
   - What are their stated values, mission, and culture based on public knowledge?
   - What kind of candidates do they typically hire and what do they value most?

2. **Role Research:**
   - What does this specific role typically demand in this industry?
   - What are the must-have vs. nice-to-have skills for this role at this seniority level?
   - What does the day-to-day of this role likely look like at this company?

3. **Candidate Analysis:**
   - What are this candidate's strongest selling points relative to this JD?
   - Where are the clear mismatches or missing skills?
   - What experiences on their resume are most relevant and should be highlighted?

Use this research to make the output highly specific to this company, this role, and this candidate — NOT generic advice.

---

## OUTPUT REQUIREMENTS

Return ONLY valid JSON. No markdown. No backticks. No extra fields. No explanations outside JSON. Follow the schema exactly.

### Schema rules:

- **title**: The exact job title from the job description.

- **matchScore**: Integer 0–100. Be honest and calibrated:
  - 90–100: Near-perfect fit, candidate meets almost all requirements
  - 70–89: Strong fit with minor gaps
  - 50–69: Moderate fit, noticeable gaps but viable
  - 30–49: Weak fit, significant gaps
  - 0–29: Poor fit, fundamental mismatches

- **technicalQuestions**: Generate as MANY as possible (aim for 15–25). For each:
  - "question": A specific, realistic question this company/interviewer would actually ask (not generic). Include company-specific or domain-specific angles where relevant.
  - "intention": Why the interviewer is asking this — what skill, trait, or red flag they are probing for.
  - "answer": A detailed, 10/10 model answer tailored to this candidate's background. Include: key concepts to cover, the ideal structure/approach, specific examples the candidate could draw from their own resume, common mistakes to avoid, and what separates a good answer from a great one.

- **behavioralQuestions**: Generate 10–15 questions using the STAR format lens. For each:
  - "question": Realistic behavioral question, ideally tied to this company's known values or common challenges for this role.
  - "intention": What the interviewer is really evaluating (e.g., conflict resolution, ownership, leadership under pressure).
  - "answer": A 10/10 model answer with: suggested STAR structure, specific resume experiences the candidate should reference, tone and framing tips, and what interviewers at this type of company typically want to hear.

- **skillGaps**: List every meaningful gap between the candidate's profile and the job requirements. For each:
  - "skill": The specific missing or weak skill (e.g., "Kubernetes", "stakeholder management", "system design at scale").
  - "severity": "low" | "medium" | "high" based on how critical this skill is for THIS role at THIS company.
  - Add a brief "impact" explanation inline in the skill name if helpful, e.g. "GraphQL (used heavily in their API layer)".

- **preparationPlan**: A realistic day-by-day plan (7–14 days) assuming the interview is coming up soon. For each day:
  - "day": Day number starting from 1.
  - "focus": The main theme of the day (e.g., "System Design Fundamentals", "Company Deep-Dive + Culture Fit", "Mock Behavioral Interview").
  - "tasks": Specific, actionable tasks. Include real resource suggestions where possible (e.g., "Read 'Designing Data-Intensive Applications' Chapter 5", "Solve 3 medium-difficulty graph problems on LeetCode", "Write STAR stories for 5 behavioral questions based on your resume"). Tailor tasks to bridge the candidate's specific skill gaps.

---

## IMPORTANT QUALITY RULES

- Every question, answer, and task must feel like it was written FOR THIS CANDIDATE applying to THIS COMPANY — not copy-pasted generic content.
- Technical questions should reflect the actual tech stack and engineering challenges of this company/role.
- Behavioral questions should reference this company's known culture and values.
- The preparation plan should prioritize the highest-severity skill gaps first.
- The match score must be brutally honest — do not inflate it to make the candidate feel good.
- If the company is well-known, incorporate specific public knowledge about them (culture, interview style, product focus) into the questions and answers.
`;

export const generateInterview = async (
  profileId: string,
  resume: string,
  jobDescription: string,
) => {
  const { text } = await generateText({
    model: google("gemini-2.5-flash-lite"),
    prompt: buildInterviewPrompt(resume, jobDescription),
  });

  const clean = text
    .replace(/^```json\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();
  const report = JSON.parse(clean);

  await prisma.interviewReport.create({
    data: {
      profileId,
      jobDescription,
      title: report.title,
      matchScore: report.matchScore,
      technicalQuestions: {
        create: report.technicalQuestions.map(
          (
            q: { question: string; intention: string; answer: string },
            i: number,
          ) => ({
            question: q.question,
            intention: q.intention,
            answer: q.answer,
            order: i,
          }),
        ),
      },
      behavioralQuestions: {
        create: report.behavioralQuestions.map(
          (
            q: { question: string; intention: string; answer: string },
            i: number,
          ) => ({
            question: q.question,
            intention: q.intention,
            answer: q.answer,
            order: i,
          }),
        ),
      },
      skillGaps: {
        create: report.skillGaps.map(
          (g: { skill: string; severity: string; impact?: string }) => ({
            skill: g.skill,
            severity: g.severity,
            impact: g.impact ?? null,
          }),
        ),
      },
      preparationDays: {
        create: report.preparationPlan.map(
          (d: { day: number; focus: string; tasks: string[] }) => ({
            day: d.day,
            focus: d.focus,
            tasks: d.tasks,
          }),
        ),
      },
    },
  });

  return { success: true, message: "Interview report generated successfully" };
};
