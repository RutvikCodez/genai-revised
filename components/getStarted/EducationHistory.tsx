"use client";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import GetStartedWrapper from "./GetStartedWrapper";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { GraduationCap } from "lucide-react";
import { Button } from "../ui/button";
import { useWizardFormContext } from "@/app/context/WizardFormContext";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useFieldArray } from "react-hook-form";

const EducationHistory = () => {
  const formSchema = z.object({
    education: z.array(
      z.object({
        school: z.string().trim().min(2, "School name is required"),

        degree: z.string().trim().min(2, "Degree is required"),

        major: z.string().trim().min(2, "Major is required"),

        gpa: z.string().trim().optional().or(z.literal("")),

        startDate: z.string().min(1, "Start date is required"),

        endDate: z.string().optional().or(z.literal("")),
      }),
    ),
  });

  const { prevStep, setData, data } = useWizardFormContext();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      education: data?.education?.length
        ? data.education
        : [
            {
              school: "",
              degree: "",
              major: "",
              gpa: "",
              startDate: "",
              endDate: "",
            },
          ],
    },
  });

  const { control, watch } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const inputFields = [
    {
      name: "school" as const,
      label: "School",
      type: "text",
    },
    {
      name: "degree" as const,
      label: "Degree",
      type: "text",
    },
    {
      name: "major" as const,
      label: "Major",
      type: "text",
    },
    {
      name: "gpa" as const,
      label: "GPA",
      type: "text",
    },
    {
      name: "startDate" as const,
      label: "Start Date",
      type: "date",
    },
    {
      name: "endDate" as const,
      label: "End Date",
      type: "date",
    },
  ];

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setData((prev) => ({ ...prev, ...data }));
  };

  return (
    <GetStartedWrapper>
      <div className="relative flex flex-col  gap-5 p-8 md:p-10">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <GraduationCap />
            Education History
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {fields.map((job, index) => (
              <div key={job.id} className="flex flex-col gap-5">
                <div className="flex gap-2 items-center">
                  <span>Education {index + 1}</span>
                  <Button
                    variant={"destructive"}
                    className="text-red-500"
                    onClick={() => {
                      if (index !== 0) remove(index);
                    }}
                  >
                    Remove
                  </Button>
                </div>
                <FieldGroup className="grid grid-cols-2 w-full gap-10">
                  {inputFields.map(({ name, label, type }) => (
                    <Controller
                      key={name}
                      name={`education.${index}.${name}` as const}
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={`${name}-${index}`}>
                            {label}
                          </FieldLabel>

                          <Input
                            {...field}
                            id={`${name}-${index}`}
                            type={type}
                            aria-invalid={fieldState.invalid}
                            autoComplete="off"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  ))}
                </FieldGroup>
              </div>
            ))}
            <Button
              type="button"
              onClick={() =>
                append({
                  school: "",
                  degree: "",
                  major: "",
                  gpa: "",
                  startDate: "",
                  endDate: "",
                })
              }
              className="w-fit"
            >
              Add Education
            </Button>
            <div className="grid grid-cols-2 gap-10 w-full">
              <Button
                type="button"
                onClick={() => prevStep()}
                variant={"secondary"}
              >
                Back
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </CardContent>
      </div>
    </GetStartedWrapper>
  );
};

export default EducationHistory;
