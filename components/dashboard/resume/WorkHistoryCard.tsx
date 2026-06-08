import { BriefcaseBusiness, Building2, CalendarDays, MapPin } from "lucide-react";
import { dateRange, HistoryCard } from "./HistoryCard";

export const WorkHistoryCard = ({ jobs }: { jobs?: JobUI[] }) => (
  <HistoryCard
    icon={BriefcaseBusiness}
    heading="Work History"
    className="col-span-2"
    items={jobs?.map(({ jobTitle, company, location, startDate, endDate, currentlyWorking, description }) => ({
      title: jobTitle,
      meta: [
        { icon: Building2, value: company },
        { icon: MapPin, value: location },
        { icon: CalendarDays, value: dateRange({ startDate, endDate, currentlyWorking }) },
      ],
      description,
    }))}
  />
);