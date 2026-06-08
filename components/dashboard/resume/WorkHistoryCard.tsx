import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarDays,
  BriefcaseBusiness,
  Building2,
  MapPin,
} from "lucide-react";

const WorkHistoryCard = ({ jobs }: { jobs?: JobUI[] }) => {
  return (
    <Card className="col-span-2">
      <CardHeader className="text-center flex w-full justify-center items-center">
        <CardTitle className="flex gap-2 items-center">
          <BriefcaseBusiness />
          Work History
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 w-full">
        {jobs?.length &&
          jobs.map(
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
              index,
            ) => (
              <div key={index} className="flex flex-col gap-1">
                <span>{jobTitle}</span>
                <div className=" flex gap-3">
                  <div className=" flex gap-1 items-center">
                    <Building2 />
                    <span>{company}</span>
                  </div>
                  <div className=" flex gap-1 items-center">
                    <MapPin />
                    <span>{location}</span>
                  </div>
                  <div className=" flex gap-1 items-center">
                    <CalendarDays />
                    <span>
                      {startDate.toDateString()} -{" "}
                      {currentlyWorking ? "Present" : endDate?.toDateString()}
                    </span>
                  </div>
                </div>
                <span>{description}</span>
              </div>
            ),
          )}
      </CardContent>
    </Card>
  );
};

export default WorkHistoryCard;
