"use client";
import { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { Field, FieldError } from "../ui/field";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

export function SkillsField<T extends FieldValues>({
  name,
  control,
  placeholder = "React, TypeScript, Node.js...",
  max = 25,
}: SkillsFieldProps<T>) {
  const [input, setInput] = useState("");

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const skills: string[] = field.value ?? [];

        const add = () => {
          const value = input.trim();
          if (!value || skills.length >= max) return;
          field.onChange([...skills, value]);
          setInput("");
        };

        const remove = (i: number) =>
          field.onChange(skills.filter((_, idx) => idx !== i));

        return (
          <Field data-invalid={fieldState.invalid} className="flex flex-col gap-3">
            <Input
              value={input}
              placeholder={placeholder}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  add();
                }
              }}
            />

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <Badge key={`${skill}-${i}`} variant="secondary" className="gap-2 px-3 py-1">
                  {skill}
                  <button
                    type="button"
                    onClick={() => remove(i)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ×
                  </button>
                </Badge>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">
              {skills.length}/{max} skills added
            </p>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        );
      }}
    />
  );
}