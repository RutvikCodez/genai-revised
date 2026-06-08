import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Medal,
  School,
} from "lucide-react";
import { SectionCard } from "./SectionCard";
import { MetaItem } from "./MetaItem";
import { DateRange } from "./DateRange";

export const EducationHistoryCard = ({
  education,
}: {
  education?: EducationUI[];
}) => (
  <SectionCard icon={GraduationCap} title="Education History">
    {education?.map(({ degree, major, school, startDate, endDate, gpa }, i) => (
      <div key={i} className="flex flex-col gap-1">
        <span>{school}</span>
        <div className="flex gap-3">
          <MetaItem icon={School}>{degree}</MetaItem>
          <MetaItem icon={BookOpen}>{major}</MetaItem>
          <MetaItem icon={CalendarDays}>
            <DateRange startDate={startDate} endDate={endDate} />
          </MetaItem>
          <MetaItem icon={Medal}>{gpa}</MetaItem>
        </div>
      </div>
    ))}
  </SectionCard>
);
