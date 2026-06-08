import { SquareUserRound } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { InfoRow } from "./InfoRow";

export const ContactInformationCard = ({
  addressLine1,
  addressLine2,
  phone,
  email,
}: WizardFormData) => (
  <SectionCard icon={SquareUserRound} title="Contact Information">
    <InfoRow label="Address">
      {addressLine1} {addressLine2}
    </InfoRow>
    <InfoRow label="Phone">{phone}</InfoRow>
    <InfoRow label="Email">{email}</InfoRow>
  </SectionCard>
);
