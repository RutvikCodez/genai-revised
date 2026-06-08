import { CircleUserRound } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { InfoRow } from "./InfoRow";

export const PersonalInformationCard = ({
  firstName,
  lastName,
}: WizardFormData) => (
  <SectionCard icon={CircleUserRound} title="Personal Information">
    <InfoRow label="Legal Name">
      {firstName} {lastName}
    </InfoRow>
  </SectionCard>
);
