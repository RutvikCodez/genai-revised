import { SectionCard } from "./SectionCard";
import { DataRow } from "./DataRow";

type HistoryItem = {
  title: string;
  meta: { icon: React.ElementType; value: React.ReactNode }[];
  description?: string;
};

type HistoryCardProps = {
  icon: React.ElementType;
  heading: string;
  items?: HistoryItem[];
  className?: string;
};

export const dateRange = ({ startDate, endDate, currentlyWorking }: DateRangeProps) =>
  `${startDate.toDateString()} — ${currentlyWorking ? "Present" : endDate?.toDateString()}`;

export const HistoryCard = ({ icon, heading, items, className }: HistoryCardProps) => (
  <SectionCard icon={icon} title={heading} className={className}>
    {items?.map(({ title, meta, description }, i) => (
      <div key={i} className="flex flex-col gap-1">
        <span>{title}</span>
        <div className="flex gap-3">
          {meta.map(({ icon: Icon, value }, j) => (
            <DataRow key={j} icon={Icon}>{value}</DataRow>
          ))}
        </div>
        {description && <span>{description}</span>}
      </div>
    ))}
  </SectionCard>
);