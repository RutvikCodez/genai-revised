"use client";
import { GraduationCap } from "lucide-react";
import { createStep } from "@/lib/createStep";
import {
  defaultEducation,
  educationHistoryFormSchema,
  educationInputFields,
} from "@/constants";
import { FieldArray } from "./FieldArray";

export default createStep(
  {
    icon: GraduationCap,
    title: "Education History",
    schema: educationHistoryFormSchema,
    getDefaults: (d) => ({
      education: d.education?.length ? d.education : [defaultEducation],
    }),
  },
  (form) => (
    <FieldArray
      control={form.control}
      name="education"
      title="Academic Background"
      description="Add your educational qualifications, institutions, and graduation details."
      cardLabel="Education"
      cardSubtitle="Academic qualification details"
      fields={educationInputFields}
      defaultItem={defaultEducation}
      addLabel="Add Education"
    />
  ),
);
