import { DataRow } from "./DataRow";
import { SectionCard } from "./SectionCard";

export const InfoCard = ({ icon, title, fields }: InfoCardProps) => (
  <SectionCard icon={icon} title={title}>
    {fields.map(({ label, value }) => (
      <DataRow key={label} label={label} justify>
        {value}
      </DataRow>
    ))}
  </SectionCard>
);