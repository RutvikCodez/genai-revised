import { Card, CardContent } from "@/components/ui/card";
import ProgressChart from "./ProgressChart";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, CircleQuestionMark, UserStar } from "lucide-react";

const ScoreCard = ({
  jobTitle,
  matchScore,
  company,
  behavioralQuestionLength,
  technicalQuestionLength,
  day
}: ScoreCardProps) => {
  return (
    <Card>
      <CardContent className="flex gap-10 items-center">
        <div className="shrink-0">
          <ProgressChart matchScore={matchScore} />
        </div>
        <div className="flex flex-col gap-1">
          <span>Match score</span>
          <h4>{jobTitle}</h4>
          <div className="flex gap-2">
            <Badge>
              <Building2 />
              {company}
            </Badge>
            <Badge variant={"outline"} >
              <CircleQuestionMark />
              {technicalQuestionLength}
              technical
            </Badge>
            <Badge variant={"outline"} >
              <UserStar />
              {behavioralQuestionLength}
              behavioral
            </Badge>
            <Badge variant={"outline"} >
              <Calendar />
              {day}
              -day plan
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;
