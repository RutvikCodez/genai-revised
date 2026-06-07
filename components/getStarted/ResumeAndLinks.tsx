"use client";
import { FileSearchCorner } from "lucide-react";
import { resumeFormSchema, websiteFields } from "@/constants";
import { FormSection } from "./FormSection";
import { FileUploadField } from "./FileUploadField";
import { SkillsField } from "./SkillsField";
import { createStep } from "@/lib/createStep";
import { FieldSection } from "./FieldSection";

export default createStep(
  {
    icon: FileSearchCorner,
    title: "Resume, Websites, & Skills",
    schema: resumeFormSchema,
    getDefaults: (d) => ({
      resume: d?.resume ?? undefined,
      linkedin: d?.linkedin ?? "",
      x: d?.x ?? "",
      github: d?.github ?? "",
      portfolio: d?.portfolio ?? "",
      skills: d?.skills ?? [],
    }),
  },
  (form) => (
    <>
      <div className="flex flex-col gap-5">
        <FormSection
          title="Resume"
          description="Upload your latest resume in PDF format."
        />
        <FileUploadField
          name="resume"
          control={form.control}
          placeholder="Choose PDF Resume"
        />
      </div>
      <FieldSection
        title="Professional Profiles"
        description="Add links that showcase your work and experience."
        control={form.control}
        fields={websiteFields.map(({ name, label }) => ({
          name,
          label,
          type: "url",
        }))}
      />
      <div className="flex flex-col gap-5">
        <FormSection
          title="Skills"
          description="Add up to 25 skills that best represent your expertise."
        />
        <SkillsField name="skills" control={form.control} />
      </div>
    </>
  ),
);
