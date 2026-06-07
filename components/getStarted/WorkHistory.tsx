"use client";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import GetStartedWrapper from "./GetStartedWrapper";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from "../ui/button";
import { useWizardFormContext } from "@/app/context/WizardFormContext";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useFieldArray } from "react-hook-form";

const WorkHistory = () => {
  const formSchema = z.object({
    jobs: z.array(
      z.object({
        jobTitle: z.string().min(2),
        company: z.string().min(2),
        location: z.string().min(2),
        startDate: z.string().min(1),
        currentlyWorking: z.boolean().optional(),
        endDate: z.string().optional().or(z.literal("")),
        description: z.string().min(10),
      }),
    ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobs: [
        {
          jobTitle: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
          currentlyWorking: false,
        },
      ],
    },
  });

  const { control, watch } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "jobs",
  });

  const inputFields = [
    {
      name: "jobTitle" as const,
      label: "Job Title",
      type: "text",
    },
    {
      name: "company" as const,
      label: "Company",
      type: "text",
    },
    {
      name: "location" as const,
      label: "Location",
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

  const { nextStep, setData } = useWizardFormContext();

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setData((prev) => ({ ...prev, ...data }));
    nextStep();
  };

  
  return (
    <GetStartedWrapper>
      <div className="relative flex flex-col  gap-5 p-8 md:p-10">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <BriefcaseBusiness />
            Work History
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
                  <span>Job {index + 1}</span>
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
                      name={`jobs.${index}.${name}` as const}
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
                            disabled={
                              name === "endDate" &&
                              watch(`jobs.${index}.currentlyWorking`)
                            }
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  ))}
                  <Controller
                    name={`jobs.${index}.currentlyWorking`}
                    control={form.control}
                    render={({ field }) => (
                      <Field orientation={"horizontal"}>
                        <Checkbox
                          checked={field.value ?? false}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                        <FieldLabel>Currently Works Here</FieldLabel>
                      </Field>
                    )}
                  />
                  <Controller
                    name={`jobs.${index}.description`}
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className="col-span-2"
                      >
                        <FieldLabel htmlFor={"description"}>
                          Description
                        </FieldLabel>
                        <Textarea
                          {...field}
                          id={"description"}
                          aria-invalid={fieldState.invalid}
                          autoComplete="off"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </FieldGroup>
              </div>
            ))}
            <Button
              type="button"
              onClick={() =>
                append({
                  jobTitle: "",
                  company: "",
                  location: "",
                  startDate: "",
                  endDate: "",
                  currentlyWorking: false,
                  description: "",
                })
              }
              className="w-fit"
            >
              Add Job
            </Button>
            <Button type="submit">Next</Button>
          </form>
        </CardContent>
      </div>
    </GetStartedWrapper>
  );
};

export default WorkHistory;
