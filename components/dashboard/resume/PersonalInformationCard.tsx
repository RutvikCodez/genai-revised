import { CircleUserRound } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { DataRow } from "./DataRow";

export const PersonalInformationCard = ({
  firstName,
  lastName,
}: WizardFormData) => (
  <SectionCard icon={CircleUserRound} title="Personal Information">
    <DataRow label="Legal Name" justify>
      {firstName} {lastName}
    </DataRow>
  </SectionCard>
);
