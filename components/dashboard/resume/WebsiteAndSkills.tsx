import { Badge } from "@/components/ui/badge";
import { FileSearchCorner } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { DataRow } from "./DataRow";

export const WebsiteAndSkills = ({ linkedin, skills }: WizardFormData) => (
  <SectionCard icon={FileSearchCorner} title="Websites & Skills">
    <DataRow label="LinkedIn" justify>
      {linkedin}
    </DataRow>
    <DataRow label="Skills" justify>
      <div className="flex flex-wrap gap-2">
        {skills?.map((skill, i) => (
          <Badge key={i}>{skill}</Badge>
        ))}
      </div>
    </DataRow>
  </SectionCard>
);
