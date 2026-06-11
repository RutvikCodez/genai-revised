"use client";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/components/getStarted/FormField";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { JobDescriptionFields, JobDescriptionFormSchema } from "@/constants";
import Title from "./Title";
import pdfToText from "react-pdftotext";
import { generateInterview } from "@/lib/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const JobDescriptionForm = ({
  resumeUrl,
  profileId,
}: {
  resumeUrl: string | null | undefined;
  profileId: string;
}) => {
  const form = useForm<z.infer<typeof JobDescriptionFormSchema>>({
    resolver: zodResolver(JobDescriptionFormSchema),
    defaultValues: {
      jobTitle: "",
      company: "",
      location: "",
      jobDescription: "",
    },
  });

  const router = useRouter();

  const descriptionLength = form.watch("jobDescription")?.length ?? 0;

  const onSubmit = async (values: z.infer<typeof JobDescriptionFormSchema>) => {
    if (!resumeUrl) return;

    toast.promise(
      async () => {
        const response = await fetch(resumeUrl);
        const blob = await response.blob();
        const text = await pdfToText(blob);

        const jobDescription = `
    ${values.jobTitle}
    ${values.company}
    ${values.location}

    ${values.jobDescription}
    `;

        const id = await generateInterview(profileId, text, jobDescription);
        return id;
      },
      {
        loading: "Generating your interview report...",
        success: (id) => {
          router.push(`/feedback/${id}`);
          return "Interview report generated successfully!";
        },
        error: "Failed to generate interview report. Please try again.",
      },
    );
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-8"
    >
      {/* Job Information */}
      <Title
        title="Position Details"
        description="Basic information about the role."
      >
        <FieldGroup className="grid gap-6 md:grid-cols-2">
          {JobDescriptionFields.map(
            ({ name, label, placeholder, icon: Icon }) => (
              <div key={name} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon className="size-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{label}</span>
                </div>

                <FormField
                  name={name}
                  label=""
                  control={form.control}
                  inputProps={{
                    placeholder,
                  }}
                />
              </div>
            ),
          )}
        </FieldGroup>
      </Title>

      <Title
        title="Job Description"
        description="Paste the complete job posting for the most accurate analysis."
      >
        <div className="flex justify-end">
          <span className="text-xs text-muted-foreground">
            {descriptionLength} characters
          </span>
        </div>
        <Controller
          name="jobDescription"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="jobDescription">Description</FieldLabel>

              <Textarea
                {...field}
                id="jobDescription"
                rows={12}
                aria-invalid={fieldState.invalid}
                placeholder="Paste the complete job description, responsibilities, requirements, qualifications, and preferred skills..."
                className="resize-none"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </Title>

      <div className="sticky bottom-0 border-t border-border/50 bg-background/80 py-4 backdrop-blur-sm">
        <Button type="submit" size="lg" className="w-full">
          Analyze Job Match
        </Button>
      </div>
    </form>
  );
};

export default JobDescriptionForm;
