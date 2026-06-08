import { Badge } from "@/components/ui/badge";
import { FileSearchCorner } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { InfoRow } from "./InfoRow";

export const WebsiteAndSkills = ({ linkedin, skills }: WizardFormData) => (
  <SectionCard icon={FileSearchCorner} title="Websites & Skills">
    <InfoRow label="LinkedIn">{linkedin}</InfoRow>
    <InfoRow label="Skills">
      <div className="flex flex-wrap gap-2">
        {skills?.map((skill, i) => (
          <Badge key={i}>{skill}</Badge>
        ))}
      </div>
    </InfoRow>
  </SectionCard>
);
