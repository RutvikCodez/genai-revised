import {
  CalendarDays,
  BriefcaseBusiness,
  Building2,
  MapPin,
} from "lucide-react";
import { SectionCard } from "./SectionCard";
import { MetaItem } from "./MetaItem";
import { DateRange } from "./DateRange";

export const WorkHistoryCard = ({ jobs }: { jobs?: JobUI[] }) => (
  <SectionCard
    icon={BriefcaseBusiness}
    title="Work History"
    className="col-span-2"
  >
    {jobs?.map(
      (
        {
          company,
          description,
          jobTitle,
          location,
          startDate,
          currentlyWorking,
          endDate,
        },
        i,
      ) => (
        <div key={i} className="flex flex-col gap-1">
          <span>{jobTitle}</span>
          <div className="flex gap-3">
            <MetaItem icon={Building2}>{company}</MetaItem>
            <MetaItem icon={MapPin}>{location}</MetaItem>
            <MetaItem icon={CalendarDays}>
              <DateRange
                startDate={startDate}
                endDate={endDate}
                currentlyWorking={currentlyWorking}
              />
            </MetaItem>
          </div>
          <span>{description}</span>
        </div>
      ),
    )}
  </SectionCard>
);