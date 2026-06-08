import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CalendarDays, GraduationCap, Medal, School } from "lucide-react";

const EducationHistoryCard = ({ education }: {education? : EducationUI[]}) => {
  return (
    <Card>
      <CardHeader className="text-center flex w-full justify-center items-center">
        <CardTitle className="flex gap-2 items-center">
          <GraduationCap />
          Education History
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 w-full">
        {education?.length &&
          education.map(
            ({ degree, major, school, startDate, endDate, gpa }, index) => (
              <div key={index} className="flex flex-col gap-1">
                <span>{school}</span>
                <div className=" flex gap-3">
                    <div className=" flex gap-1 items-center">
                        <School />
                        <span>{degree}</span>
                    </div>
                    <div className=" flex gap-1 items-center">
                        <BookOpen />
                        <span>{major}</span>
                    </div>
                    <div className=" flex gap-1 items-center">
                        <CalendarDays />
                        <span>{startDate.toDateString()} - {endDate?.toDateString()}</span>
                    </div>
                    <div className=" flex gap-1 items-center">
                        <Medal />
                        <span>{gpa}</span>
                    </div>
                </div>
              </div>
            ),
          )}
      </CardContent>
    </Card>
  );
};

export default EducationHistoryCard;
