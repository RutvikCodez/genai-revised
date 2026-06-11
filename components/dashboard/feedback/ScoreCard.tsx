import { Card, CardContent } from "@/components/ui/card";
import ProgressChart from "./ProgressChart";
import { Badge } from "@/components/ui/badge";

import {
  Building2,
  Calendar,
  CircleQuestionMark,
  UserStar,
  TrendingUp,
} from "lucide-react";

const ScoreCard = ({
  jobTitle,
  matchScore,
  company,
  behavioralQuestionLength,
  technicalQuestionLength,
  day,
}: ScoreCardProps) => {
  const meta = [
    {
      icon: Building2,
      text: company,
    },
    {
      icon: CircleQuestionMark,
      text: `${technicalQuestionLength} technical`,
    },
    {
      icon: UserStar,
      text: `${behavioralQuestionLength} behavioral`,
    },
    {
      icon: Calendar,
      text: `${day}-day plan`,
    },
  ];

  return (
    <Card className="group transition-all hover:shadow-sm">
      <CardContent className="flex flex-col gap-6 md:flex-row md:items-center">
        {/* Score Section */}
        <div className="flex items-center gap-5">
          <div className="relative shrink-0">
            <ProgressChart matchScore={matchScore} />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              Match Score
            </div>

            <h3 className="text-lg font-semibold leading-tight">
              {jobTitle}
            </h3>

            <p className="text-sm text-muted-foreground">
              AI-based compatibility analysis with job requirements
            </p>
          </div>
        </div>

        {/* Meta Section */}
        <div className="flex flex-wrap gap-2 md:ml-auto">
          {meta.map((item, i) => {
            const Icon = item.icon;

            return (
              <Badge
                key={i}
                variant="secondary"
                className="flex items-center gap-1.5"
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="text-xs">
                  {item.text}
                </span>
              </Badge>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;