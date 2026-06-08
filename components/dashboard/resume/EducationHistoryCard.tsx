import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Medal,
  School,
} from "lucide-react";
import { dateRange, HistoryCard } from "./HistoryCard";

export const EducationHistoryCard = ({
  education,
}: {
  education?: EducationUI[];
}) => (
  <HistoryCard
    icon={GraduationCap}
    heading="Education History"
    items={education?.map(
      ({ school, degree, major, startDate, endDate, gpa }) => ({
        title: school,
        meta: [
          { icon: School, value: degree },
          { icon: BookOpen, value: major },
          { icon: CalendarDays, value: dateRange({ startDate, endDate }) },
          { icon: Medal, value: gpa },
        ],
      }),
    )}
  />
);
