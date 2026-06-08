import { SquareUserRound } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { DataRow } from "./DataRow"; 

export const ContactInformationCard = ({
  addressLine1,
  addressLine2,
  phone,
  email,
}: WizardFormData) => (
  <SectionCard icon={SquareUserRound} title="Contact Information">
    <DataRow label="Address" justify> 
      {addressLine1} {addressLine2}
    </DataRow>
    <DataRow label="Phone" justify>{phone}</DataRow>
    <DataRow label="Email" justify>{email}</DataRow>
  </SectionCard>
);